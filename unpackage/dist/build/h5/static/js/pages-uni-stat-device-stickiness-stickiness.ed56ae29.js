(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-stickiness-stickiness"],{"103b":function(t,e,a){var i=a("77cd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("585ca98a",i,!0,{sourceMap:!1,shadowMode:!1})},"13c5":function(t,e,a){var i=a("205f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2f497b84",i,!0,{sourceMap:!1,shadowMode:!1})},"1a1f":function(t,e,a){"use strict";a.r(e);var i=a("ba67"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"205f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.flex[data-v-25a2251d]{display:flex;flex-wrap:wrap;align-items:center}.label-text[data-v-25a2251d]{font-size:14px;color:#666;margin:auto 0;margin-right:5px}.line-bottom[data-v-25a2251d]{border-bottom:2px solid #eee}.uni-stat-panel[data-v-25a2251d]{box-shadow:unset;border-bottom:1px solid #eee;padding:0;margin:0 15px}',""]),t.exports=e},3957:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniStatBreadcrumb:a("061b").default,uniDataSelect:a("e784").default,uniStatTabs:a("73c9").default,uniDatetimePicker:a("9039").default,qiunDataCharts:a("8ccf").default,uniStatTable:a("ff39").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[t._v("用户忠诚度用户对您应用的访问深度及访问频次情况。助您了解用户对应用的粘度，尤其在对内容改进后，效果是否有所提升")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAppid.apply(void 0,arguments)}},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:t.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),a("v-uni-view",{staticClass:"uni-stat--x mb-l",staticStyle:{"padding-top":"0"}},[a("v-uni-view",{staticClass:"mb-m line-bottom"},[a("uni-stat-tabs",{staticStyle:{"line-height":"40px","margin-bottom":"-17px"},attrs:{type:"boldLine",tabs:t.types},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),a("v-uni-view",{staticClass:"p-m"},[a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"pie",chartData:t.chartData,echartsH5:!0,echartsApp:!0,errorMessage:t.errorMessage}})],1)],1)],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-stat-table",{attrs:{data:t.tableData,filedsMap:t.fieldsMap,loading:t.loading}})],1)],1)],1)},r=[]},"4e90":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniTable:a("7932").default,uniTr:a("c4bb").default,uniTh:a("0049").default,uniTooltip:a("4afb").default,uniIcons:a("1dfb").default,uniTd:a("677c").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[t._l(t.filedsMap,(function(e,i){return[e.title?a("uni-th",{key:i+"_"+i+"_0",attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([t.tooltip&&e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.title)),t.tooltip&&e.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1):t._e()]}))],2),t._l(t.data,(function(e,i){return a("uni-tr",{key:i},[t._l(t.filedsMap,(function(i,n){return[i.title?a("uni-td",{key:n+"_"+n+"_0",attrs:{align:"center"}},[t._v(t._s(void 0!==e[i.field]?e[i.field]:"-"))]):t._e()]}))],2)}))],2)},r=[]},5878:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-stat-table",data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},filedsMap:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}};e.default=i},"77cd":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-stat-tooltip-s[data-v-67b9b6bd]{width:160px;white-space:normal}",""]),t.exports=e},"791d":function(t,e,a){"use strict";a.r(e);var i=a("3957"),n=a("1a1f");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c405");var s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"25a2251d",null,!1,i["a"],void 0);e["default"]=l.exports},9121:function(t,e,a){"use strict";var i=a("103b"),n=a.n(i);n.a},ba67:function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("b85c"));a("4de4"),a("d3b7"),a("159b"),a("d81d"),a("99af"),a("a9e3"),a("7db0"),a("14d9"),a("13d5"),a("ac1f"),a("1276");var r=a("70ee"),s=i(a("c40e")),l={data:function(){return{fieldsMap:s.default,query:{appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},loading:!1,currentDateTab:1,tableData:[],panelData:s.default.filter((function(t){return t.hasOwnProperty("value")})),chartData:{},type:"visit_depth_data",types:[{_id:"visit_depth_data",name:"访问页数"},{_id:"duration_data",name:"访问时长"}],field:"visit_devices",fields:[{_id:"visit_devices",name:"访问人数"},{_id:"visit_times",name:"访问次数"}],options:{visit_depth_data:{prefix:"p",title:"页",value:[1,2,3,4,5,10]},duration_data:{prefix:"s",title:"秒",value:[0,3,6,11,21,31,51,100]}},channelData:[],errorMessage:""}},computed:{fieldName:function(){var t=this;return this.fields.forEach((function(e){if(e._id===t.field)return e.name}))},channelQuery:function(){var t=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:t})},versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,i=(0,r.stringifyQuery)({appid:e,uni_platform:a});return i}},created:function(){var t=this;this.debounceGet=(0,r.debounce)((function(){t.getAllData(t.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}},type:function(){this.getAllData(this.query)},field:function(){this.getAllData(this.query)}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(t){this.getChannelData(t,!1)},changePlatform:function(t,e,a,i){this.getChannelData(null,t),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(t,e){this.currentDateTab=e;var a=(0,r.getTimeOfSomeDayAgo)(t),i=(0,r.getTimeOfSomeDayAgo)(0)-1;this.query.start_time=[a,i]},createStr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"visit_depth_data",a=t.length,i=this.options[e].prefix,n=this.options[e].value,r=n.map((function(n){return t.map((function(t){return"sum(".concat(e,".").concat(t,".").concat(i+"_"+n,") as ").concat(a>1?t+"_"+i+"_"+n:i+"_"+n)}))})),s=r.join();return s},parseChars:function(t){t=t.split("_");var e=this.options[this.type],a=e.title;e.value.forEach((function(i,n){var r=e.value[n+1];i===Number(t[t.length-1])&&(a=r?i+1===r?i+a:i+"-"+(r-1)+a:i+"+"+a)}));return a},getAllData:function(t){t.appid?(this.errorMessage="",this.getChartData(t,this.field,this.fieldName),this.getTabelData(t)):this.errorMessage="请先选择应用"},getChartData:function(e){var a=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.field;arguments.length>2&&void 0!==arguments[2]||this.fields.find((function(t){return t._id===a.field})).name;e=(0,r.stringifyQuery)(e,null,["uni_platform"]);var n=this.createStr([i],this.type),s=t.database();s.collection("uni-stat-loyalty-result").where(e).groupBy("appid").groupField(n).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,i=(e.count,e.data);i=i[0];var n={series:[{data:[]}]};for(var r in i)if("appid"!==r){var s=a.parseChars(r),l=i[r];n.series[0].data.push({name:s,value:l})}a.chartData=n})).catch((function(t){})).finally((function(){a.loading=!1}))},getTabelData:function(e){var a=this;e=(0,r.stringifyQuery)(e,null,["uni_platform"]);var i=this.createStr(["visit_devices","visit_times"],this.type);this.fieldsMap[0].title=this.types.find((function(t){return t._id===a.type})).name,this.loading=!0;var l=t.database();l.collection("uni-stat-loyalty-result").where(e).groupBy("appid").groupField(i).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,i=(e.count,e.data),l=a.type,u=[],o=a.options[l].prefix;o="_".concat(o,"_");var c,d=(0,n.default)(i);try{for(d.s();!(c=d.n()).done;){var f=c.value;for(var p in f)if("appid"!==p){var v={},h=p.split(o);v.name=h[1],v[h[0]]=f[p],u.push(v)}}}catch(q){d.e(q)}finally{d.f()}var m=[],_={},y=function(t,e){return t+e},b=u.filter((function(t){return t.visit_devices})).map((function(t){return t.visit_devices}));b=b.length?b.reduce(y):0;var g=u.filter((function(t){return t.visit_times})).map((function(t){return t.visit_times}));g=g.length?g.reduce(y):0,_.visit_times=g,_.visit_devices=b,a.options[l].value.forEach((function(t){var e={};e.name=t+"p",u.forEach((function(a){if(Number(a.name)===t)for(var i in a)i!==name&&(e[i]=a[i],e["total_"+i]=_[i])})),e.name=a.parseChars(String(t)),m.push(e)}));for(var x=0,w=m;x<w.length;x++){var D=w[x];(0,r.mapfields)(s.default,D,D)}a.tableData=[],a.tableData=m})).catch((function(t){})).finally((function(){a.loading=!1}))},getChannelData:function(e,a){var i=this;this.query.channel_id="";var n=t.database(),r={};e=e||this.query.appid,e&&(r.appid=e),a=a||this.query.platform_id,a&&(r.platform_id=a);var s=n.collection("uni-stat-app-platforms").field("_id, name").getTemp(),l=n.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();n.collection(l,s).orderBy("platform_id","asc").get().then((function(t){var e,a=t.result.data,n=[];if(a.length>0)for(var r in a)e=a[r].channel_name?a[r].channel_name:"默认",a[r].platform_id.length>0&&(e=a[r].platform_id[0].name+"-"+e),n.push({value:a[r]._id,text:e});i.channelData=n})).catch((function(t){})).finally((function(){}))}}};e.default=l}).call(this,a("a9ff")["default"])},c405:function(t,e,a){"use strict";var i=a("13c5"),n=a.n(i);n.a},c40e:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=[{title:"名称",field:"name",tooltip:"",formatter:""},{title:"访问人数",field:"visit_devices",tooltip:"访问人数（活跃用户数）：访问过应用内任意页面的总用户数（去重）",value:0},{title:"访问人数占比",field:"visit_devices/total_visit_devices",computed:"visit_devices/total_visit_devices",formatter:"%"},{title:"访问次数",field:"visit_times",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"访问次数占比",field:"visit_times/total_visit_times",computed:"visit_times/total_visit_times",formatter:"%",tooltip:""}]},e7e0:function(t,e,a){"use strict";a.r(e);var i=a("5878"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},ff39:function(t,e,a){"use strict";a.r(e);var i=a("4e90"),n=a("e7e0");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("9121");var s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"67b9b6bd",null,!1,i["a"],void 0);e["default"]=l.exports}}]);