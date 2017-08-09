<style lang="sass">
@import "index.scss";
</style>

<template>
<div id="app">
  <el-row class="warp">
    <el-col :span="24" class="warp-main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">影片创建</span>
          <el-button style="float: right;" type="primary"><a href="/View/movelist/index.html" style="color:#fff;">返回列表</a></el-button>
        </div>

        <el-form ref="form" :model="form" label-width="80px">

          <el-card class="box-card mg_b">
            <el-form-item label="视频源地址" style="margin-bottom:5px;">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入视频源地址信息</span>
            </el-form-item>
            <el-button id="container" style="margin-left:13px;" type="primary">上传视频</el-button>
            <el-progress :percentage="50" status="exception" show-text="true" style="width:80%;"></el-progress>
          </el-card>

          <el-card class="box-card">
            <el-form-item label="分类">
              <el-select v-model="value4" class="width-655" multiple placeholder="请选择">
                <el-option
                  v-for="item in movingTag"
                  :key="item.id"
                  :label="item.label"
                  :value="item.category_name">
                  <el-option v-if="item.child" 
                    v-for="it in item.child"
                    :key="it.id"
                    :label="it.label"
                    :value="it.category_name">
                  </el-option>
                </el-option>
              </el-select>
              <span>请输入分类信息</span>
            </el-form-item>
            <el-form-item label="标签">
              <el-select v-model="value5" class="width-655" multiple placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span>请输入标签信息</span>
            </el-form-item>
             <el-form-item label="视频源类型">
              <el-select v-model="value6" class="width-655" placeholder="请选择">
                <el-option
                  v-for="item in source_types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span>请输入分类信息</span>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入标题信息</span>
            </el-form-item>
            <el-form-item label="视频时长(毫秒)">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入视频时长</span>
            </el-form-item>
            <el-form-item label="评分">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入评分信息</span>
            </el-form-item>
            <el-form-item label="封面图" class="width-655">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                <div></div>
                <el-button type="primary">浏览</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item label="影片简介">
              <el-input type="textarea" v-model="form.desc" class="width-655"></el-input>
              <span>请输入影片简介信息</span>
            </el-form-item>
            <el-form-item label="视频处理属性">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="mp4" name="type"></el-checkbox>
                <el-checkbox label="m3u8" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

          </el-card>

          <el-card class="box-card margin-t20">

            <el-form-item label="导演">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入导演姓名</span>
            </el-form-item>
            <el-form-item label="制片人">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入制片人信息</span>
            </el-form-item>
            <el-form-item label="影片标题">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入影片标题信息</span>
            </el-form-item>
            <el-form-item label="原视频网站地址">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入原视频网站地址信息</span>
            </el-form-item>
            <el-form-item label="无字幕原片地址">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入原片地址信息</span>
            </el-form-item>
            <el-form-item label="字幕文件地址">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入字幕文件地址信息</span>
            </el-form-item>
            <el-form-item label="视频预览图地址">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入视频预览图地址信息</span>
            </el-form-item>
            <el-form-item label="预览视频地址">
              <el-input v-model="form.name" class="width-655"></el-input>
              <span>请输入预览视频地址信息</span>
            </el-form-item>

          </el-card>
          
          
          <el-form-item>
            <el-button type="primary" @click="onSubmit"  style="float: right;margin-top:10px;margin-right20px;">提交</el-button>
            <el-button  style="float: right;margin-right:10px;margin-top:10px;">撤销</el-button>
          </el-form-item>
        </el-form>

      </el-card>
    </el-col>
  </el-row>
</div>

</template>

<!-- <script type="text/javascript" src="../lib/js/qiniu/demo/js/plupload/plupload.full.min.js" ></script>
<script type="text/javascript" src="../lib/js/qiniu/demo/js/plupload/i18n/zh_CN.js" ></script>
<script type="text/javascript" src="../lib/js/qiniu/demo/js/ui_v2.js" ></script>
<script type="text/javascript" src="../lib/js/qiniu/qiniu.min.js" ></script>
<script type="text/javascript" src="../lib/js/qiniu/demo/js/highlight/highlight.js"></script> -->
<script>
// import'../lib/js/qiniu/demo/js/plupload/plupload.full.min.js';
// import'../lib/js/qiniu/demo/js/plupload/i18n/zh_CN.js';
// import'../lib/js/qiniu/demo/js/ui_v2.js';
// import'../lib/js/qiniu/qiniu.min.js';
// import'../lib/js/qiniu/demo/js/highlight/highlight.js';

// import magic from '../lib/js/magic.js'
// const request = magic.getRequest();
// const ua = magic.getUa();
import {Utils} from '../lib/js/util.js';
let utils = new Utils();

export default {
  data () {
    return {
      source_types:[{
        value: '1',
        label: 'mp4'
      }, {
        value: '0',
        label: '外链'
      }],
      form: {
        category: '',
        tag: '',
        source_link: '',
        title: '',
        duration: '',
        score: '',
        cover:'',
        description: '',
        property:'',
        regisseur: '',
        filmmaking:'',
        extend:{
          origin_title:'',
          origin_website_link:'',
          origin_resource_link:'',
          subtitles_link:'',
          preview_image_path:'',
          preview_video_path:''
        }
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value4: [],
      value5: [],
      value6: [],
      movingTag:{},
      upfile:{}
    }
  },
  components: {
     
  },
  created(){
   
    
  },
  mounted(){
    this.fetchTag();
    this.upVideo();
  },
  methods:{
    fetchTag(){
      var _this = this;
      console.log(_this.$store.getters.baseUrl,1234);
      utils.get(_this.$store.getters.baseUrl+'/v1/category').then(res => {
        _this.movingTag = res.data;
        //console.log(_this.movingTag);
      })      
    },
    upVideo(){
      var self = this;
      var mime_upload_type = [
        { title : "mp4 files", extensions : "mp4" },
        { title : "mov files", extensions : "mov" },
        { title : "avi files", extensions : "avi" }
      ];
      
      // var uploader = Qiniu.uploader({
      //     runtimes: 'html5,flash,html4',
      //     browse_button: 'container',
      //     container: 'container',
      //     drop_element: 'container',
      //     max_file_size: '3072mb',
      //     flash_swf_url: '../lib/js/qiniu/demo/js/plupload/Moxie.swf',
      //     dragdrop: true,
      //     chunk_size: '4mb',
      //     uptoken_url: self.$store.getters.baseUrl+"/api/qiniu/uptoken",
      //     domain: self.$store.state.domain,
      //     // downtoken_url: '/downtoken',
      //     unique_names: false,
      //     save_key: false,
      //     filters: {
      //         mime_types : mime_upload_type
      //     },
      //     auto_start: true,
      //     init: {
      //         'FilesAdded': function(up, files) {
      //             if(files.length > 1){ 
      //               alert('请仅选择一个视频文件');
      //               // showDialogTip({tip:"请仅选择一个视频文件",error:true,delay:2500});
      //               for(var i=0;i<files.length;i++){
      //                 uploader.removeFile(files[i]);
      //               }
      //             }
      //             for(var i=0;i<files.length;i++){
      //               if(!/(mp4|mov|avi|quicktime)/i.test(files[i].type)){
      //                 uploader.removeFile(files[i]);
      //                 //showDialogTip({tip:"请上传mp4,mov或avi格式的视频文件",error:true,delay:2500});
      //                 alert('请上传mp4,mov或avi格式的视频文件');
      //               }
      //             }  
               
      //             plupload.each(files, function(file) {
      //               var progress = new FileProgress(file, 'thelist');
      //               progress.setStatus("wait...");
      //             });
      //         },
      //         'BeforeUpload': function(up, file) {
                 
      //             var progress = new FileProgress(file, 'thelist');
      //             var videoName=progress.file.name;
      //             if(progress.file.name.length>13){
      //                 videoName=progress.file.name.substr(0,5)+"..."+progress.file.name.substr(file.name.length-8,8);
      //             }
      //             $(".mp4-name").text(videoName);
      //             var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
      //             if (up.runtime === 'html5' && chunk_size) {
      //                 progress.setChunkProgess(chunk_size);
      //             }
      //         },
      //         'UploadProgress': function(up, file) {
      //           // $('.temp-stop').css('display','inline-block');
      //           // $('.this-progress-fack-bar').css('display','none');
      //             if($(".total-stop").attr("canceling") == 1){
      //                 uploader.removeFile(file);
      //                 console.log('end_progress');
      //                 return false;
      //             }
                  
      //             var progress = new FileProgress(file, 'this-progress-bar');
      //             var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
      //             progress.setProgress(file.percent + "%", file.speed, chunk_size);
      //             console.log("上传中...");
      //         },
      //         'UploadComplete': function() {

      //         },
      //         'FileUploaded': function(up, file, info) {
      //             // var progress = new FileProgress(file, 'thelist');
      //             var obj = JSON.parse(info);
      //             var old = obj.key;
      //             // info = JSON.stringify(obj);
      //             // progress.setComplete(up, info);
      //             // console.log(obj);
      //             self.upfile['qiniu_url'] = self.$store.state.domain+old;
      //             s3BtnPassFn();

      //             $('.text-center').text('上传完成');
      //             $('.temp-stop').css('display','none');
      //             $('.mp4-flow').css('display','none');
      //             // $.post("/upload/qiniu/ts-transcode",{key:obj.key},function(res){
      //             //     $("#qiniu_url").val(res.url);
      //             // },'json')

      //             // $('.this-progress-bar tr').eq(0).remove();

      //             // $('.step3-progress-bar').removeClass('show');
      //             // $('.step3-top-btn').addClass('show');
                  
      //         },
      //         'Error': function(up, err, errTip) {
                  
      //             //showDialogTip({tip:"为保证上传流畅，视频大小不能超过3G",error:true,delay:2500});
      //           $('.mp4-flow').text(err);
      //         },
      //         'Key': function(up, file) {
                  
      //             var key = "";
      //             $.ajax({
      //                 url: self.$store.getters.baseUrl+'/upload/qiniu/ts-getKey?name='+file.name,
      //                 type: 'GET',
      //                 async: false,
      //                 success: function(data) {
      //                     var ext = Qiniu.getFileExtension(file.name);
      //                     key = data + '.' + ext;
                          
      //                 },
      //                 cache: false
      //             });
      //             return key;
      //         }
      //     }
      // });
    }
  }
}

</script>