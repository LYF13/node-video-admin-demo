webpackJsonp([1],{0:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}var n=a(3),s=l(n),o=a(137),r=l(o),i=a(52);l(i);a(30);var c=a(56),u=l(c);a(53);var d=a(45),p=l(d),v=a(31),f=l(v),h=a(28),m=l(h);s.default.use(u.default),s.default.use(p.default);var _=new u.default.Store(f.default);s.default.use(m.default),new s.default({el:"#app",render:function(t){return t(r.default)},store:_})},80:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(81),s=l(n),o=a(32),r=new o.Utils;e.default={data:function(){return{options:[{value:0,label:"删除"},{value:1,label:"已添加"},{value:2,label:"转码中"},{value:3,label:"可使用"}],movingList:{},pageNum:1,searchVal:{keyword:"",vid:"",status:""}}},watch:{movingList:function(){setTimeout(function(){var t=($(".img-item").css("height"),!0),e=!1,a=void 0;try{for(var l,n=(0,s.default)($(".img-item"));!(t=(l=n.next()).done);t=!0){var o=l.value;if(o.height>34){var r="-"+(o.height-34)/2+"px";o.style.top=r}}}catch(t){e=!0,a=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw a}}},100)}},filters:{statusFn:function(t){switch(t){case 0:return"删除";case 1:return"已添加";case 2:return"转码中";case 3:return"转码成功可用状态"}},noMesg:function(t){return t?t:"暂无信息"},duration:function(t){var e=864e5,a=36e5,l=6e4,n=1e3,s=Math.floor(t/e),o=Math.floor((t-s*e)/a),r=Math.floor((t-s*e-o*a)/l),i=Math.floor((t-s*e-o*a-r*l)/n),c=[];return s>0&&c.push(s+"天"),(c.length||o>0)&&c.push(o+"时"),(c.length||r>0)&&c.push(r+"分"),(c.length||i>0)&&c.push(i+"秒"),t=c.join("")}},mounted:function(){this.fetchData(),this.scrollFn(),this.searchKeyDown(),$(".el-table__header").css({position:"fixed",left:"0",top:"50px"}),$(".el-table__empty-block").css("display","none")},methods:{fetchData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;r.get(e.$store.getters.baseUrl+"/v1/video?expand=tag,category&page="+t).then(function(a){if(1==t)e.movingList=a;else{var l=e.movingList.data.items;e.movingList.data.items=l.concat(a.data.items)}var n=Math.ceil(e.movingList.data.total/e.movingList.data.per_page);n==t?$("#loadMoreBtn").hide():$("#loadMoreBtn").show()})},clickShow:function(t,e,a){$(e.target).parents(".el-table__row").find(".el-table__expand-icon").click()},fetchMore:function(){this.pageNum++,this.fetchData(this.pageNum)},reloadFn:function(){location.reload()},searchKeyDown:function(){var t=this;$(".name-input input").on("keydown",function(e){13==e.keyCode&&t.searchData()})},searchData:function t(){var e=this,a=this.searchVal,l=a.keyword,n=a.vid,s=a.status,t={};l?t.keyword=l:"",n?t.vid=n:"",s?t.status=s:"0"==s?t.status=s:t.status=3,r.get(e.$store.getters.baseUrl+"/v2/video",t).then(function(a){e.movingList.data.items=a.data.items;for(var l in t)delete t[l];e.searchVal.keyword="",e.searchVal.vid="",e.searchVal.status=""})},scrollFn:function(){$(window).on("scroll",function(){var t=$(window).scrollTop();t>=30?$("#fixed-title").css("display","block"):$("#fixed-title").css("display","none")})},add:function(t){window.parent.postMessage({act:"add",msg:{id:t}},"*")}}}},81:function(t,e,a){t.exports={default:a(83),__esModule:!0}},83:function(t,e,a){a(44),a(43),t.exports=a(110)},110:function(t,e,a){var l=a(8),n=a(42);t.exports=a(9).getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return l(e.call(t))}},134:function(t,e){},137:function(t,e,a){a(134);var l=a(55)(a(80),a(139),null,null);t.exports=l.exports},139:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-row",{staticClass:"warp"},[a("el-col",{attrs:{span:24}},[a("div",{staticStyle:{background:"#fff",width:"100%","z-index":"6",position:"fixed",top:"0",right:"0"}},[a("el-form",{staticClass:"top-bar-wraper",attrs:{inline:!0}},[a("div",{staticClass:"top-right-wraper"},[a("el-button",{staticClass:"top-reload-button",attrs:{type:"info",size:"small"},on:{click:function(e){t.reloadFn()}}},[t._v("刷新")]),t._v(" "),a("el-input",{staticClass:"name-input",staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容",size:"small",value:""},model:{value:t.searchVal.keyword,callback:function(e){t.searchVal.keyword=e},expression:"searchVal.keyword"}},[a("template",{slot:"prepend"},[t._v("关键词")])],2),t._v(" "),a("el-input",{staticClass:"name-input",staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容",size:"small",value:""},model:{value:t.searchVal.vid,callback:function(e){t.searchVal.vid=e},expression:"searchVal.vid"}},[a("template",{slot:"prepend"},[t._v("VID")])],2),t._v(" "),a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"状态",size:"small"},model:{value:t.searchVal.status,callback:function(e){t.searchVal.status=e},expression:"searchVal.status"}},t._l(t.options,function(t){return a("el-option",{key:t.value,staticClass:"state-input",attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-button",{staticClass:"el-icon-search top-bar-search-btn",attrs:{type:"default",size:"small"},on:{click:t.searchData}})],1)])],1),t._v(" "),a("div",{staticStyle:{width:"100%",height:"51px",background:"#fff"}}),t._v(" "),a("el-table",{staticStyle:{width:"100%",margin:"0","z-index":"2",display:"none"},attrs:{id:"fixed-title","highlight-current-row":"",stripe:"","empty-text":" "}},[a("el-table-column",{attrs:{label:"详情",type:"expand",align:"center",width:"30"}}),t._v(" "),a("el-table-column",{attrs:{label:"序列",type:"index",width:"70",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"标题",align:"center","show-overflow-tooltip":"true"}}),t._v(" "),a("el-table-column",{attrs:{"class-name":"vidClass",label:"视频VID",width:"155",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"封面图"}}),t._v(" "),a("el-table-column",{attrs:{"class-name":"vidClass",label:"标签",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"category.0.category_name",label:"分类",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"视频源",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"视频时长(秒)",width:"140",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"video.score",label:"影片评分",align:"center",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{"class-name":"vidClass",label:"状态",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"80",align:"center"}})],1),t._v(" "),t.movingList.data?a("el-table",{staticStyle:{width:"100%",margin:"0"},attrs:{data:t.movingList.data.items,"highlight-current-row":"",stripe:"","row-class-name":"show-detail-click"},on:{"row-click":t.clickShow}},[a("el-table-column",{attrs:{label:"详情",type:"expand",align:"center",width:"30"},scopedSlots:t._u([["default",function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"类型"}},[a("span",[t._v(t._s(e.row.video.source_type?"mp4":"外链"))])]),t._v(" "),a("el-form-item",{attrs:{label:"制片人"}},[a("span",[t._v(t._s(t._f("noMesg")(e.row.video.filmmaking)))])]),t._v(" "),a("el-form-item",{attrs:{label:"导演"}},[a("span",[t._v(t._s(t._f("noMesg")(e.row.video.regisseur)))])]),t._v(" "),a("el-form-item",{attrs:{label:"视频源地址"}},[a("a",{staticStyle:{color:"blue"},attrs:{href:e.row.video.source_link,target:"_blank"}},[a("span",[t._v(t._s(e.row.video.source_link))])])]),t._v(" "),a("el-form-item",{attrs:{label:"影片简介"}},[a("span",[t._v(t._s(t._f("noMesg")(e.row.video.description)))])])],1)]}]])}),t._v(" "),a("el-table-column",{attrs:{label:"序列",type:"index",width:"70",align:"center","class-name":"this-index"}}),t._v(" "),a("el-table-column",{attrs:{prop:"video.title",label:"标题",align:"center","show-overflow-tooltip":"true"}}),t._v(" "),a("el-table-column",{attrs:{"class-name":"vidClass",prop:"vid",label:"视频VID",width:"155",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"封面图"},scopedSlots:t._u([["default",function(e){return[a("div",{staticClass:"img-wp",staticStyle:{height:"34px",width:"50px",position:"relative"}},[e.row.video.cover?a("img",{staticClass:"img-item",attrs:{src:e.row.video.cover,alt:""}}):t._e()])]}]])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"vidClass",label:"标签",align:"center"},scopedSlots:t._u([["default",function(e){return[a("el-popover",{ref:"popover1",attrs:{placement:"top",trigger:"hover"}},t._l(e.row.tag,function(e){return a("span",[a("el-tag",{staticStyle:{margin:"0 auto 6px",display:"block","text-align":"center"},attrs:{type:"gray"}},[t._v(t._s(e.tag_name))])],1)})),t._v(" "),e.row.tag&&e.row.tag.length>1?a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}],attrs:{type:"danger",size:"mini"}},[t._v("标签")]):e.row.tag&&1==e.row.tag.length?t._l(e.row.tag,function(e){return a("el-button",{attrs:{type:"info",size:"mini"}},[t._v(t._s(e.tag_name))])}):a("el-button",{attrs:{size:"mini",type:"default"}},[t._v("暂无标签")])]}]])}),t._v(" "),a("el-table-column",{attrs:{prop:"category.0.category_name",label:"分类",align:"center"},scopedSlots:t._u([["default",function(e){return t._l(e.row.category,function(e){return a("span",{staticStyle:{display:"block"}},[t._v(t._s(e.category_name))])})}]])}),t._v(" "),a("el-table-column",{attrs:{label:"视频源",align:"center"},scopedSlots:t._u([["default",function(e){return[a("a",{attrs:{href:e.row.video.source_link,target:"_blank"}},[t._v("视频")])]}]])}),t._v(" "),a("el-table-column",{attrs:{label:"视频时长(秒)",width:"140",align:"center"},scopedSlots:t._u([["default",function(e){return[a("span",[t._v(t._s(t._f("duration")(e.row.video.duration)))])]}]])}),t._v(" "),a("el-table-column",{attrs:{prop:"video.score",label:"影片评分",align:"center",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{"class-name":"vidClass",label:"状态",align:"center"},scopedSlots:t._u([["default",function(e){return[a("span",[t._v(t._s(t._f("statusFn")(e.row.video.status)))])]}]])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"80",align:"center"},scopedSlots:t._u([["default",function(e){return[a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){t.add(e.row.vid)}}},[t._v("添加")])]}]])})],1):t._e(),t._v(" "),a("el-card",[a("el-col",{attrs:{span:24}},[a("el-button",{staticClass:"load-more-btn",staticStyle:{margin:"0 auto",display:"block",width:"200px","margin-bottom":"20px"},attrs:{id:"loadMoreBtn",type:"info",size:"large"},on:{click:t.fetchMore}},[t._v("加载更多")])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=index.16025e86f50147ddf9d6.js.map