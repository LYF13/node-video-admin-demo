<style lang="sass">
@import "index.scss";
</style>

<template>
  <div id="app">
    <el-row class="warp">
      <el-col :span="24">
        <div style="background:#fff;width:100%;z-index:6;position:fixed;top:0;right:0;">
          <el-form :inline="true" class="top-bar-wraper">
            <div class="top-right-wraper">
              <el-button @click="reloadFn()" type="info" size="small" class="top-reload-button">刷新</el-button>
              <!-- <el-button type="success" class="top-bar-new-btn" size="small">
                <a href="/View/create/index.html" style="color:#fff;">新增</a>
              </el-button> -->
              

              <el-input v-model="searchVal.keyword" class="name-input" placeholder="请输入内容" size="small" value="" style="width:200px;">
                <template slot="prepend">关键词</template>
              </el-input>
              <el-input v-model="searchVal.vid" class="name-input" placeholder="请输入内容" size="small" value="" style="width:200px;">
                <template slot="prepend">VID</template>
              </el-input>

              <el-select v-model="searchVal.status" placeholder="状态" size="small" style="width:100px;">
                <el-option class="state-input" 
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              
              <el-button type="default" class="el-icon-search top-bar-search-btn" size="small" @click="searchData"></el-button>
            </div>
          </el-form>
        </div>
        
        <div style="width:100%;height:51px;background:#fff;"></div>

        <!--列表fixed title-->
        <el-table id="fixed-title"  highlight-current-row style="width: 100%;margin:0;z-index:2;display:none;" stripe empty-text=" ">

          <el-table-column label="详情" type="expand" align="center" width="30"></el-table-column> 

          <el-table-column label="序列" type="index" width="70" align="center"></el-table-column>

          <el-table-column label="标题" align="center" show-overflow-tooltip="true"></el-table-column>

          <el-table-column class-name="vidClass" label="视频VID" width="155" align="center"></el-table-column> 

          <el-table-column label="封面图" ></el-table-column> 

          <el-table-column class-name="vidClass" label="标签" align="center"></el-table-column>

          <el-table-column prop="category.0.category_name" label="分类" align="center"></el-table-column>

          <el-table-column label="视频源" align="center"></el-table-column>
          
          <el-table-column label="视频时长(秒)" width="140" align="center"></el-table-column>

          <el-table-column prop="video.score" label="影片评分" align="center" width="100"></el-table-column>

          <el-table-column class-name="vidClass" label="状态" align="center"></el-table-column>

          <el-table-column label="操作" width="80" align="center"></el-table-column> 
        </el-table>
        <!--列表-->
        <el-table v-if="movingList.data" :data="movingList.data.items"  highlight-current-row style="width: 100%;margin:0;" stripe row-class-name="show-detail-click" @row-click="clickShow" >
          <!-- <el-table-column type="selection" width="55"></el-table-column> -->
          <el-table-column label="详情" type="expand" align="center" width="30">
            <template scope="scope">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="类型">
                  <span>{{scope.row.video.source_type?'mp4':'外链'}}</span>
                </el-form-item>
                <el-form-item label="制片人">
                  <span>{{scope.row.video.filmmaking | noMesg}}</span>
                </el-form-item>
                <el-form-item label="导演">
                  <span>{{scope.row.video.regisseur | noMesg}}</span>
                </el-form-item>
                <el-form-item label="视频源地址">
                  <a :href="scope.row.video.source_link" target="_blank" style="color:blue;">
                    <span>{{scope.row.video.source_link}}</span>
                  </a>
                </el-form-item>
                <el-form-item label="影片简介">
                  <span>{{scope.row.video.description | noMesg}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column> 

          <el-table-column label="序列" type="index" width="70" align="center" class-name="this-index"></el-table-column>

          <el-table-column prop="video.title" label="标题" align="center" show-overflow-tooltip="true"></el-table-column>

          <el-table-column class-name="vidClass" prop="vid" label="视频VID" width="155" align="center"></el-table-column> 

          <el-table-column label="封面图" >
            <template scope="scope">
              <div class="img-wp" style="height:34px;width:50px;position:relative;">
                <img v-if="scope.row.video.cover" class="img-item" :src="scope.row.video.cover" alt="" >
              </div>
            </template>
          </el-table-column> 

          <el-table-column class-name="vidClass" label="标签" align="center">
            <template scope="scope">
              <!-- <el-badge :value="2" v-for="it in scope.row.tag" type="default" :id="it.tag_id" style="margin:10px 0;">
                <el-button size="small">{{it.tag_name}}</el-button>
              </el-badge> -->
              
              <el-popover ref="popover1" placement="top" trigger="hover">
                <span v-for="it in scope.row.tag">
                  <el-tag type="gray" style="margin:0 auto 6px;display:block;text-align:center;">{{it.tag_name}}</el-tag>
                </span>
              </el-popover>
              
              <el-button v-if="scope.row.tag&&scope.row.tag.length > 1" v-popover:popover1 type="danger" size="mini">标签</el-button>
              <el-button v-else-if="scope.row.tag&&scope.row.tag.length == 1" type="info" size="mini" v-for="it in scope.row.tag">{{it.tag_name}}</el-button>
              <el-button v-else size="mini" type="default">暂无标签</el-button>
            </template>
          </el-table-column>

          <el-table-column prop="category.0.category_name" label="分类" align="center">
            <template scope="scope">
              <span v-for="it in scope.row.category" style="display:block;">{{it.category_name}}</span>
            </template>
          </el-table-column>

          <el-table-column label="视频源" align="center">
            <template scope="scope">
              <a :href="scope.row.video.source_link" target="_blank">视频</a>
            </template>
          </el-table-column>
          
          <el-table-column label="视频时长(秒)" width="140" align="center">
            <template scope="scope">
              <span>{{scope.row.video.duration | duration}}</span>
            </template>
          </el-table-column>

          <el-table-column prop="video.score" label="影片评分" align="center" width="100"></el-table-column>

          <el-table-column class-name="vidClass" label="状态" align="center">
            <template scope="scope">
              <span>{{scope.row.video.status | statusFn}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="80" align="center">
            <template scope="scope">
              <el-button size="mini" type="info" @click="add(scope.row.vid)">添加</el-button>
              <!-- <el-button type="danger"  size="mini">删除</el-button>
              <el-button type="warning"  size="mini">更换视频</el-button>
              <el-button type="default"  size="mini">视频列表</el-button> -->
            </template>
          </el-table-column> 
        </el-table>
        
        <el-card>
          <el-col :span="24">
            <el-button id="loadMoreBtn" type="info" size="large" class="load-more-btn" style="margin:0 auto;display: block;width:200px;margin-bottom:20px;" @click="fetchMore">加载更多</el-button>
          </el-col>
        </el-card>
        

      </el-col>
    </el-row>
  </div>
</template>

<script>

// import magic from '../lib/js/magic.js'
// const request = magic.getRequest();
// const ua = magic.getUa();
import {Utils} from '../lib/js/util.js';
let utils = new Utils();
export default {
  data () {
    return {
      options: [{
        value: 0,
        label: '删除'
      }, {
        value: 1,
        label: '已添加'
      }, {
        value: 2,
        label: '转码中'
      }, {
        value: 3,
        label: '可使用'
      }],
      movingList:{},
      pageNum:1,
      searchVal:{
        keyword:'',
        vid:'',
        status:''
      }
    }
  },
  watch:{
    movingList(){
      setTimeout(function(){
        let imgsH = $('.img-item').css('height');

        for(let val of $('.img-item')){
          
          if(val.height >34){
            let size = '-'+(val.height-34)/2+'px';
            val.style.top = size;
          };
        }
      },100);
    }
  },
  filters: {
    statusFn(n){
      switch (n) {
        case 0:
          return '删除';
        case 1:
          return '已添加';
        case 2:
          return '转码中';
        case 3:
          return '转码成功可用状态';
      }
    },
    noMesg(n){
      return n?n:'暂无信息';
    },
    duration(n){
      const self = this;
      const px_d = 1000*60*60*24;
      const px_h = 1000*60*60;
      const px_m = 1000*60;
      const px_s = 1000;
      let d = Math.floor(n/px_d);
      let h = Math.floor((n-d*px_d)/px_h);
      let m = Math.floor((n-d*px_d-h*px_h)/px_m);
      let s = Math.floor((n-d*px_d-h*px_h-m*px_m)/px_s);
      let arr = [];
      if(d>0){
          arr.push(`${d}天`);
      }
      if(arr.length || h>0){
          arr.push(`${h}时`);
      }
      if(arr.length || m>0){
          arr.push(`${m}分`);
      }
      if(arr.length || s>0){
          arr.push(`${s}秒`);
      }
      n = arr.join('');
      
      return n; 
    }
  },
  mounted(){
    this.fetchData();
    this.scrollFn();
    this.searchKeyDown();

    $('.el-table__header').css({'position':'fixed','left':'0','top':'50px'});
    $('.el-table__empty-block').css('display','none');
  },
  methods:{
    fetchData(num = 1){
      let _this = this;
      utils.get(_this.$store.getters.baseUrl+'/v1/video?expand=tag,category&page='+num).then(res => {

        if(num == 1){

          _this.movingList = res;
        }else{
          
          let thisList = _this.movingList.data.items;
          
          _this.movingList.data.items = thisList.concat(res.data.items);
        }

        let totalPageNum = Math.ceil(_this.movingList.data.total/_this.movingList.data.per_page);

        totalPageNum == num ? $('#loadMoreBtn').hide() : $('#loadMoreBtn').show();

      })
    },
    clickShow(row, event, column){
      
      $(event.target).parents(".el-table__row").find(".el-table__expand-icon").click();
    },
    fetchMore(){

      this.pageNum++;
      
      this.fetchData(this.pageNum);
    },
    reloadFn(){

      location.reload();
    },
    searchKeyDown(){

      let self = this;

      $('.name-input input').on('keydown',function(ev){

        if(ev.keyCode ==13){

          self.searchData();
        }
      });
    },
    searchData(){
      let _this = this;
      let {keyword:keyword,vid:vid,status:status} = this.searchVal;
      let searchData = {};
      
      keyword ? searchData['keyword'] = keyword : '';
      vid ? searchData['vid'] = vid : '';
      status ? searchData['status'] = status : (status == '0' ? searchData['status'] = status : searchData['status'] = 3);
      
      utils.get(_this.$store.getters.baseUrl+'/v2/video',searchData).then(res => {
        
        _this.movingList.data.items = res.data.items;
        
        for(let key in searchData){
          delete searchData[key];
        }
        _this.searchVal['keyword'] = '';
        _this.searchVal['vid'] = '';
        _this.searchVal['status'] = '';
      })

    },
    scrollFn(){
      $(window).on('scroll',function(){
        let ScrollTop = $(window).scrollTop();
        if(ScrollTop >=30){
          $('#fixed-title').css('display','block');
        }else{
          $('#fixed-title').css('display','none');
        }
      });
    },
    add(id){
      window.parent.postMessage({ 
        act: 'add',
        msg: {
          id: id
        }
      }, '*');
    }
  }
}

</script>
