<template>
	<view class="fix-top-window">
		<view class="uni-header">
			<uni-stat-breadcrumb class="uni-stat-breadcrumb-on-phone" />
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="query" @confirm="search" placeholder="请输入搜索内容" />
				<button class="uni-button hide-on-phone" type="default" size="mini" @click="search">搜索</button>
				<button class="uni-button" type="primary" size="mini" @click="navigateTo('./add')">新增</button>
				<button class="uni-button" type="warn" size="mini" :disabled="!selectedIndexs.length" @click="delTable">批量删除</button>
			</view>
		</view>
		<view class="uni-container">
			<unicloud-db
				ref="udb"
				collection="property-statistics-management"
				:field="field"
				:where="where"
				page-data="replace"
				:orderby="orderby"
				:getcount="true"
				:page-size="options.pageSize"
				:page-current="options.pageCurrent"
				v-slot:default="{ data, pagination, loading, error, options }"
				:options="options"
				loadtime="manual"
				@load="onqueryload"
			>
				<uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
					<uni-tr>
						<uni-th align="center">序号</uni-th>
						<uni-th align="center">名称</uni-th>
						<uni-th align="center">容量</uni-th>
						<uni-th align="center">介绍</uni-th>
						<uni-th align="center">类别</uni-th>
						<uni-th align="center">耗时</uni-th>
						<uni-th align="center">备注</uni-th>
						<uni-th align="center">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in data" :key="index">
						<uni-td align="center">{{ index + 1 }}</uni-td>
						<uni-td width="200" align="center">{{ item.name }}</uni-td>
						<uni-td width="100" align="center">{{ item.volumn }}</uni-td>
						<uni-td width="160" align="center">{{ item.introduce }}</uni-td>
						<uni-td width="100" align="center">{{ item.category }}</uni-td>
						<uni-td width="100" align="center">{{ item.time_consuming }}</uni-td>
						<uni-td align="center">{{ item.comment }}</uni-td>
						<uni-td>
							<view class="uni-group">
								<button class="uni-button" size="mini" type="primary" @click="navigateTo('./edit?id=' + item._id)">{{ $t('common.button.edit') }}</button>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination
						show-iconn
						show-page-size
						:page-size="pagination.size"
						v-model="pagination.current"
						:total="pagination.count"
						@change="onPageChanged"
						@pageSizeChange="changeSize"
					/>
				</view>
			</unicloud-db>
		</view>
	</view>
</template>

<script>
import { enumConverter, filterToWhere } from '@/js_sdk/validator/uni-id-tag.js';

const db = uniCloud.database();
// 表查询配置
const dbOrderBy = ''; // 排序字段
const dbSearchFields = []; // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
// 分页配置
const pageSize = 20;
const pageCurrent = 1;

const orderByMapping = {
	ascending: 'asc',
	descending: 'desc'
};

export default {
	data() {
		return {
			field: 'name,volumn,introduce,comment,category,time_consuming',
			options: {
				pageSize: 20,
				pageCurrent: 1
			},
			loading: false,
			query: '',
			where: '',
			orderby: dbOrderBy,
			orderByFieldName: '',
			selectedIndexs: [],
			imageStyles: {
				width: 64,
				height: 64
			},
			exportExcel: {
				filename: 'uni-id-tag.xls',
				type: 'xls',
				fields: {
					标签的tagid: 'tagid',
					标签名称: 'name',
					标签描述: 'description'
				}
			},
			exportExcelData: []
		};
	},
	created() {
		this.$nextTick(() => {
			this.$refs.udb.loadData();
		});
	},
	computed: {},
	methods: {
		onqueryload(data) {
			this.exportExcelData = data;
		},
		changeSize(pageSize) {
			this.options.pageSize = pageSize;
			this.options.pageCurrent = 1;
			this.$nextTick(() => {
				this.loadData();
			});
		},
		getWhere() {
			const query = this.query.trim();
			if (!query) {
				return '';
			}
			const queryRe = new RegExp(query, 'i');
			return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ');
		},
		search() {
			const newWhere = this.getWhere();
			this.where = newWhere;
			this.$nextTick(() => {
				this.loadData();
			});
		},
		loadData(clear = true) {
			this.$refs.udb.loadData({
				clear
			});
		},
		onDelete(item, index) {
			this.$refs.udb.remove(item._id);
		},
		navigateTo(url, clear) {
			// clear 表示刷新列表时是否清除页码，true 表示刷新并回到列表第 1 页，默认为 true
			uni.navigateTo({
				url,
				events: {
					refreshData: () => {
						this.loadData(clear);
					}
				}
			});
		},
		// 多选处理
		selectedItems() {
			var dataList = this.$refs.udb.dataList;
			return this.selectedIndexs.map(i => dataList[i]._id);
		},
		// 批量删除
		delTable() {
			this.$refs.udb.remove(this.selectedItems(), {
				success: res => {
					this.$refs.table.clearSelection();
				}
			});
		},
		// 多选
		selectionChange(e) {
			this.selectedIndexs = e.detail.index;
		},
		confirmDelete(id) {
			this.$refs.udb.remove(id, {
				success: res => {
					this.$refs.table.clearSelection();
				}
			});
		},
		sortChange(e, name) {
			this.orderByFieldName = name;
			if (e.order) {
				this.orderby = name + ' ' + orderByMapping[e.order];
			} else {
				this.orderby = '';
			}
			this.$refs.table.clearSelection();
			this.$nextTick(() => {
				this.$refs.udb.loadData();
			});
		},
		filterChange(e, name) {
			this._filter[name] = {
				type: e.filterType,
				value: e.filter
			};
			let newWhere = filterToWhere(this._filter, db.command);
			if (Object.keys(newWhere).length) {
				this.where = newWhere;
			} else {
				this.where = '';
			}
			this.$nextTick(() => {
				this.$refs.udb.loadData();
			});
		}
	}
};
</script>
