(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-upgrade-center-pages-version-detail"],{2263:function(t,e,a){var n=a("ca81");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("89d85e9a",n,!0,{sourceMap:!1,shadowMode:!1})},"31e0":function(t,e,a){"use strict";a.r(e);var n=a("61c1"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"3e12":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.fields=e.default=void 0;var i=n(a("c7eb")),r=n(a("3835")),o=n(a("1da1")),s=n(a("5530"));a("caad"),a("2532"),a("b64b");var l=a("f3f4");function u(t){var e={};for(var a in l.validator)t.includes(a)&&(e[a]=l.validator[a]);return e}e.fields="appid,name,title,contents,platform,type,version,min_uni_version,url,stable_publish,is_silently,is_mandatory,create_date";var c={data:function(){return{labelWidth:"80px",enableiOSWgt:!0,silentlyContent:"静默更新：App升级时会在后台下载wgt包并自行安装。新功能在下次启动App时生效",mandatoryContent:"强制更新：App升级弹出框不可取消",stablePublishContent:"同时只可有一个线上发行版，线上发行不可更设为下线。\n未上线可以设为上线发行并自动替换当前线上发行版",stablePublishContent2:"使用本包替换当前线上发行版",uploadFileContent:"可下载安装包地址。上传文件到云存储自动填写，也可以手动填写",minUniVersionContent:"上次使用新Api或打包新模块的App版本",priorityContent:"检查更新时，按照优先级从大到小依次尝试跳转商店。如果都跳转失败，则会打开浏览器使用下载链接下载apk安装包",latestStableData:[],appFileList:null,type_valuetotext:l.enumConverter.type_valuetotext,preUrl:"",formData:{appid:"",name:"",title:"",contents:"",platform:[],type:"",version:"",min_uni_version:"",url:"",stable_publish:!1,create_date:null},formOptions:{platform_localdata:[{value:"Android",text:"安卓"},{value:"iOS",text:"苹果"}],type_localdata:[{value:"native_app",text:"原生App安装包"},{value:"wgt",text:"App资源包"}]},rules:(0,s.default)({},u(["appid","contents","platform","type","version","min_uni_version","url","stable_publish","title","name","is_silently","is_mandatory"]))}},onReady:function(){this.$refs.form.setRules(this.rules)},computed:{isWGT:function(){return"wgt"===this.formData.type},isiOS:function(){return!this.isWGT&&this.formData.platform.includes("iOS")},hasPackage:function(){return this.appFileList&&!!Object.keys(this.appFileList).length},fileExtname:function(){return this.isWGT?["wgt"]:["apk"]},platformLocaldata:function(){return this.isWGT?this.enableiOSWgt?this.formOptions.platform_localdata:[this.formOptions.platform_localdata[0]]:this.formOptions.platform_localdata},uni_platform:function(){return(this.isiOS?"iOS":"Android").toLocaleLowerCase()}},methods:{packageUploadSuccess:function(t){uni.showToast({icon:"success",title:"上传成功",duration:800}),this.preUrl=this.formData.url,this.formData.url=t.tempFilePaths[0]},deleteFile:function(t){return this.$request("deleteFile",{fileList:t},{functionName:"uni-upgrade-center"})},packageDelete:function(t){var e=this;return(0,o.default)((0,i.default)().mark((function a(){var n,o,s;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.hasPackage){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,e.deleteFile([t.tempFilePath]);case 4:n=a.sent,o=(0,r.default)(n,1),s=o[0],s.success&&(uni.showToast({icon:"success",title:"删除成功",duration:800}),e.formData.url=e.preUrl,e.$refs.form.clearValidate("url"));case 8:case"end":return a.stop()}}),a)})))()},selectFile:function(){this.hasPackage&&uni.showToast({icon:"none",title:"只可上传一个文件，请删除已上传后重试",duration:1e3})},createCenterRecord:function(t){return(0,s.default)((0,s.default)({},t),{},{uni_platform:this.uni_platform,create_env:"upgrade-center"})},createCenterQuery:function(t){var e=t.appid;return{appid:e,create_env:"upgrade-center"}},createStatQuery:function(t){var e=t.appid,a=t.type,n=t.version,i=t.uni_platform;return{appid:e,type:a,version:n,uni_platform:i||this.uni_platform,create_env:"uni-stat",stable_publish:!1}}}};e.default=c},5655:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-text",[this._v(this._s(this.dateShow))])},i=[]},"5d09":function(t,e,a){"use strict";a.r(e);var n=a("d9c7"),i=a("bed3");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("8f84");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"69185602",null,!1,n["a"],void 0);e["default"]=s.exports},"61c1":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{content:String,top:{type:[Number,String],default:-60},left:{type:[Number,String],default:-100},width:{type:[Number,String],default:200}},data:function(){return{showStableInfo:!1,arrowStyle:{}}},methods:{mouseenter:function(t){this.showStableInfo=!0}}};e.default=n},"71ef":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{content:String,top:{type:[Number,String],default:-60},left:{type:[Number,String],default:-100},width:{type:[Number,String],default:200}},data:function(){return{showStableInfo:!1,arrowStyle:{}}},methods:{mouseenter:function(t){this.showStableInfo=!0}}};e.default=n},"79f4":function(t,e,a){"use strict";a.r(e);var n=a("9605"),i=a("b5c1");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("ad5b");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"c9c3446e",null,!1,n["a"],void 0);e["default"]=s.exports},"7ae1":function(t,e,a){"use strict";a.r(e);var n=a("5655"),i=a("96fe");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"690ab064",null,!1,n["a"],void 0);e["default"]=s.exports},"7d0b":function(t,e,a){"use strict";var n=a("9989"),i=a.n(n);i.a},"84d9":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.appVersionListDbName=e.appListDbName=void 0,e.deepClone=function t(e){if([null,void 0,NaN,!1].includes(e))return e;if("object"!==(0,i.default)(e)&&"function"!==typeof e)return e;var a=function(t){return"[object Array]"===Object.prototype.toString.call(t)}(e)?[]:{};for(var n in e)e.hasOwnProperty(n)&&(a[n]="object"===(0,i.default)(e[n])?t(e[n]):e[n]);return a},e.defaultDisplayApp=void 0;var i=n(a("53ca"));a("d3b7"),a("caad");e.appListDbName="opendb-app-list";e.appVersionListDbName="opendb-app-versions";e.defaultDisplayApp=""},"8f84":function(t,e,a){"use strict";var n=a("f5f7"),i=a.n(n);i.a},9605:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniForms:a("07c0").default,uniFormsItem:a("1373").default,uniEasyinput:a("e230").default,uniDataCheckbox:a("d1f8").default,showInfo:a("5d09").default,uniFilePicker:a("5466").default,uniDateformat:a("7ae1").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("包类型")]),a("v-uni-view",{staticClass:"uni-sub-title",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[t._v(t._s(t.type_valuetotext[t.formData.type]))])],1),t.isStable?t._e():a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePackage.apply(void 0,arguments)}}},[t._v("删除")])],1)],1),a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind",labelWidth:t.labelWidth}},[a("uni-forms-item",{attrs:{name:"appid",label:"AppID",required:!0}},[a("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:t.formData.appid,callback:function(e){t.$set(t.formData,"appid",e)},expression:"formData.appid"}})],1),a("uni-forms-item",{attrs:{name:"name",label:"应用名称"}},[a("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("uni-forms-item",{attrs:{name:"title",label:"更新标题"}},[a("uni-easyinput",{attrs:{disabled:t.detailsState,placeholder:"更新标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("uni-forms-item",{attrs:{name:"contents",label:"更新内容",required:!0}},[a("v-uni-textarea",{staticClass:"uni-textarea-border",staticStyle:{"box-sizing":"content-box"},attrs:{"auto-height":!0,disabled:t.detailsState,value:t.formData.contents},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("contents",e.detail.value)},"update:value":function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.formData.contents=e}.apply(void 0,arguments)}}})],1),a("uni-forms-item",{attrs:{name:"platform",label:"平台",required:!0}},[a("uni-data-checkbox",{attrs:{disabled:!0,multiple:!0,localdata:t.platformLocaldata},model:{value:t.formData.platform,callback:function(e){t.$set(t.formData,"platform",e)},expression:"formData.platform"}})],1),a("uni-forms-item",{attrs:{name:"version",label:"版本号",required:!0}},[a("uni-easyinput",{attrs:{disabled:!0,placeholder:"当前包版本号，必须大于当前已上线版本号"},model:{value:t.formData.version,callback:function(e){t.$set(t.formData,"version",e)},expression:"formData.version"}})],1),t.isWGT?a("uni-forms-item",{attrs:{name:"min_uni_version",label:"原生App最低版本",required:t.isWGT}},[a("uni-easyinput",{attrs:{disabled:t.detailsState,placeholder:"原生App最低版本"},model:{value:t.formData.min_uni_version,callback:function(e){t.$set(t.formData,"min_uni_version",e)},expression:"formData.min_uni_version"}}),a("show-info",{attrs:{content:t.minUniVersionContent}})],1):t._e(),t.isiOS||t.detailsState?t._e():a("uni-forms-item",{attrs:{label:"上传apk包"}},[a("uni-file-picker",{attrs:{"file-extname":t.fileExtname,disabled:t.hasPackage,returnType:"object","file-mediatype":"all",limit:"1"},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.packageUploadSuccess.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.packageDelete.apply(void 0,arguments)}},model:{value:t.appFileList,callback:function(e){t.appFileList=e},expression:"appFileList"}},[a("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectFile.apply(void 0,arguments)}}},[t._v("选择文件")])],1),t.hasPackage?a("v-uni-text",{staticStyle:{"padding-left":"20px",color:"#a8a8a8"}},[t._v(t._s(Number(t.appFileList.size/1024/1024).toFixed(2))+"M")]):t._e()],1),a("uni-forms-item",{attrs:{name:"url",label:t.isiOS?"AppStore":"下载链接",required:!0}},[a("uni-easyinput",{attrs:{disabled:t.detailsState,placeholder:"下载链接",maxlength:-1},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),t.isWGT?a("uni-forms-item",{attrs:{name:"is_silently",label:"静默更新"}},[a("v-uni-switch",{attrs:{disabled:t.detailsState,checked:t.formData.is_silently},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("is_silently",e.detail.value),t.formData.is_silently=e.detail.value}}}),a("show-info",{attrs:{top:-80,content:t.silentlyContent}})],1):t._e(),t.isiOS?t._e():a("uni-forms-item",{attrs:{name:"is_mandatory",label:"强制更新"}},[a("v-uni-switch",{attrs:{disabled:t.detailsState,checked:t.formData.is_mandatory},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("is_mandatory",e.detail.value),t.formData.is_mandatory=e.detail.value}}}),a("show-info",{attrs:{width:"230",top:-30,content:t.mandatoryContent}})],1),a("uni-forms-item",{attrs:{name:"stable_publish",label:"上线发行"}},[a("v-uni-switch",{attrs:{disabled:t.detailsState||t.isStable,checked:t.formData.stable_publish},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("stable_publish",e.detail.value),t.formData.stable_publish=e.detail.value}}}),t.isStable?a("show-info",{attrs:{top:-50,width:"350",content:t.stablePublishContent}}):a("show-info",{attrs:{top:-40,content:t.stablePublishContent2}})],1),a("uni-forms-item",{attrs:{name:"create_date",label:"上传时间"}},[a("uni-dateformat",{attrs:{format:"yyyy-MM-dd hh:mm:ss",date:t.formData.create_date,threshold:[0,0]}})],1),a("uni-forms-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"type",label:"安装包类型"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.type_localdata},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[t.detailsState?a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detailsState=!1}}},[t._v("修改")]):t._e(),t.detailsState?t._e():a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),t.detailsState?t._e():a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelEdit.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},r=[]},"96fe":function(t,e,a){"use strict";a.r(e);var n=a("f4d3"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},9989:function(t,e,a){var n=a("fc71");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("ff47b0e0",n,!0,{sourceMap:!1,shadowMode:!1})},"9cf2":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.show-stable[data-v-69185602]{position:absolute;padding:5px 10px;background-color:#303133;color:#fff;border-radius:4px;border:1px solid #e9e9eb;z-index:99999}',""]),t.exports=e},ad5b:function(t,e,a){"use strict";var n=a("2263"),i=a.n(n);i.a},b5c1:function(t,e,a){"use strict";a.r(e);var n=a("d750"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},bed3:function(t,e,a){"use strict";a.r(e);var n=a("71ef"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},ca81:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.show-stable-info[data-v-c9c3446e]{position:absolute;left:165px;padding:5px 10px;background-color:#f4f4f5;color:#909399;border-radius:4px;border:1px solid #e9e9eb}[data-v-c9c3446e] .uni-forms-item__content{display:flex;align-items:center}.uni-button-group uni-button[data-v-c9c3446e]{margin-left:15px}.uni-button-group uni-button[data-v-c9c3446e]:first-child{margin-left:0}',""]),t.exports=e},d750:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("dbce").default,i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("c7eb")),o=i(a("1da1"));a("caad"),a("2532"),a("14d9"),a("d3b7"),a("159b"),a("acd8"),a("7db0"),a("d401"),a("25f0");a("f3f4");var s=n(a("3e12")),l=a("84d9"),u=i(a("eb7d")),c=t.database(),d=(c.command,l.appVersionListDbName);var f={components:{showInfo:u.default},mixins:[s.default],data:function(){return{showStableInfo:!1,isStable:!0,originalData:{},detailsState:!0}},onLoad:function(t){var e=this;return(0,o.default)((0,r.default)().mark((function a(){var n;return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.id,e.formDataId=n,a.next=4,e.getDetail(n);case 4:return e.isStable=e.formData.stable_publish,a.next=7,e.getLatestVersion();case 7:e.latestStableData=a.sent,e.isWGT&&e.rules.min_uni_version.rules.push({required:!0});case 9:case"end":return a.stop()}}),a)})))()},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){e.store_list=t.formData.store_list,e.store_list&&e.store_list.forEach((function(t){t.priority=parseFloat(t.priority)})),t.submitForm(e)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var e=this;return(0,o.default)((0,r.default)().mark((function a(){var n;return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=c.collection(d),n.doc(e.formDataId).update(t).then(function(){var a=(0,o.default)((0,r.default)().mark((function a(i){return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.isStable||!0!==t.stable_publish||!e.latestStableData){a.next=3;break}return a.next=3,n.doc(e.latestStableData._id).update({stable_publish:!1});case 3:uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500);case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}));case 2:case"end":return a.stop()}}),a)})))()},getDetail:function(t){var e=this;return uni.showLoading({mask:!0}),c.collection(d).doc(t).field(s.fields).get().then((function(t){var a=t.result.data[0];a&&(e.formData=a,e.originalData=(0,l.deepClone)(e.formData))})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},deletePackage:function(){var t=this;uni.showModal({title:"提示",content:"是否删除该版本",success:function(e){e.confirm&&(uni.showLoading({mask:!0}),c.collection(d).doc(t.formDataId).remove().then((function(){uni.showToast({title:"删除成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))}})},getLatestVersion:function(){var t=this;return(0,o.default)((0,r.default)().mark((function e(){var a,n;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={appid:t.formData.appid,type:t.formData.type,stable_publish:!0},t.isWGT||(a.platform=t.formData.platform[0]),e.next=4,c.collection(d).where(a).get();case 4:return n=e.sent,e.abrupt("return",n.result.data.find((function(e){return e.platform.toString()===t.formData.platform.toString()})));case 6:case"end":return e.stop()}}),e)})))()},cancelEdit:function(){var t=this,e="";!this.isiOS&&this.hasPackage&&(e+="\n将会删除已上传的包"),uni.showModal({title:"取消修改",content:e,success:function(e){e.confirm&&(t.formData=(0,l.deepClone)(t.originalData),t.detailsState=!0,t.hasPackage&&t.deleteFile([t.appFileList.url]))}})}}};e.default=f}).call(this,a("a9ff")["default"])},d9c7:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("1dfb").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{position:"relative"}},[a("uni-icons",{staticStyle:{padding:"0 10px",color:"#a8a8a8",cursor:"pointer"},attrs:{type:"info"},nativeOn:{mouseenter:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseenter.apply(void 0,arguments)},mouseleave:function(e){arguments[0]=e=t.$handleEvent(e),t.showStableInfo=!1}}}),t.showStableInfo?a("v-uni-view",{staticClass:"show-stable",style:{top:t.top+"px",left:t.left+"px",width:t.width+"px"}},[a("v-uni-text",[t._v(t._s(t.content))])],1):t._e()],1)},r=[]},e2ea:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("1dfb").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{position:"relative"}},[a("uni-icons",{staticStyle:{padding:"0 10px",color:"#a8a8a8",cursor:"pointer"},attrs:{type:"info"},nativeOn:{mouseenter:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseenter.apply(void 0,arguments)},mouseleave:function(e){arguments[0]=e=t.$handleEvent(e),t.showStableInfo=!1}}}),t.showStableInfo?a("v-uni-view",{staticClass:"show-stable",style:{top:t.top+"px",left:t.left+"px",width:t.width+"px"}},[a("v-uni-text",[t._v(t._s(t.content))])],1):t._e()],1)},r=[]},eb7d:function(t,e,a){"use strict";a.r(e);var n=a("e2ea"),i=a("31e0");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("7d0b");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"5cb9e4c1",null,!1,n["a"],void 0);e["default"]=s.exports},f3f4:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.validator=e.enumConverter=void 0;e.validator={appid:{rules:[{required:!0},{format:"string"}],label:"AppID"},name:{rules:[{format:"string"}],label:"应用名称"},title:{rules:[{format:"string"}],label:"更新标题"},contents:{rules:[{required:!0},{format:"string"}],label:"更新内容"},platform:{rules:[{required:!0},{range:[{value:"Android",text:"安卓"},{value:"iOS",text:"苹果"}]}],label:"平台"},type:{rules:[{required:!0},{format:"string"},{range:[{value:"native_app",text:"原生App安装包"},{value:"wgt",text:"wgt资源包"}]}],label:"安装包类型"},version:{rules:[{required:!0},{format:"string"}],label:"版本号"},min_uni_version:{rules:[{format:"string"}],label:"原生App最低版本"},url:{rules:[{required:!0},{format:"string"}],label:"包地址"},stable_publish:{rules:[{format:"bool"}],label:"上线发行"},create_date:{rules:[{format:"timestamp"}],label:"上传时间"},is_silently:{rules:[{format:"bool"}],label:"静默更新",defaultValue:!1},is_mandatory:{rules:[{format:"bool"}],label:"强制更新",defaultValue:!1}};e.enumConverter={platform_valuetotext:[{value:"Android",text:"安卓"},{value:"iOS",text:"苹果"}],type_valuetotext:{native_app:"原生App安装包",wgt:"wgt资源包"}}},f4d3:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("e25e");var n=a("928f"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,n.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=i},f5f7:function(t,e,a){var n=a("9cf2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("639d0c64",n,!0,{sourceMap:!1,shadowMode:!1})},fc71:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.show-stable[data-v-5cb9e4c1]{width:200px;position:absolute;padding:5px 10px;background-color:#303133;color:#fff;border-radius:4px;border:1px solid #e9e9eb;z-index:99999}',""]),t.exports=e}}]);