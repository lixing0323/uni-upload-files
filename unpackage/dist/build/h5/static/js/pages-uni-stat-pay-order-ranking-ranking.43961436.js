(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-pay-order-ranking-ranking"],{3702:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniStatBreadcrumb:a("061b").default,downloadExcel:a("d036").default,uniDataSelect:a("e784").default,uniStatTabs:a("73c9").default,uniDatetimePicker:a("9039").default,unicloudDb:a("960d").default,uniTable:a("7932").default,uniTr:a("c4bb").default,uniTh:a("0049").default,uniTd:a("677c").default,uniPagination:a("50ce").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("uni-stat-breadcrumb")],1),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),a("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x",staticStyle:{"margin-bottom":"0"}},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.platformChange.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}}),e.query.platform_id&&-1===e.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:e.channelQuery,field:"channel_code as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:e.query.channel_code,callback:function(t){e.$set(e.query,"channel_code",t)},expression:"query.channel_code"}}):e._e()],1),a("v-uni-view",{staticClass:"flex"},[a("uni-stat-tabs",{attrs:{type:"box",current:e.dateTabs.index,tabs:e.dateTabs.list},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.dateTabsChange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",attrs:{type:"daterange",end:Date.now(),"return-type":"timestamp","clear-icon":!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.dateTabs.index=null}},model:{value:e.query.pay_date,callback:function(t){e.$set(e.query,"pay_date",t)},expression:"query.pay_date"}})],1),a("unicloud-db",{ref:"udb",attrs:{collection:e.collectionList,field:"user_id,nickname,uni_platform,status,total_fee,appid,pay_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,groupby:"user_id","group-field":"sum(total_fee) as total_fee,sum(1) as count,last(nickname) as nickname",options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data,i=t.pagination,r=t.loading,o=t.error;t.options;return[a("uni-table",{ref:"table",staticStyle:{"min-height":"900px"},attrs:{loading:r,emptyText:o.message||r?"请求中...":"没有更多数据",border:!0,stripe:!0,type:""},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[a("uni-tr",[a("uni-th",{attrs:{align:"center"}},[e._v("排名")]),a("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"user_id")}}},[e._v("用户")]),a("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"total_fee")}}},[e._v("支付金额")]),a("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"count")}}},[e._v("订单数量")])],1),e._l(n,(function(t,n){return a("uni-tr",{key:n},[a("uni-td",{attrs:{align:"center"}},[e._v(e._s(parseInt(n+1+(i.current-1)*i.size)))]),a("uni-td",{attrs:{align:"center"}},[a("v-uni-text",{staticClass:"text-btn",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.pageToUser(t)}}},[e._v(e._s(e.nameFormat(t)))])],1),a("uni-td",{attrs:{align:"center"}},[e._v(e._s((t.total_fee/100).toFixed(2)))]),a("uni-td",{attrs:{align:"center"}},[a("v-uni-text",{staticClass:"text-btn",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.pageToOrder(t)}}},[e._v(e._s(t.count))])],1)],1)}))],2),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},"4bd2":function(e,t,a){"use strict";var n=a("edfe8"),i=a.n(n);i.a},5854:function(e,t,a){"use strict";var n=a("68ae"),i=a.n(n);i.a},"68ae":function(e,t,a){var n=a("f522");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("5141a15c",n,!0,{sourceMap:!1,shadowMode:!1})},"73ae":function(e,t,a){"use strict";a.r(t);var n=a("98cf"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},8835:function(e,t,a){"use strict";a.r(t);var n=a("3702"),i=a("ad02");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("4bd2");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"1682a630",null,!1,n["a"],void 0);t["default"]=s.exports},"8f49":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniIcons:a("1dfb").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-stat__select"},[e.label?a("span",{staticClass:"uni-label-text hide-on-phone"},[e._v(e._s(e.label+"："))]):e._e(),a("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":e.current}},[a("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":e.disabled}},[a("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}},[e.current?a("v-uni-view",{staticClass:"uni-select__input-text"},[e._v(e._s(e.current))]):a("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[e._v(e._s(e.typePlaceholder))]),e.current&&e.clear?a("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearVal.apply(void 0,arguments)}}}):a("uni-icons",{attrs:{type:e.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),e.showSelector?a("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}}):e._e(),e.showSelector?a("v-uni-view",{staticClass:"uni-select__selector"},[a("v-uni-view",{staticClass:"uni-popper__arrow"}),a("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===e.mixinDatacomResData.length?a("v-uni-view",{staticClass:"uni-select__selector-empty"},[a("v-uni-text",[e._v(e._s(e.emptyTips))])],1):e._l(e.mixinDatacomResData,(function(t,n){return a("v-uni-view",{key:n,staticClass:"uni-select__selector-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.change(t)}}},[a("v-uni-text",{class:{"uni-select__selector__disabled":t.disable}},[e._v(e._s(e.formatItemName(t)))])],1)}))],2)],1):e._e()],1)],1)],1)},r=[]},"98cf":function(e,t,a){"use strict";(function(e){a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("7db0"),a("d3b7"),a("159b"),a("ac1f"),a("5319"),a("4d636"),a("c607"),a("2c3e"),a("25f0"),a("c975"),a("99af");var n={name:"uni-stat-select",mixins:[e.mixinDatacom||{}],data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[]}},props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},created:function(){this.last="".concat(this.collection,"_last_selected_option_value"),this.collection&&!this.localdata.length&&this.query()},computed:{typePlaceholder:function(){var e=this.placeholder,t={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return t?e+t:e}},watch:{localdata:{immediate:!0,handler:function(e,t){Array.isArray(e)&&t!==e&&(this.mixinDatacomResData=e)}},value:function(){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(e){e.length&&this.initDefVal()}}},methods:{query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.query()},initDefVal:function(){var e="";if(!this.value&&0!==this.value||this.isDisabled(this.value))if(!this.modelValue&&0!==this.modelValue||this.isDisabled(this.modelValue)){var t;if(this.collection&&(t=uni.getStorageSync(this.last)),t||0===t)e=t;else{var a="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(a=this.mixinDatacomResData[this.defItem-1].value),e=a}(e||0===e)&&this.emit(e)}else e=this.modelValue;else e=this.value;var n=this.mixinDatacomResData.find((function(t){return t.value===e}));this.current=n?this.formatItemName(n):""},isDisabled:function(e){var t=!1;return this.mixinDatacomResData.forEach((function(a){a.value===e&&(t=a.disable)})),t},clearVal:function(){this.emit(""),this.collection&&uni.removeStorageSync(this.last)},change:function(e){e.disable||(this.showSelector=!1,this.current=this.formatItemName(e),this.emit(e.value))},emit:function(e){this.$emit("change",e),this.$emit("input",e),this.$emit("update:modelValue",e),this.collection&&uni.setStorageSync(this.last,e)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(e){var t=e.text,a=e.value,n=e.channel_code;if(n=n?"(".concat(n,")"):"",this.format){var i="";for(var r in i=this.format,e)i=i.replace(new RegExp("{".concat(r,"}"),"g"),e[r]);return i}return this.collection.indexOf("app-list")>0?"".concat(t,"(").concat(a,")"):t||"未命名".concat(n)}}};t.default=n}).call(this,a("a9ff")["default"])},a3f9:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("53ca"));a("a9e3"),a("d401"),a("d3b7"),a("25f0"),a("ac1f"),a("00b4"),a("5319"),a("4d636"),a("c607"),a("2c3e"),a("99af"),a("c975");var r={getDateObject:function(e){return e?("string"!==typeof e||isNaN(e)||(e=Number(e)),"number"===typeof e?(10==e.toString().length&&(e*=1e3),t=new Date(e)):"object"===(0,i.default)(e)&&(t=new Date(e.getTime())),t):"";var t},timeFormat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";try{if(!e)return"";var a=r.getDateObject(e),n={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[i]:("00"+n[i]).substr((""+n[i]).length)));return t}catch(o){return time}},getDateInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=r.getDateObject(e),a=t.getFullYear()+"",n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,i=t.getDate()<10?"0"+t.getDate():t.getDate(),o=t.getHours()<10?"0"+t.getHours():t.getHours(),s=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),l=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),d=t.getMilliseconds(),c=t.getDay(),u=Math.floor((t.getMonth()+3)/3);return{year:Number(a),month:Number(n),day:Number(i),hour:Number(o),minute:Number(s),second:Number(l),millisecond:Number(d),week:Number(c),quarter:Number(u)}},getOffsetStartAndEnd:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"day",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,o=r.getDateObject(i);if("hour"===a){var s=36e5,l=r.getDateInfo(new Date(o.getTime()+1*s*n));e=new Date("".concat(l.year,"/").concat(l.month,"/").concat(l.day," ").concat(l.hour,":00:00")).getTime(),t=new Date("".concat(l.year,"/").concat(l.month,"/").concat(l.day," ").concat(l.hour,":00:00")).getTime()+(s-1)}else if("day"===a){var d=864e5,c=r.getDateInfo(new Date(o.getTime()+1*d*n));e=new Date("".concat(c.year,"/").concat(c.month,"/").concat(c.day)).getTime(),t=new Date("".concat(c.year,"/").concat(c.month,"/").concat(c.day)).getTime()+(d-1)}else if("week"===a){o.setDate(o.getDate()-o.getDay()+1+7*n);var u=r.getDateInfo(o);o.setDate(o.getDate()+7);var f=r.getDateInfo(o);e=new Date("".concat(u.year,"/").concat(u.month,"/").concat(u.day)).getTime(),t=new Date("".concat(f.year,"/").concat(f.month,"/").concat(f.day)).getTime()-1}else if("month"===a){var p=r.getDateInfo(o),h=p.month+n,v=p.year;h>12?(v+=Math.floor(h/12),h=Math.abs(h)%12):h<=0&&(v=v-1-Math.floor(Math.abs(h)/12),h=12-Math.abs(h)%12);var m=new Date(v,h,0).getDate();e=new Date("".concat(v,"/").concat(h,"/1")).getTime(),t=new Date("".concat(v,"/").concat(h,"/").concat(m)).getTime()+86399999}else if("quarter"===a){o.setMonth(o.getMonth()+3*n);var g=r.getDateInfo(o),b=g.month;[1,2,3].indexOf(b)>-1?b=1:[4,5,6].indexOf(b)>-1?b=4:[7,8,9].indexOf(b)>-1?b=7:[10,11,12].indexOf(b)>-1&&(b=10),o.setMonth(b-1);var _=r.getDateInfo(o);o.setMonth(o.getMonth()+3);var x=r.getDateInfo(o);e=new Date("".concat(_.year,"/").concat(_.month,"/1")).getTime(),t=new Date("".concat(x.year,"/").concat(x.month,"/1")).getTime()-1}else if("year"===a){var y=r.getDateInfo(o),w=y.year+n;e=new Date("".concat(w,"/1/1")).getTime(),t=new Date("".concat(w,"/12/31")).getTime()+86399999}return{startTime:e,endTime:t}}},o=r;t.default=o},ad02:function(e,t,a){"use strict";a.r(t);var n=a("ea6a"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},d53f:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var a={};for(var n in e){var o=e[n],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(a[n]=new RegExp(l));break;case"select":if(l.length){var d,c=[],u=(0,r.default)(l);try{for(u.s();!(d=u.n()).done;){var f=d.value;c.push(t.eq(f))}}catch(D){u.e(D)}finally{u.f()}a[n]=t.or(c)}break;case"range":if(l.length){var p=l[0],h=l[1];a[n]=t.and([t.gte(p),t.lte(h)])}break;case"date":if(l.length){var v=(0,i.default)(l,2),m=v[0],g=v[1],b=new Date(m),_=new Date(g);a[n]=t.and([t.gte(b),t.lte(_)])}break;case"timestamp":if(l.length){var x=(0,i.default)(l,2),y=x[0],w=x[1];a[n]=t.and([t.gte(y),t.lte(w)])}break}}return a},t.validator=void 0;var i=n(a("3835")),r=n(a("b85c"));a("4d636"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("14d9");t.validator={user_id:{rules:[{format:"string"}],label:"用户ID"},provider:{rules:[{format:"string"},{range:[{text:"微信支付",value:"wxpay"},{text:"支付宝",value:"alipay"},{text:"苹果应用内支付",value:"appleiap"}]}],label:"支付供应商"},provider_pay_type:{rules:[{format:"string"}],label:"支付方式"},uni_platform:{rules:[{format:"string"}],label:"应用平台"},status:{rules:[{format:"int"},{range:[{text:"已关闭",value:-1},{text:"未支付",value:0},{text:"已支付",value:1},{text:"已部分退款",value:2},{text:"已全额退款",value:3}]}],defaultValue:0,label:"订单状态"},type:{rules:[{format:"string"}],label:"订单类型"},order_no:{rules:[{format:"string"},{minLength:20,maxLength:28}],label:"业务系统订单号"},out_trade_no:{rules:[{format:"string"}],label:"支付插件订单号"},transaction_id:{rules:[{format:"string"}],label:"交易单号"},device_id:{rules:[{format:"string"}],label:"设备ID"},client_ip:{rules:[{format:"string"}],label:"客户端IP"},openid:{rules:[{format:"string"}],label:"openid"},description:{rules:[{format:"string"}],label:"支付描述"},"err_msg ":{rules:[{format:"string"}],label:"支付失败原因"},total_fee:{rules:[{format:"int"}],label:"订单总金额"},refund_fee:{rules:[{format:"int"}],label:"订单总退款金额"},refund_count:{rules:[{format:"int"}],label:"当前退款笔数"},refund_list:{rules:[{format:"array"}],label:"退款详情"},provider_appid:{rules:[{format:"string"}],label:"开放平台appid"},appid:{rules:[{format:"string"}],label:"DCloud AppId"},user_order_success:{rules:[{format:"bool"}],label:"回调状态"},pay_date:{rules:[{format:"timestamp"}],label:"支付时间"},notify_date:{rules:[{format:"timestamp"}],label:"异步通知时间"},cancel_date:{rules:[{format:"timestamp"}],label:"取消时间"}};t.enumConverter={provider_valuetotext:{wxpay:"微信支付",alipay:"支付宝",appleiap:"苹果应用内支付"},status_valuetotext:{0:"未支付",1:"已支付",2:"已部分退款",3:"已全额退款","-1":"已关闭"}}},e1f0:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.text-btn[data-v-1682a630]{color:#2979ff;cursor:pointer;margin:0 5px}',""]),e.exports=t},e784:function(e,t,a){"use strict";a.r(t);var n=a("8f49"),i=a("73ae");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("5854");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"2ddf65dd",null,!1,n["a"],void 0);t["default"]=s.exports},ea6a:function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ac1f"),a("841c"),a("99af"),a("498a"),a("d81d"),a("4de4"),a("d3b7"),a("b64b");var i=n(a("5530")),r=a("d53f"),o=a("70ee"),s=n(a("a3f9")),l=e.database(),d={ascending:"asc",descending:"desc"},c={data:function(){return{collectionList:"uni-pay-orders",query:{appid:"",platform_id:"",uni_platform:"",version:"",pay_date:[],channel_code:""},where:"",orderby:"total_fee desc",orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:20,pageCurrent:1,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"价值用户排行.xls",type:"xls",fields:{"用户ID":"user_id","用户昵称":"nickname","支付金额":"total_fee","订单数量":"count"}},exportExcelData:[],dateTabs:{time:[],timeStr:"",index:null,list:[{_id:0,name:"今天"},{_id:1,name:"昨天"},{_id:7,name:"最近七天"},{_id:30,name:"最近30天"},{_id:90,name:"最近90天"}]}}},onLoad:function(){this._filter={}},onReady:function(){},methods:{payDatePicker:function(e){this.query.pay_date=e,this.search()},onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e="",t=this.query,a=t.pay_date,n=t.appid,i=t.version,r=t.uni_platform,o=t.channel_code;return a&&2==a.length&&(e+=" && pay_date>=".concat(a[0]," && pay_date<=").concat(a[1])),n&&(e+=" && appid=='".concat(n,"'")),i&&(e+=" && stat_data.app_version=='".concat(i,"'")),r&&(e+=" && stat_data.platform=='".concat(r,"'")),o&&(e+=" && stat_data.channel=='".concat(o,"'")),e=e.substring(3).trim(),e},search:function(){var e=this;if(this.query.appid){var t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))}},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var a=this;uni.navigateTo({url:e,events:{refreshData:function(){a.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},sortChange:function(e,t){var a=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+d[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){a.$refs.udb.loadData()}))},filterChange:function(e,t){var a=this;this._filter[t]={type:e.filterType,value:e.filter};var n=(0,r.filterToWhere)(this._filter,l.command);Object.keys(n).length?this.where=n:this.where="",this.$nextTick((function(){a.$refs.udb.loadData()}))},platformChange:function(e,t,a,n){this.query.version=0,this.query.uni_platform=n.code},nameFormat:function(e){return e.user_id?e.nickname?"".concat(e.user_id,"（").concat(e.nickname,"）"):e.user_id:"匿名用户"},pageToUser:function(e){var t=e.user_id;uni.navigateTo({url:"/pages/system/user/list?id=".concat(t)})},pageToOrder:function(e){var t=e.user_id;uni.navigateTo({url:"/pages/uni-stat/pay-order/list/list?user_id=".concat(t)})},dateTabsChange:function(e,t){this.dateTabs.index=t;var a=(0,o.getTimeOfSomeDayAgo)(e),n=s.default.getOffsetStartAndEnd("day",0).endTime;1==e&&(n=s.default.getOffsetStartAndEnd("day",0,a).endTime),this.query.pay_date=[a,n]}},watch:{query:{deep:!0,handler:function(e){this.search()}}},computed:{versionQuery:function(){var e=this.query,t=e.appid,a=e.uni_platform,n=(0,o.stringifyQuery)({appid:t,uni_platform:a});return n},channelQuery:function(){var e=this.query,t=e.appid,a=e.platform_id,n=(0,o.stringifyQuery)({appid:t,platform_id:a});return n}}};t.default=c}).call(this,a("a9ff")["default"])},edfe8:function(e,t,a){var n=a("e1f0");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("19c69120",n,!0,{sourceMap:!1,shadowMode:!1})},f522:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-2ddf65dd]{display:none}}.uni-stat__select[data-v-2ddf65dd]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-2ddf65dd]{width:100%;flex:1}.uni-stat__actived[data-v-2ddf65dd]{width:100%;flex:1}.uni-label-text[data-v-2ddf65dd]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-2ddf65dd]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-2ddf65dd]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-2ddf65dd]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-2ddf65dd]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-2ddf65dd]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-2ddf65dd]{font-size:14px;color:#909399}.uni-select__selector[data-v-2ddf65dd]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-2ddf65dd]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-2ddf65dd],\n.uni-select__selector-item[data-v-2ddf65dd]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-2ddf65dd]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-2ddf65dd]:last-child,\n.uni-select__selector-item[data-v-2ddf65dd]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-2ddf65dd]{opacity:.4;cursor:default}\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-2ddf65dd],\n.uni-popper__arrow[data-v-2ddf65dd]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-2ddf65dd]{filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-2ddf65dd]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-2ddf65dd]{width:100%;color:#3a3a3a;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-2ddf65dd]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-2ddf65dd]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),e.exports=t}}]);