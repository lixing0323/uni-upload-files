(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-login-login-withpwd~uni_modules-uni-id-pages-pages-register-register-by-email"],{"0017":function(e,t,n){"use strict";var i=n("be00"),a=n.n(i);a.a},"0289":function(e,t,n){"use strict";n.r(t);var i=n("ab65"),a=n("173e");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("a7e2");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"15e4b0ea",null,!1,i["a"],void 0);t["default"]=r.exports},"0e55":function(e,t,n){"use strict";n.r(t);var i=n("e3da"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"173e":function(e,t,n){"use strict";n.r(t);var i=n("40af"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"1cdf":function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},2528:function(e,t,n){var i=n("8328");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("05235ac5",i,!0,{sourceMap:!1,shadowMode:!1})},"2eb5":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("1dfb").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"captcha-box"},[n("v-uni-view",{staticClass:"captcha-img-box"},[e.loging?n("uni-icons",{staticClass:"loding",attrs:{size:"20px",color:"#BBB",type:"spinner-cycle"}}):e._e(),n("v-uni-image",{staticClass:"captcha-img",class:{opacity:e.loging},attrs:{src:e.captchaBase64,mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getImageCaptcha.apply(void 0,arguments)}}})],1),n("v-uni-input",{staticClass:"captcha",attrs:{focus:e.focusCaptchaInput,type:"text",inputBorder:!1,maxlength:"4",placeholder:"请输入验证码"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.focusCaptchaInput=!1}},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})],1)},o=[]},"40af":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var a=i(n("fc3b")),o=n("37dc"),u=i(n("7d8d")),r=(0,o.initVueI18n)(u.default),c=r.t,s={name:"uniPopupDialog",mixins:[a.default],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||c("uni-popup.ok")},closeText:function(){return this.cancelText||c("uni-popup.cancel")},placeholderText:function(){return this.placeholder||c("uni-popup.placeholder")},titleText:function(){return this.title||c("uni-popup.title")}},watch:{type:function(e){this.dialogType=e},mode:function(e){"input"===e&&(this.dialogType="info")},value:function(e){this.val=e}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};t.default=s},"4c1b":function(e){e.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},5093:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("caad"),n("2532");var a=i(n("e246")),o=function(){},u={name:"uni-agreements",computed:{agreements:function(){if(!a.default.agreements)return[];var e=a.default.agreements,t=e.serviceUrl,n=e.privacyUrl;return[{url:t,title:"用户服务协议"},{url:n,title:"隐私政策条款"}]}},props:{scope:{type:String,default:function(){return"register"}}},methods:{popupConfirm:function(){this.isAgree=!0,o()},popup:function(e){var t=this;this.needPopupAgreements=!0,this.$nextTick((function(){e&&(o=e),t.$refs.popupAgreement.open()}))},navigateTo:function(e){var t=e.url,n=e.title;uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+t+"&title="+n,success:function(e){},fail:function(){},complete:function(){}})},hasAnd:function(e,t){return e.length-1>t},setAgree:function(e){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created:function(){var e;this.needAgreements=((null===a.default||void 0===a.default||null===(e=a.default.agreements)||void 0===e?void 0:e.scope)||[]).includes(this.scope)},data:function(){return{isAgree:!1,needAgreements:!0,needPopupAgreements:!1}}};t.default=u},"53a7":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5530"));n("caad"),n("2532"),n("d3b7"),n("159b");var o=n("d696"),u=i(n("e246")),r={data:function(){return{config:u.default,uniIdRedirectUrl:"",isMounted:!1}},onUnload:function(){document.onkeydown=!1},mounted:function(){this.isMounted=!0},onLoad:function(e){var t=this;if(e.is_weixin_redirect){if(uni.showLoading({mask:!0}),window.location.href.includes("#")){var n=window.location.href.split("?")[1].split("&");n.forEach((function(t){var n=t.split("=");"code"==n[0]&&(e.code=n[1])}))}this.$nextTick((function(n){t.$refs.uniFabLogin.login({code:e.code},"weixin")}))}e.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(e.uniIdRedirectUrl))},computed:{needAgreements:function(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get:function(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set:function(e){this.$refs.agreements&&(this.$refs.agreements.isAgree=e)}}},methods:{loginSuccess:function(e){o.mutations.loginSuccess((0,a.default)((0,a.default)({},e),{},{uniIdRedirectUrl:this.uniIdRedirectUrl}))}}},c=r;t.default=c},"577f":function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},"665a":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.captcha-box[data-v-67fed0b2]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;flex:1}.captcha-img-box[data-v-67fed0b2],\n.captcha[data-v-67fed0b2]{height:44px;line-height:44px}.captcha-img-box[data-v-67fed0b2]{position:relative;background-color:#fefae7}.captcha[data-v-67fed0b2]{background-color:#f8f8f8;font-size:14px;flex:1;padding:0 %?20?%;margin-left:%?20?%;box-sizing:border-box}.captcha-img-box[data-v-67fed0b2],\n.captcha-img[data-v-67fed0b2],\n.loding[data-v-67fed0b2]{height:44px!important;width:100px}.captcha-img[data-v-67fed0b2]{cursor:pointer}.loding[data-v-67fed0b2]{z-index:9;color:#bbb;position:absolute;text-align:center;line-height:45px;animation:rotate-data-v-67fed0b2 1s linear infinite}.opacity[data-v-67fed0b2]{opacity:.5}@keyframes rotate-data-v-67fed0b2{from{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),e.exports=t},"6efd":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniPopup:n("987a").default,uniPopupDialog:n("0289").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.agreements.length?n("v-uni-view",{staticClass:"root"},[e.needAgreements?[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.setAgree.apply(void 0,arguments)}}},[n("v-uni-label",{staticClass:"checkbox-box"},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.5)","margin-right":"-6px"},attrs:{checked:e.isAgree}}),n("v-uni-text",{staticClass:"text"},[e._v("同意")])],1)],1),n("v-uni-view",{staticClass:"content"},e._l(e.agreements,(function(t,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-text",{staticClass:"agreement text",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo(t)}}},[e._v(e._s(t.title))]),e.hasAnd(e.agreements,i)?n("v-uni-text",{staticClass:"text and",attrs:{space:"nbsp"}},[e._v("和")]):e._e()],1)})),1)]:e._e(),e.needAgreements||e.needPopupAgreements?n("uni-popup",{ref:"popupAgreement",attrs:{type:"center"}},[n("uni-popup-dialog",{attrs:{confirmText:"同意"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.popupConfirm.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[e._v("请先阅读并同意")]),e._l(e.agreements,(function(t,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-text",{staticClass:"agreement text",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo(t)}}},[e._v(e._s(t.title))]),e.hasAnd(e.agreements,i)?n("v-uni-text",{staticClass:"text and",attrs:{space:"nbsp"}},[e._v("和")]):e._e()],1)}))],2)],1)],1):e._e()],2):e._e()},o=[]},"7d8d":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("4c1b")),o=i(n("1cdf")),u=i(n("577f")),r={en:a.default,"zh-Hans":o.default,"zh-Hant":u.default};t.default=r},8328:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup-dialog[data-v-15e4b0ea]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-15e4b0ea]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-15e4b0ea]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-15e4b0ea]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-15e4b0ea]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-15e4b0ea]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-15e4b0ea]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-15e4b0ea]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-15e4b0ea]{font-size:16px;color:#333}.uni-button-color[data-v-15e4b0ea]{color:#2979ff}.uni-dialog-input[data-v-15e4b0ea]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-15e4b0ea]{color:#18bc37}.uni-popup__warn[data-v-15e4b0ea]{color:#f3a73f}.uni-popup__error[data-v-15e4b0ea]{color:#e43d33}.uni-popup__info[data-v-15e4b0ea]{color:#909399}',""]),e.exports=t},a7e2:function(e,t,n){"use strict";var i=n("2528"),a=n.n(i);a.a},ab65:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-popup-dialog"},[n("v-uni-view",{staticClass:"uni-dialog-title"},[n("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+e.dialogType]},[e._v(e._s(e.titleText))])],1),"base"===e.mode?n("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[n("v-uni-text",{staticClass:"uni-dialog-content-text"},[e._v(e._s(e.content))])])],2):n("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[n("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:e.placeholderText,focus:e.focus},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})])],2),n("v-uni-view",{staticClass:"uni-dialog-button-group"},[n("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeDialog.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text"},[e._v(e._s(e.closeText))])],1),n("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onOk.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[e._v(e._s(e.okText))])],1)],1)],1)},a=[]},ad69:function(e,t,n){"use strict";n.r(t);var i=n("2eb5"),a=n("0e55");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("0017");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"67fed0b2",null,!1,i["a"],void 0);t["default"]=r.exports},be00:function(e,t,n){var i=n("665a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("1f683f3b",i,!0,{sourceMap:!1,shadowMode:!1})},c9a4:function(e,t,n){var i=n("d6f8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("7585bd96",i,!0,{sourceMap:!1,shadowMode:!1})},d6f8:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-9172a0d2]{display:flex;box-sizing:border-box;flex-direction:column}.root[data-v-9172a0d2]{flex-direction:row;align-items:center;font-size:12px;color:#8a8f8b}.checkbox-box[data-v-9172a0d2], .uni-label-pointer[data-v-9172a0d2]{align-items:center;display:flex;flex-direction:row}.item[data-v-9172a0d2]{flex-direction:row}.text[data-v-9172a0d2]{line-height:26px}.agreement[data-v-9172a0d2]{color:#04498c;cursor:pointer}.checkbox-box[data-v-9172a0d2]  .uni-checkbox-input{border-radius:100%}.checkbox-box[data-v-9172a0d2]  .uni-checkbox-input.uni-checkbox-input-checked{border-color:#2979ff;color:#fff!important;background-color:#2979ff}.content[data-v-9172a0d2]{flex-wrap:wrap;flex-direction:row}.root[data-v-9172a0d2]  .uni-popup__error{color:#333}',""]),e.exports=t},e324:function(e,t,n){"use strict";n.r(t);var i=n("5093"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},e3da:function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7");var i={props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},focus:{type:Boolean,default:function(){return!1}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(e){this.$emit("input",e)}}},data:function(){return{focusCaptchaInput:!1,captchaBase64:"",loging:!1}},watch:{scene:{handler:function(e){e?this.getImageCaptcha(this.focus):uni.showToast({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha:function(){var t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loging=!0,n&&(this.val="",this.focusCaptchaInput=!0);var i=e.importObject("uni-captcha-co",{customUI:!0});i.getImageCaptcha({scene:this.scene}).then((function(e){t.captchaBase64=e.captchaBase64})).catch((function(e){uni.showToast({title:e.message,icon:"none"})})).finally((function(e){t.loging=!1}))}}};t.default=i}).call(this,n("a9ff")["default"])},f6ae:function(e,t,n){"use strict";n.r(t);var i=n("6efd"),a=n("e324");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("fac1");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"9172a0d2",null,!1,i["a"],void 0);t["default"]=r.exports},fac1:function(e,t,n){"use strict";var i=n("c9a4"),a=n.n(i);a.a},fc3b:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=i}}]);