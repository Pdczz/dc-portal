<template>
  <div>
    <HeadNew></HeadNew>
    <div style="height: 100px;background-color: greenyellow"></div>
    <el-row ><!--class="home" :gutter="20"-->
      <el-col :span="6" v-for="item of home" :key="item._id">
        <el-card :body-style="{padding:'0px'}" style="margin-bottom: 20px">
          <img src="../../static/img/mv.jpg" alt="" class="images">
          <div style="padding: 14px">
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{item.time}}</time>
              <el-button type="warning" class="button" icon="el-icon-star-off" circle></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!--    <div >{{articles}}</div>-->
  </div>
</template>

<script>
  import HeadNew from "../../components/HeadNew/HeadNew";
  import * as api from "../../api/api";
  import axios from "../../.nuxt/axios";

  export default {
    name: "index",
    components: {HeadNew},
    asyncData({params}) {

      api.getArticleList(1).then(res => {
        // console.log(res)
        return {
          articles: res.items,
          total: res.items
        }
      })
    },
    data() {
      return {
        home: [
          {"_id": 1, "title": "我是标题1", "time": "2021-06-21 22:25:00"},
          {"_id": 2, "title": "我是标题2", "time": "2021-06-21 22:25:00"},
          {"_id": 3, "title": "我是标题3", "time": "2021-06-21 22:25:00"},
          {"_id": 4, "title": "我是标题4", "time": "2021-06-21 22:25:00"},
          {"_id": 5, "title": "我是标题5", "time": "2021-06-21 22:25:00"},
          {"_id": 6, "title": "我是标题6", "time": "2021-06-21 22:25:00"},
          {"_id": 7, "title": "我是标题7", "time": "2021-06-21 22:25:00"},
          {"_id": 8, "title": "我是标题8", "time": "2021-06-21 22:25:00"},
          {"_id": 9, "title": "我是标题9", "time": "2021-06-21 22:25:00"},
          {"_id": 10, "title": "我是标题10", "time": "2021-06-21 22:25:00"},

        ],
      }
    },
    mounted() {
      this.init();
      // this.init2();
    },
    methods: {
      init() {
        let par={"pid":1}
        let s = JSON.stringify(par);
        api.getArticleList2(s).then(result => {
          console.log(result)
          return {
            articles: result.data.items,
            total: result.data.total
          }
        })
      },

    },
  }
</script>

<style scoped>


  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .home {
    margin-top: 20px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .images {
    width: 100%;
    display: block;
  }

  .button {
    padding: 0;
    float: right;
  }
</style>
