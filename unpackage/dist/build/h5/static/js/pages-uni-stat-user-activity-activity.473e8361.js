(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-user-activity-activity"],{"103b":function(t,e,a){var n=a("77cd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("585ca98a",n,!0,{sourceMap:!1,shadowMode:!1})},"235d":function(t,e,a){var n=a("efbb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("65cc4414",n,!0,{sourceMap:!1,shadowMode:!1})},"37a0":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},4004:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("b779")),r=n(a("5523")),o=n(a("ffb0")),u=n(a("37a0")),c=n(a("50bc")),s={en:i.default,es:r.default,fr:o.default,"zh-Hans":u.default,"zh-Hant":c.default};e.default=s},"4e90":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniTable:a("7932").default,uniTr:a("c4bb").default,uniTh:a("0049").default,uniTooltip:a("4afb").default,uniIcons:a("1dfb").default,uniTd:a("677c").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[t._l(t.filedsMap,(function(e,n){return[e.title?a("uni-th",{key:n+"_"+n+"_0",attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([t.tooltip&&e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.title)),t.tooltip&&e.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1):t._e()]}))],2),t._l(t.data,(function(e,n){return a("uni-tr",{key:n},[t._l(t.filedsMap,(function(n,i){return[n.title?a("uni-td",{key:i+"_"+i+"_0",attrs:{align:"center"}},[t._v(t._s(void 0!==e[n.field]?e[n.field]:"-"))]):t._e()]}))],2)}))],2)},r=[]},"50bc":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},"50ce":function(t,e,a){"use strict";a.r(e);var n=a("bcdf"),i=a("9bb0");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("ac8a");var o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"28de2840",null,!1,n["a"],void 0);e["default"]=u.exports},5523:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},5878:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-stat-table",data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},filedsMap:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}};e.default=n},"5abb":function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("b85c"));a("d3b7"),a("14d9"),a("a9e3"),a("99af");var r=a("70ee"),o=n(a("834c")),u={data:function(){return{tableName:"uni-stat-result",fieldsMap:o.default,query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:0,currentChartTab:"day",tableData:[],chartData:{},defaultChart:{field:"new_user_count",name:"新增用户"},channelData:[],errorMessage:""}},computed:{chartTabs:function(){var t=[{_id:"day",name:"日活"},{_id:"week",name:"周活"},{_id:"month",name:"月活"}];return(0,r.maxDeltaDay)(this.query.start_time,7)&&t.forEach((function(t,e){"month"===t._id?t.disabled=!0:t.disabled=!1})),t},channelQuery:function(){var t=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:t})},versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,n=(0,r.stringifyQuery)({appid:e,uni_platform:a});return n}},created:function(){var t=this;this.debounceGet=(0,r.debounce)((function(){t.getAllData(t.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler:function(t){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(t){this.getChannelData(t,!1)},changePlatform:function(t,e,a,n){this.getChannelData(null,t),this.query.version_id=0,this.query.uni_platform=n.code},changeTimeRange:function(t,e){this.currentDateTab=e;var a,n;a=(0,r.getTimeOfSomeDayAgo)(t),n=t?(0,r.getTimeOfSomeDayAgo)(0)-1:(0,r.getTimeOfSomeDayAgo)(0)+864e5-1,this.query.start_time=[a,n]},changePageCurrent:function(t){this.options.pageCurrent=t.current,this.getTabelData(this.query)},changePageSize:function(t){this.options.pageSize=t,this.options.pageCurrent=1,this.getTabelData(this.query)},changeChartTab:function(t,e,a){this.currentChartTab=t,this.getChartData(this.query,t,a)},getAllData:function(t){t.appid?(this.errorMessage="",this.getChartData(t,this.currentChartTab),this.getTabelData(t)):this.errorMessage="请先选择应用"},getChartData:function(e,a){var n=this,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"日活",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"active_user_count",s={categories:[],series:[{name:u,data:[]}]};e=(0,r.stringifyQuery)(e,null,["uni_platform"]);var l=t.database();"day"===a?l.collection(this.tableName).where(e).field("".concat((0,r.stringifyField)(o.default,c),", start_time")).groupBy("start_time").groupField((0,r.stringifyGroupField)(o.default,c)).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,a=(e.count,e.data);n.chartData=[];var o,u=(0,i.default)(a);try{for(u.s();!(o=u.n()).done;){var l=o.value,d=(0,r.formatDate)(l.start_time,"day"),p=l[c];s.series[0].data.push(p),s.categories.push(d)}}catch(f){u.e(f)}finally{u.f()}n.chartData=s})).catch((function(t){})):this.getRangeCountData(e,a).then((function(t){var e=a;"week"===a&&(a="isoWeek");var o=t.result,u=(o.count,o.data);n.chartData=[];var l,d=(0,i.default)(u);try{for(d.s();!(l=d.n()).done;){var p=l.value,f=+new Date(p.year,0)+(6048e5*Number(p[a])-1),h=(0,r.formatDate)(f,e),g=p[a+"_"+c];g&&(s.series[0].data.push(g),s.categories.push(h))}}catch(v){d.e(v)}finally{d.f()}n.chartData=s}))},getTabelData:function(e){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active_user_count",u=this.options.pageCurrent;e=(0,r.stringifyQuery)(e,null,["uni_platform"]),this.loading=!0;var c=t.database();c.collection(this.tableName).where(e).field("".concat((0,r.stringifyField)(o.default,n),", start_time")).groupBy("start_time").groupField((0,r.stringifyGroupField)(o.default,n)).orderBy("start_time","desc").skip((u-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(t){var n=t.result,u=n.count,c=n.data,s=c,l=u,d=[],p=[];a.getRangeCountData(e,"week").then((function(t){var n=t.result,u=(n.count,n.data);d=u,a.getRangeCountData(e,"month").then((function(t){var e=t.result,n=(e.count,e.data);p=n;var u,c=a.mapWithWeekAndMonth(s,d,p),f=(0,i.default)(c);try{for(f.s();!(u=f.n()).done;){var h=u.value;(0,r.mapfields)(o.default,h,h)}}catch(g){f.e(g)}finally{f.f()}a.tableData=[],a.options.total=l,a.tableData=c})).finally((function(){a.loading=!1}))}))})).catch((function(t){}))},getRangeCountData:function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"active_user_count";"week"===a&&(a="isoWeek");this.options.pageCurrent;var i=t.database();return i.collection(this.tableName).where(e).field("".concat(n,", start_time, ").concat(a,'(add(new Date(0),start_time), "Asia/Shanghai") as ').concat(a,',year(add(new Date(0),start_time), "Asia/Shanghai") as year')).groupBy("year, ".concat(a)).groupField("sum(".concat(n,") as ").concat(a,"_").concat(n)).orderBy("year asc, ".concat(a," asc")).get({getCount:!0})},mapWithWeekAndMonth:function(t,e,a){var n,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"active_user_count",o=(0,i.default)(t);try{for(o.s();!(n=o.n()).done;){var u,c=n.value,s=new Date(c.start_time),l=s.getUTCFullYear(),d=s.getMonth()+1,p=this.getWeekNumber(s),f=(0,i.default)(e);try{for(f.s();!(u=f.n()).done;){var h=u.value;h.isoWeek===p&&h.year===l&&(c["isoWeek_".concat(r)]=h["week_".concat(r)])}}catch(m){f.e(m)}finally{f.f()}var g,v=(0,i.default)(a);try{for(v.s();!(g=v.n()).done;){var _=g.value;_.month===d&&_.year===l&&(c["month_".concat(r)]=_["month_".concat(r)])}}catch(m){v.e(m)}finally{v.f()}}}catch(m){o.e(m)}finally{o.f()}return t},getWeekNumber:function(t){t=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));var e=new Date(Date.UTC(t.getUTCFullYear(),0,1)),a=Math.ceil(((t-e)/864e5+1)/7);return a},getChannelData:function(e,a){var n=this;this.query.channel_id="";var i=t.database(),r={};e=e||this.query.appid,e&&(r.appid=e),a=a||this.query.platform_id,a&&(r.platform_id=a);var o=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),u=i.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(u,o).orderBy("platform_id","asc").get().then((function(t){var e,a=t.result.data,i=[];if(a.length>0)for(var r in a)e=a[r].channel_name?a[r].channel_name:"默认",a[r].platform_id.length>0&&(e=a[r].platform_id[0].name+"-"+e),i.push({value:a[r]._id,text:e});n.channelData=i})).catch((function(t){})).finally((function(){}))}}};e.default=u}).call(this,a("a9ff")["default"])},7311:function(t,e,a){"use strict";a.r(e);var n=a("5abb"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"77cd":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".uni-stat-tooltip-s[data-v-67b9b6bd]{width:160px;white-space:normal}",""]),t.exports=e},"834c":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=[{title:"日期",field:"start_time",tooltip:"",formatter:"-"},{title:"日活",field:"active_user_count",tooltip:"选中日期当天的访问用户数"},{title:"周活",field:"week_active_user_count",tooltip:"选中日期所在自然周（包括选中日期在内）的访问用户数"},{title:"日活/周活",field:"active_user_count/week_active_user_count",computed:"active_user_count/week_active_user_count",tooltip:"选中日期的访问用户数占周访问用户数的百分比",formatter:"%"},{title:"月活",field:"month_active_user_count",tooltip:"选中日期所在自然月（包括选中日期在内）的访问用户数"},{title:"日活/月活",field:"active_user_count/month_active_user_count",computed:"active_user_count/month_active_user_count",tooltip:"选中日期的访问用户数占月访问用户数的百分比",formatter:"%"}]},"8e42":function(t,e,a){"use strict";a.r(e);var n=a("ad28"),i=a("7311");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6570c86a",null,!1,n["a"],void 0);e["default"]=u.exports},9121:function(t,e,a){"use strict";var n=a("103b"),i=a.n(n);i.a},"9bb0":function(t,e,a){"use strict";a.r(e);var n=a("cb5a"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},ac8a:function(t,e,a){"use strict";var n=a("235d"),i=a.n(n);i.a},ad28:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("061b").default,uniDataSelect:a("e784").default,uniStatTabs:a("73c9").default,uniDatetimePicker:a("9039").default,qiunDataCharts:a("8ccf").default,uniStatTable:a("ff39").default,uniPagination:a("50ce").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[t._v("用户活跃度分析")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAppid.apply(void 0,arguments)}},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date",yesterday:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:t.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"label-text mb-l"},[t._v("趋势图")]),a("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:t.chartTabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeChartTab.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,echartsH5:!0,echartsApp:!0,errorMessage:t.errorMessage}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-stat-table",{attrs:{data:t.tableData,filedsMap:t.fieldsMap,loading:t.loading,tooltip:!0}}),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":t.options.pageSize,current:t.options.pageCurrent,total:t.options.total},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},b779:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},bcdf:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("1dfb").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-pagination"},[!0===t.showPageSize||"true"===t.showPageSize?a("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:t.pageSizeIndex,range:t.pageSizeRange},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}}},[a("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[a("v-uni-text",[t._v(t._s(t.pageSizeRange[t.pageSizeIndex])+" "+t._s(t.piecePerPage))]),a("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):t._e(),a("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[t._v("共 "+t._s(t.total)+" 条")]),a("v-uni-view",{staticClass:"uni-pagination__btn",class:1===t.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.prevPageText))])]],2),a("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[a("v-uni-view",{staticClass:"uni-pagination__num-current"},[a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[t._v(t._s(t.currentIndex))]),a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[t._v("/"+t._s(t.maxPage||0))]),t._l(t.paper,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":e===t.currentIndex},on:{click:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"top",void 0,a.key,void 0))return null;arguments[0]=a=t.$handleEvent(a),t.selectPage(e,n)}}},[a("v-uni-text",[t._v(t._s(e))])],1)}))],2)],1),a("v-uni-view",{staticClass:"uni-pagination__btn",class:t.currentIndex>=t.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRight.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.nextPageText))])]],2)],1)},r=[]},cb5a:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("14d9"),a("d3b7"),a("e25e");var i=a("37dc"),r=n(a("4004")),o=(0,i.initVueI18n)(r.default),u=o.t,c={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||u("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||u("uni-pagination.prevText")},nextPageText:function(){return this.nextText||u("uni-pagination.nextText")},maxPage:function(){var t=1,e=Number(this.total),a=Number(this.pageSize);return e&&a&&(t=Math.ceil(e/a)),t},paper:function(){for(var t=this.currentIndex,e=this.pagerCount,a=this.total,n=this.pageSize,i=[],r=[],o=Math.ceil(a/n),u=0;u<o;u++)i.push(u+1);r.push(1);var c=i[i.length-(e+1)/2];return i.forEach((function(a,n){(e+1)/2>=t?a<e+1&&a>1&&r.push(a):t+2<=c?a>t-(e+1)/2&&a<t+(e+1)/2&&r.push(a):(a>t-(e+1)/2||o-e<a)&&a<i[i.length-1]&&r.push(a)})),o>e?((e+1)/2>=t?r[r.length-1]="...":t+2<=c?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(i[i.length-1])):(e+1)/2>=t||t+2<=c||(r.shift(),r.push(i[i.length-1])),r}},watch:{current:{immediate:!0,handler:function(t,e){this.currentIndex=t<1?1:t}},value:{immediate:!0,handler:function(t){1===Number(this.current)&&(this.currentIndex=t<1?1:t)}},pageSizeIndex:function(t){this.$emit("pageSizeChange",this.pageSizeRange[t])}},methods:{pickerChange:function(t){this.pageSizeIndex=t.detail.value,this.pickerClick()},pickerClick:function(){var t=document.querySelector("body");if(t){this.pickerShow=!this.pickerShow,this.pickerShow?t.classList.add("uni-pagination-picker-show"):setTimeout((function(){return t.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(t,e){if(parseInt(t))this.currentIndex=t,this.change("current");else{var a=Math.ceil(this.total/this.pageSize);if(e<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(e>=6)return void(this.currentIndex+5>a?this.currentIndex=a:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:t,current:this.currentIndex})}}};e.default=c},e7e0:function(t,e,a){"use strict";a.r(e);var n=a("5878"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},efbb:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 水平间距 */\n/* 水平间距 */\n/* 行为相关颜色 */\n/* 兼容 uni-ui 相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),t.exports=e},ff39:function(t,e,a){"use strict";a.r(e);var n=a("4e90"),i=a("e7e0");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9121");var o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"67b9b6bd",null,!1,n["a"],void 0);e["default"]=u.exports},ffb0:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')}}]);