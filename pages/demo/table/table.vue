<template>
	<view>
		<view class="uni-header">
			<view class="uni-group">
				<uni-file-picker ref="filePicker" v-model="appFileList" file-mediatype="all" limit="1"
					@select="btLoading = true" @fail="btLoading = false" @progress="uploadProgress"
					@success="uploadSuccess">
					<button :loading="btLoading" type="primary" size="mini" @click="selectFile">选择文件</button>
					<span v-if="progress" class="progress">{{ progress }} %</span>
				</uni-file-picker>
			</view>
		</view>
		<view class="uni-container">
			<unicloud-db ref="udb" collection="upload-files" :field="field" :where="where" page-data="replace"
				:orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
				v-slot:default="{ data, pagination, loading, error, options }" :options="options" loadtime="manual">
				<uni-table :loading="loading" border stripe :emptyText="$t('common.empty')"
					@selection-change="selectionChange">
					<uni-tr>
						<uni-th align="center">序号</uni-th>
						<uni-th width="220" align="center">上传时间</uni-th>
						<uni-th width="220" align="center">文件名称</uni-th>
						<uni-th width="100" align="center">文件类别</uni-th>
						<uni-th align="center">文件大小</uni-th>
						<uni-th align="center">路径</uni-th>
						<uni-th width="200" align="center">设置</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in data" :key="index">
						<uni-td align="center">{{ index + 1 }}</uni-td>
						<uni-td align="center">{{ item.time }}</uni-td>
						<uni-td align="center">{{ item.name }}</uni-td>
						<uni-td align="center">{{ getTypeName(item) }}</uni-td>
						<uni-td align="center">{{ getSizeValue(item.size) }}</uni-td>
						<uni-td align="center">
							<a class="path" :href="item.url" target="_blank">预览</a>
						</uni-td>
						<uni-td>
							<view class="uni-group">
								<button class="uni-button" size="mini" type="primary"
									@click="openDialog(item, index)">查看二维码</button>
								<button class="uni-button" size="mini" type="warn"
									@click="onDelete(item, index)">{{ $t('common.button.delete') }}</button>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination show-iconn show-page-size :page-size="pagination.size" v-model="pagination.current"
						:total="pagination.count" @change="onPageChanged" @pageSizeChange="changeSize" />
				</view>
			</unicloud-db>
		</view>

		<uni-popup ref="qrDialog" id="qrDialog" type="dialog">
			<uni-popup-dialog type="info" :before-close="true" cancelText="下载" confirmText="关闭" @close="doDownload()"
				@confirm="closeDialog()" :title="dialogTitle">
				<view class="qrcode">
					<uqrcode ref="uqrcode" canvas-id="qrcode" :value="qrCodeValue" :options="{ margin: 10 }"></uqrcode>
				</view>
				<template v-slot:loading>
					<text style="color: green;">loading...</text>
				</template>
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
				fileName: '',
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
			uploadProgress({
				index,
				progress,
				tempFile
			}) {
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
			getTypeName(item) {
				const json = JSON.parse(item.content)
				const images = ['bmp', 'pcp', 'gif', 'jpg', 'psd', 'png', 'jpeg']
				const docs = ['xls', 'xlsx', 'doc', 'docx', 'txt']
				const videos = ['wmv', 'asf', 'asx', 'rm', 'rmvb', 'mp4', '3gp', 'mov', 'm4v', 'avi', 'dat', 'mkv', 'flv',
					'vob', 'mpg', 'mpeg'
				]
				let name = '其他'
				const ext = json.extname
				if (images.indexOf(ext) !== -1) {
					name = '图片'
				} else if (docs.indexOf(ext) !== -1) {
					name = '文档'
				} else if (videos.indexOf(ext) !== -1) {
					name = '视频'
				}
				return name
			},
			onView(item) {
				const json = JSON.parse(item.content)
				const docs = ['doc', 'xls', 'ppt', 'pdf', 'docx', 'xlsx', 'pptx']
				const images = ['png', 'jpeg', 'jpg', 'bmp', 'gif', 'svg', 'webp']
				const ext = json.extname
				if (images.indexOf(ext) !== -1) {
					uni.previewImage({
						urls: [item.url],
						longPressActions: {}
					});
				} else {
					uni.downloadFile({
						url: item.url,
						success: function(res) {
							var filePath = res.tempFilePath;
							uni.openDocument({
								filePath: filePath,
								showMenu: true,
								success: data => {},
								fail: err => {
									uni.showToast({
										title: '暂不支持此类型文件的预览',
										icon: 'error',
										duration: 2000
									});
								}
							});
						}
					});
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
			openDialog(item) {
				this.$refs.qrDialog.open();
				this.dialogTitle = item.name;
				const extname = JSON.parse(item.content).extname
				const name = JSON.parse(item.content).name
				const index = name.lastIndexOf(`.${extname}`)
				this.fileName = `${name.substring(0, index)}`
				this.drawQRCode(item.url);
			},
			closeDialog() {
				this.$refs.qrDialog.close();
			},
			drawQRCode(url) {
				this.qrCodeValue = url;
			},
			doDownload() {
				this.$refs.uqrcode.toTempFilePath({
					success: res => {
						// 这里是获取到的图片base64编码,这里只是个例子哈，要自行编码图片替换这里才能测试看到效果
						const imgUrl = res.tempFilePath
						// 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候），那么调用该方法去下载图片
						if (window.navigator.msSaveOrOpenBlob) {
							var bstr = atob(imgUrl.split(',')[1])
							var n = bstr.length
							var u8arr = new Uint8Array(n)
							while (n--) {
								u8arr[n] = bstr.charCodeAt(n)
							}
							var blob = new Blob([u8arr])
							window.navigator.msSaveOrOpenBlob(blob, `${this.fileName}.png`)
						} else {
							// 这里就按照chrome等新版浏览器来处理
							const a = document.createElement('a')
							a.href = imgUrl
							a.setAttribute('download', this.fileName)
							a.click()
						}
					}
				});
			},
			keydown() {
				console.log('keydown')
			}
		}
	};
</script>

<style scoped>
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

	.path {
		color: #007BFF;
		cursor: pointer;
	}
</style>
