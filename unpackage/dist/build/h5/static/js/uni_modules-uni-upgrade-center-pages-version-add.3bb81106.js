(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-upgrade-center-pages-version-add"],{"0264":function(t,a,e){"use strict";var n=e("c963"),i=e.n(n);i.a},"08a0":function(t,a,e){"use strict";e.r(a);var n=e("a95a"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"1c64":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var n={uniForms:e("07c0").default,uniFormsItem:e("1373").default,uniEasyinput:e("e230").default,uniDataCheckbox:e("d1f8").default,showInfo:e("5d09").default,uniFilePicker:e("5466").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("v-uni-view",{staticClass:"uni-header"},[e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-view",{staticClass:"uni-title"},[t._v("包类型")]),e("v-uni-view",{staticClass:"uni-sub-title"},[t._v(t._s(t.type_valuetotext[t.formData.type]))])],1)],1),e("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind",labelWidth:t.labelWidth}},[e("uni-forms-item",{attrs:{name:"appid",label:"AppID",required:!0}},[e("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:t.formData.appid,callback:function(a){t.$set(t.formData,"appid",a)},expression:"formData.appid"}})],1),e("uni-forms-item",{attrs:{name:"name",label:"应用名称"}},[e("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("uni-forms-item",{attrs:{name:"title",label:"更新标题"}},[e("uni-easyinput",{attrs:{placeholder:"更新标题"},model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),e("uni-forms-item",{attrs:{name:"contents",label:"更新内容",required:!0}},[e("v-uni-textarea",{staticClass:"uni-textarea-border",staticStyle:{"box-sizing":"content-box"},attrs:{"auto-height":!0,value:t.formData.contents},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("contents",a.detail.value)},"update:value":function(a){arguments[0]=a=t.$handleEvent(a),function(a){return t.formData.contents=a}.apply(void 0,arguments)}}})],1),e("uni-forms-item",{attrs:{name:"platform",label:"平台",required:!0}},[e("uni-data-checkbox",{attrs:{multiple:t.isWGT,localdata:t.platformLocaldata},model:{value:t.formData.platform,callback:function(a){t.$set(t.formData,"platform",a)},expression:"formData.platform"}})],1),e("uni-forms-item",{attrs:{name:"version",label:"版本号",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"当前包版本号，必须大于当前线上发行版本号"},model:{value:t.formData.version,callback:function(a){t.$set(t.formData,"version",a)},expression:"formData.version"}})],1),t.isWGT?e("uni-forms-item",{attrs:{name:"min_uni_version",label:"原生App最低版本",required:t.isWGT}},[e("uni-easyinput",{attrs:{placeholder:"原生App最低版本"},model:{value:t.formData.min_uni_version,callback:function(a){t.$set(t.formData,"min_uni_version",a)},expression:"formData.min_uni_version"}}),e("show-info",{attrs:{content:t.minUniVersionContent}})],1):t._e(),t.isiOS?t._e():e("uni-forms-item",{attrs:{label:"上传apk包"}},[e("uni-file-picker",{attrs:{"file-extname":t.fileExtname,disabled:t.hasPackage,returnType:"object","file-mediatype":"all",limit:"1"},on:{success:function(a){arguments[0]=a=t.$handleEvent(a),t.packageUploadSuccess.apply(void 0,arguments)},delete:function(a){arguments[0]=a=t.$handleEvent(a),t.packageDelete.apply(void 0,arguments)}},model:{value:t.appFileList,callback:function(a){t.appFileList=a},expression:"appFileList"}},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-button",{staticStyle:{margin:"0"},attrs:{type:"primary",size:"mini"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectFile.apply(void 0,arguments)}}},[t._v("选择文件")]),e("v-uni-text",{staticStyle:{padding:"10px","font-size":"12px",color:"#666"}},[t._v("上传apk到当前服务空间的云存储中，上传成功后，会自动使用云存储地址填充下载链接")])],1)],1),t.hasPackage?e("v-uni-text",{staticStyle:{"padding-left":"20px",color:"#a8a8a8"}},[t._v(t._s(Number(t.appFileList.size/1024/1024).toFixed(2))+"M")]):t._e()],1),e("uni-forms-item",{attrs:{name:"url",label:t.isiOS?"AppStore":"包地址",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"可下载安装包地址",maxlength:-1},model:{value:t.formData.url,callback:function(a){t.$set(t.formData,"url",a)},expression:"formData.url"}}),e("show-info",{attrs:{top:-80,content:t.uploadFileContent}})],1),t.isWGT?e("uni-forms-item",{attrs:{name:"is_silently",label:"静默更新"}},[e("v-uni-switch",{attrs:{checked:t.formData.is_silently},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("is_silently",a.detail.value)}}}),e("show-info",{attrs:{top:-80,content:t.silentlyContent}})],1):t._e(),t.isiOS?t._e():e("uni-forms-item",{attrs:{name:"is_mandatory",label:"强制更新"}},[e("v-uni-switch",{attrs:{checked:t.formData.is_mandatory},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("is_mandatory",a.detail.value)}}}),e("show-info",{attrs:{content:t.mandatoryContent}})],1),e("uni-forms-item",{attrs:{name:"stable_publish",label:"上线发行"}},[e("v-uni-switch",{attrs:{checked:t.formData.stable_publish},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("stable_publish",a.detail.value)}}}),e("show-info",{attrs:{top:-40,content:t.stablePublishContent2}})],1),e("uni-forms-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"type",label:"安装包类型"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.type_localdata},model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("发布")]),e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px","margin-left":"15px"},attrs:{type:"warn"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.back.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)],1)},s=[]},"6a8f":function(t,a,e){"use strict";e.r(a);var n=e("1c64"),i=e("08a0");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("0264");var r=e("f0c5"),o=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"fd742aa2",null,!1,n["a"],void 0);a["default"]=o.exports},a95a:function(t,a,e){"use strict";(function(t){e("7a82");var n=e("dbce").default,i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(e("c7eb")),r=i(e("5530")),o=i(e("1da1"));e("a9e3"),e("14d9"),e("d9e2"),e("d401"),e("d3b7"),e("159b"),e("acd8"),e("4de4"),e("caad"),e("2532"),e("25f0");e("f3f4");var l=n(e("3e12")),u=e("84d9"),c=i(e("eb7d")),d=t.database(),f=(d.command,u.appVersionListDbName);var p={components:{showInfo:c.default},mixins:[l.default],data:function(){return{latestVersion:"0.0.0",lastVersionId:""}},onLoad:function(t){var a=this;return(0,o.default)((0,s.default)().mark((function e(){var n,i,o;return(0,s.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.appid,i=t.name,o=t.type,!(n&&o&&i)){e.next=8;break}return a.formData=(0,r.default)((0,r.default)({},a.formData),{appid:n,name:i,type:o}),e.next=5,a.getDetail(n,o);case 5:a.latestStableData=e.sent,!a.isWGT&&a.latestStableData.length&&a.setFormData("Android"),a.isWGT&&a.rules.min_uni_version.rules.push({required:!0});case 8:case"end":return e.stop()}}),e)})))()},watch:{isiOS:function(t){t?this.setFormData("iOS"):this.hasPackage?this.formData.url=this.appFileList.url:this.formData.url=""},"formData.platform":function(t){this.isWGT&&this.setFormData(t)}},methods:{setFormData:function(t){uni.showLoading({mask:!0}),this.latestVersion="0.0.0",this.lastVersionId="";var a=this.getData(this.latestStableData,t)[0];if(a){var e=a._id,n=a.version,i=a.name,s=a.platform,r=a.min_uni_version,o=a.url;this.lastVersionId=e,this.latestVersion=n,this.formData.name=i,this.isWGT?this.formData.min_uni_version=r:(delete this.formData.min_uni_version,this.formData.platform=s[0],this.isiOS&&(this.formData.url=o))}else this.isWGT&&(this.formData.min_uni_version="");uni.hideLoading()},submit:function(){var t=this;this.formData.url||!this.isiOS?(uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(a){if(a.url=t.formData.url,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";t=String(t).split("."),a=String(a).split(".");for(var e=Math.min(t.length,a.length),n=0,i=0;i<e;i++){var s=Number(t[i]),r=Number(a[i]);if(s>r){n=1;break}if(s<r){n=-1;break}}if(0===n&&t.length!==a.length)for(var o=t.length>a.length,l=o?t:a,u=e;u<l.length;u++){var c=Number(l[u]);if(c>0){n=o?1:-1;break}}return n}(t.latestVersion,a.version)>=0)throw uni.showModal({content:"版本号必须大于当前已上线版本（".concat(t.latestVersion,"）"),showCancel:!1}),new Error("版本号必须大于已上线版本（${this.latestVersion}）");t.isWGT||(a.platform=[a.platform]),(t.isiOS||t.isWGT)&&delete a.store_list,a.store_list&&a.store_list.forEach((function(t){t.priority=parseFloat(t.priority)})),t.submitForm(a)})).catch((function(t){uni.hideLoading()}))):uni.showToast({icon:"error",title:"AppStore 链接必填"})},submitForm:function(t){var a=this;return(0,o.default)((0,s.default)().mark((function e(){var n,i,r;return(0,s.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=a.createCenterRecord(t),n=d.collection(f),i=[],a.isWGT){e.next=7;break}return e.next=6,a.getDetail(t.appid,t.type,a.createStatQuery(t));case 6:i=e.sent;case 7:i.length?(t.create_date=Date.now(),r=n.doc(i[0]._id).update(t)):r=n.add(t),r.then(function(){var e=(0,o.default)((0,s.default)().mark((function e(i){return(0,s.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.stable_publish||!a.lastVersionId){e.next=3;break}return e.next=3,n.doc(a.lastVersionId).update({stable_publish:!1});case 3:uni.showToast({title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}));case 9:case"end":return e.stop()}}),e)})))()},getDetail:function(t,a){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return uni.showLoading({mask:!0}),d.collection(f).where(Object.assign({appid:t,type:a,stable_publish:!0},e)).field(l.fields).get().then((function(t){return t.result.data})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getStoreList:function(t){return d.collection("opendb-app-list").where({appid:t}).get().then((function(t){var a=t.result.data[0];return a.store_list||[]}))},getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;return"string"===typeof a?t.filter((function(t){return t.platform.includes(a)})):t.filter((function(t){return t.platform.toString()===a.toString()}))},back:function(){var t=this;uni.showModal({title:"取消发布",content:this.hasPackage?"将会删除已上传的包":void 0,success:function(a){a.confirm&&(t.hasPackage&&t.deleteFile([t.appFileList.url]),uni.navigateBack())}})}}};a.default=p}).call(this,e("a9ff")["default"])},c963:function(t,a,e){var n=e("ed67");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("ded6ab36",n,!0,{sourceMap:!1,shadowMode:!1})},ed67:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-fd742aa2] .uni-forms-item__content{display:flex;align-items:center}.uni-button-group uni-button[data-v-fd742aa2]{margin-left:15px}.uni-button-group uni-button[data-v-fd742aa2]:first-child{margin-left:0}.title_padding[data-v-fd742aa2]{padding-bottom:15px;display:block}[data-v-fd742aa2] .uni-file-picker__files{max-width:100%}',""]),t.exports=a}}]);