webpackJsonp([2],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=a(3),s=l(r),o=a(136),n=l(o),i=a(52);l(i);a(30);var m=a(56),c=l(m);a(53);var u=a(45),f=l(u),v=a(28),p=l(v),d=a(31),_=l(d);s.default.use(c.default),s.default.use(f.default),s.default.use(p.default);var b=new c.default.Store(_.default);new s.default({el:"#app",render:function(e){return e(n.default)},store:b})},79:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(32),r=new l.Utils;t.default={data:function(){return{source_types:[{value:"1",label:"mp4"},{value:"0",label:"外链"}],form:{category:"",tag:"",source_link:"",title:"",duration:"",score:"",cover:"",description:"",property:"",regisseur:"",filmmaking:"",extend:{origin_title:"",origin_website_link:"",origin_resource_link:"",subtitles_link:"",preview_image_path:"",preview_video_path:""}},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value4:[],value5:[],value6:[],movingTag:{},upfile:{}}},components:{},created:function(){},mounted:function(){this.fetchTag(),this.upVideo()},methods:{fetchTag:function(){var e=this;console.log(e.$store.getters.baseUrl,1234),r.get(e.$store.getters.baseUrl+"/v1/category").then(function(t){e.movingTag=t.data})},upVideo:function(){}}}},133:function(e,t){},136:function(e,t,a){a(133);var l=a(55)(a(79),a(138),null,null);e.exports=l.exports},138:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("el-row",{staticClass:"warp"},[a("el-col",{staticClass:"warp-main",attrs:{span:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",slot:"header"},[a("span",{staticStyle:{"line-height":"36px"}},[e._v("影片创建")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[a("a",{staticStyle:{color:"#fff"},attrs:{href:"/View/movelist/index.html"}},[e._v("返回列表")])])],1),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-card",{staticClass:"box-card mg_b"},[a("el-form-item",{staticStyle:{"margin-bottom":"5px"},attrs:{label:"视频源地址"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入视频源地址信息")])],1),e._v(" "),a("el-button",{staticStyle:{"margin-left":"13px"},attrs:{id:"container",type:"primary"}},[e._v("上传视频")]),e._v(" "),a("el-progress",{staticStyle:{width:"80%"},attrs:{percentage:50,status:"exception","show-text":"true"}})],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-form-item",{attrs:{label:"分类"}},[a("el-select",{staticClass:"width-655",attrs:{multiple:"",placeholder:"请选择"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}},e._l(e.movingTag,function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.category_name}},e._l(t.child,function(l){return t.child?a("el-option",{key:l.id,attrs:{label:l.label,value:l.category_name}}):e._e()}))})),e._v(" "),a("span",[e._v("请输入分类信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"标签"}},[a("el-select",{staticClass:"width-655",attrs:{multiple:"",placeholder:"请选择"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("span",[e._v("请输入标签信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"视频源类型"}},[a("el-select",{staticClass:"width-655",attrs:{placeholder:"请选择"},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}},e._l(e.source_types,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("span",[e._v("请输入分类信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入标题信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"视频时长(毫秒)"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入视频时长")])],1),e._v(" "),a("el-form-item",{attrs:{label:"评分"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入评分信息")])],1),e._v(" "),a("el-form-item",{staticClass:"width-655",attrs:{label:"封面图"}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/"}},[a("div"),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("浏览")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"影片简介"}},[a("el-input",{staticClass:"width-655",attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.form.desc=t},expression:"form.desc"}}),e._v(" "),a("span",[e._v("请输入影片简介信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"视频处理属性"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.form.type=t},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"mp4",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"m3u8",name:"type"}})],1)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card margin-t20"},[a("el-form-item",{attrs:{label:"导演"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入导演姓名")])],1),e._v(" "),a("el-form-item",{attrs:{label:"制片人"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入制片人信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"影片标题"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入影片标题信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"原视频网站地址"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入原视频网站地址信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"无字幕原片地址"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入原片地址信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"字幕文件地址"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入字幕文件地址信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"视频预览图地址"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入视频预览图地址信息")])],1),e._v(" "),a("el-form-item",{attrs:{label:"预览视频地址"}},[a("el-input",{staticClass:"width-655",model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}}),e._v(" "),a("span",[e._v("请输入预览视频地址信息")])],1)],1),e._v(" "),a("el-form-item",[a("el-button",{staticStyle:{float:"right","margin-top":"10px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"10px","margin-top":"10px"}},[e._v("撤销")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=index.16025e86f50147ddf9d6.js.map