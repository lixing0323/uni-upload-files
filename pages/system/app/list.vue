<template>
	<view class="fix-top-window">
		<view class="uni-header">
			<uni-stat-breadcrumb class="uni-stat-breadcrumb-on-phone" />
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="query" @confirm="search"
					:placeholder="$t('common.placeholder.query')" />
				<button class="uni-button hide-on-phone" type="default" size="mini"
					@click="search">{{$t('common.button.search')}}</button>
				<button class="uni-button" type="primary" size="mini"
					@click="navigateTo('./add')">{{$t('common.button.add')}}</button>
				<button class="uni-button" type="warn" size="mini" :disabled="!selectedIndexs.length"
					@click="delTable">{{$t('common.button.batchDelete')}}</button>
				<!-- #ifdef H5 -->
				<!-- #ifndef VUE3 -->
				<download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData"
					:type="exportExcel.type" :name="exportExcel.filename">
					<button class="uni-button" type="primary" size="mini">{{$t('common.button.exportExcel')}}</button>
				</download-excel>
				<!-- #endif -->
				<!-- #endif -->
			</view>
		</view>
		<view class="uni-container">
			<unicloud-db ref="udb" collection="opendb-app-list" field="appid,name,description,create_date"
				:where="where" page-data="replace" :orderby="orderby" :getcount="true" :page-size="options.pageSize"
				:page-current="options.pageCurrent" v-slot:default="{data,pagination,loading,error,options}"
				:options="options" loadtime="manual" @load="onqueryload">
				<uni-table ref="table" :loading="loading || addAppidLoading"
					:emptyText="error.message || $t('common.empty')" border stripe type="selection"
					@selection-change="selectionChange" class="table-pc">
					<uni-tr>
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'appid')"
							sortable @sort-change="sortChange($event, 'appid')">AppID</uni-th>
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'name')"
							sortable @sort-change="sortChange($event, 'name')">????????????</uni-th>
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'description')"
							sortable @sort-change="sortChange($event, 'description')" :width="descriptionThWidth">????????????
						</uni-th>
						<uni-th align="center" filter-type="timestamp"
							@filter-change="filterChange($event, 'create_date')" sortable
							@sort-change="sortChange($event, 'create_date')">????????????</uni-th>
						<uni-th align="center" :width="buttonThWidth">??????</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in data" :key="index" :disabled="item.appid === appid">
						<uni-td align="center">{{item.appid}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td align="left">{{item.description}}</uni-td>
						<uni-td align="center">
							<uni-dateformat :threshold="[0, 0]" :date="item.create_date"></uni-dateformat>
						</uni-td>
						<uni-td align="center">
							<view v-if="item.appid === appid">
								-
							</view>
							<view v-else class="uni-group">
								<button @click="publish(item._id)" class="uni-button" size="mini"
									type="primary">{{$t('common.button.publish')}}</button>
								<button
									@click="navigateTo('/uni_modules/uni-upgrade-center/pages/version/list?appid='+item.appid, false)"
									class="uni-button" size="mini"
									type="primary">{{$t('common.button.version')}}</button>
								<button @click="navigateTo('./add?id='+item.appid, false)" class="uni-button"
									size="mini" type="primary">{{$t('common.button.edit')}}</button>
								<button @click="confirmDelete(item._id)" class="uni-button" size="mini"
									type="warn">{{$t('common.button.delete')}}</button>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>

				<view class="uni-pagination-box">
					<uni-pagination show-icon show-page-size :page-size="pagination.size" v-model="pagination.current"
						:total="pagination.count" @change="onPageChanged" @pageSizeChange="pageSizeChange" />
				</view>
			</unicloud-db>
		</view>

		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
	</view>
</template>
<script>
	import {
		enumConverter,
		filterToWhere
	} from '../../../js_sdk/validator/opendb-app-list.js';
	import {
		mapState
	} from 'vuex'

	const db = uniCloud.database()
	// ???????????????
	const dbOrderBy = 'create_date' // ????????????
	const dbSearchFields = [] // ??????????????????????????????????????????????????????
	// ????????????
	const pageSize = 20
	const pageCurrent = 1

	const orderByMapping = {
		"ascending": "asc",
		"descending": "desc"
	}

	export default {
		data() {
			return {
				query: '',
				where: '',
				orderby: dbOrderBy,
				orderByFieldName: "",
				selectedIndexs: [],
				options: {
					pageSize,
					pageCurrent,
					filterData: {},
					...enumConverter
				},
				imageStyles: {
					width: 64,
					height: 64
				},
				exportExcel: {
					"filename": "opendb-app-list.xls",
					"type": "xls",
					"fields": {
						"AppID": "appid",
						"????????????": "name",
						"????????????": "description",
						"????????????": "create_date"
					}
				},
				exportExcelData: [],
				addAppidLoading: true,
				descriptionThWidth: 380,
				buttonThWidth: 400
			}
		},
		onLoad() {
			this._filter = {}
		},
		onReady() {
			this.$refs.udb.loadData()
		},
		computed: {
			...mapState('app', ['appName', 'appid'])
		},
		methods: {
			pageSizeChange(pageSize) {
				this.options.pageSize = pageSize
				this.options.pageCurrent = 1
				this.$nextTick(() => {
					this.loadData()
				})
			},
			onqueryload(data) {
				if (!data.find(item => item.appid === this.appid)) {
					this.addCurrentAppid({
						appid: this.appid,
						name: this.appName,
						description: "admin ????????????"
					})
				} else {
					this.addAppidLoading = false
				}
				this.exportExcelData = data
			},
			changeSize(e) {
				this.pageSizeIndex = e.detail.value
			},
			addCurrentAppid(app) {
				// ?????? clientDB ???????????? appid
				db.collection('opendb-app-list').add(app).then((res) => {
					this.loadData()
					setTimeout(() => {
						uni.showModal({
							content: `????????????????????????????????????, ?????????????????????: ${this.appName}`,
							showCancel: false
						})
					}, 500)
				}).catch((err) => {

				}).finally(() => {
					this.addAppidLoading = false
				})
			},
			getWhere() {
				const query = this.query.trim()
				if (!query) {
					return ''
				}
				const queryRe = new RegExp(query, 'i')
				return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
			},
			search() {
				const newWhere = this.getWhere()
				this.where = newWhere
				this.loadData()
			},
			loadData(clear = true) {
				this.$refs.udb.loadData({
					clear
				})
			},
			onPageChanged(e) {
				this.selectedIndexs.length = 0
				this.$refs.table.clearSelection()
				this.$refs.udb.loadData({
					current: e.current
				})
			},
			navigateTo(url, clear) {
				// clear ??????????????????????????????????????????true ?????????????????????????????? 1 ??????????????? true
				uni.navigateTo({
					url,
					events: {
						refreshData: () => {
							this.loadData(clear)
						}
					}
				})
			},
			// ????????????
			selectedItems() {
				var dataList = this.$refs.udb.dataList
				return this.selectedIndexs.map(i => dataList[i]._id)
			},
			// ????????????
			delTable() {
				console.warn(
					"???????????????????????????????????? opendb-app-list ??????????????????????????????????????????????????????????????????????????????????????????????????? uni-upgrade-center ???????????????????????????????????????????????????"
				)
				this.$refs.udb.remove(this.selectedItems(), {
					success: (res) => {
						this.$refs.table.clearSelection()
					}
				})
			},
			// ??????
			selectionChange(e) {
				this.selectedIndexs = e.detail.index
			},
			confirmDelete(id) {
				console.warn(
					"???????????????????????????????????? opendb-app-list ??????????????????????????????????????????????????????????????????????????????????????????????????? uni-upgrade-center ???????????????????????????????????????????????????"
				)
				this.$refs.udb.remove(id, {
					confirmContent: '?????????????????????',
					success: (res) => {
						this.$refs.table.clearSelection()
					}
				})
			},
			sortChange(e, name) {
				this.orderByFieldName = name;
				if (e.order) {
					this.orderby = name + ' ' + orderByMapping[e.order]
				} else {
					this.orderby = ''
				}
				this.$refs.table.clearSelection()
				this.$nextTick(() => {
					this.$refs.udb.loadData()
				})
			},
			filterChange(e, name) {
				this._filter[name] = {
					type: e.filterType,
					value: e.filter
				}
				let newWhere = filterToWhere(this._filter, db.command)
				if (Object.keys(newWhere).length) {
					this.where = newWhere
				} else {
					this.where = ''
				}
				this.$nextTick(() => {
					this.$refs.udb.loadData()
				})
			},
			publish(id) {
				uni.navigateTo({
					url: '/pages/system/app/uni-portal/uni-portal?id=' + id
				})
			}
		}
	}
</script>

<style>
</style>
