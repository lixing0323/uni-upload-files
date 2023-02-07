<template>
	<view>
		<view class="uni-header">
			<view class="uni-group">
				<uni-file-picker
					ref="filePicker"
					v-model="appFileList"
					file-mediatype="all"
					limit="1"
					@select="btLoading = true"
					@fail="btLoading = false"
					@progress="uploadProgress"
					@success="uploadSuccess"
				>
					<button :loading="btLoading" type="primary" size="mini" @click="selectFile">选择文件</button>
					<span v-if="progress" class="progress">{{ progress }} %</span>
				</uni-file-picker>
			</view>
		</view>
		<view class="uni-container">
			<unicloud-db
				ref="udb"
				collection="upload-files"
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
			>
				<uni-table :loading="loading" border stripe :emptyText="$t('common.empty')" @selection-change="selectionChange">
					<uni-tr>
						<uni-th align="center">序号</uni-th>
						<uni-th width="220" align="center">上传时间</uni-th>
						<uni-th width="220" align="center">文件名称</uni-th>
						<uni-th align="center">文件大小</uni-th>
						<uni-th align="center">路径</uni-th>
						<uni-th width="204" align="center">设置</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in data" :key="index">
						<uni-td align="center">{{ index + 1 }}</uni-td>
						<uni-td align="center">{{ item.time }}</uni-td>
						<uni-td align="center">{{ item.name }}</uni-td>
						<uni-td align="center">{{ getSizeValue(item.size) }}</uni-td>
						<uni-td align="center"><uni-link :href="item.url" color="#007BFF" text="查看"></uni-link></uni-td>
						<uni-td>
							<view class="uni-group">
								<button class="uni-button" size="mini" type="primary" @click="openDialog(item, index)">查看二维码</button>
								<button class="uni-button" size="mini" type="warn" @click="onDelete(item, index)">{{ $t('common.button.delete') }}</button>
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

		<uni-popup ref="qrDialog" type="dialog">
			<uni-popup-dialog type="info" :before-close="true" cancelText=" " confirmText="关闭" @confirm="closeDialog()" :title="dialogTitle">
				<view class="qrcode"><uqrcode ref="uqrcode" canvas-id="qrcode" :value="qrCodeValue" :options="{ margin: 10 }"></uqrcode></view>
			</uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
import tableData from './tableData.js';

const db = uniCloud.database();
const dbCmd = db.command;
const dbCollectionName = 'upload-files';

export default {
	data() {
		return {
			field: 'content,time,size,name,url,_id',
			options: {
				pageSize: 20,
				pageCurrent: 1
			},
			loading: false,
			appFileList: [],
			btLoading: false,
			progress: 0,
			where: '',
			orderby: 'time desc',
			qrCodeValue: '',
			dialogTitle: ''
		};
	},
	onLoad() {},
	created() {
		this.$nextTick(() => {
			this.$refs.udb.loadData();
		});
	},
	methods: {
		uploadSuccess(res) {
			uni.showToast({
				icon: 'success',
				title: '上传成功',
				duration: 800
			});
			this.putFileUrlToHost(res.tempFiles[0]);
		},
		uploadProgress({ index, progress, tempFile }) {
			this.progress = progress;
		},
		selectFile() {
			this.$refs.filePicker.clearFiles();
		},
		putFileUrlToHost(file) {
			const json = {
				content: JSON.stringify(file),
				size: Number((file.size / 1024).toFixed(2)),
				name: file.name,
				url: file.url,
				time: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
			};
			// 使用 uni-clientDB 提交数据
			this.btLoading = true;
			db.collection(dbCollectionName)
				.add(json)
				.then(res => {
					this.btLoading = false;
					this.loadData();
				})
				.catch(err => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					});
					this.btLoading = false;
				});
		},
		onPageChanged(e) {
			this.$refs.udb.loadData({
				current: e.current
			});
		},
		changeSize(pageSize) {
			this.options.pageSize = pageSize;
			this.options.pageCurrent = 1;
			this.$nextTick(() => {
				this.loadData();
			});
		},
		getSizeValue(size) {
			if (size > 1024) {
				return `${(size / 1024).toFixed(2)} MB`;
			} else {
				return `${size.toFixed(2)} KB`;
			}
		},
		loadData(clear = true) {
			this.$refs.udb.loadData({
				clear
			});
		},
		onDelete(item, index) {
			this.$refs.udb.remove(item._id);
		},
		openDialog(item, index) {
			this.$refs.qrDialog.open();
			this.dialogTitle = item.name;
			this.drawQRCode(item.url);
		},
		closeDialog() {
			this.$refs.qrDialog.close();
		},
		drawQRCode(url) {
			this.qrCodeValue = url;
		}
	}
};
</script>

<style>
/* #ifndef H5 */
page {
	padding-top: 85px;
}
/* #endif */

.progress {
	margin-left: 10px;
	position: absolute;
	top: 30px;
}
.qrcode {
	padding: 20px;
}
</style>
