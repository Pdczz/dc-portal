<template>
  <div>
    {{articles}}条数据
  </div>
</template>

<script>
  import * as api from "../../api/api";
  export default {
    name: "index",
    async asyncData({$axios}) {
      // let json = await $axios({url:'http://localhost:9090/api/page?pid=1'});
     /* let json =  $axios.get('/page?pid='+1).then(res=>{
        console.log(res.data)
      });*/
     let params={pid:"1"};
     api.getArticleList2({params}).then(res=>{
       console.log("res1"+res)
     })
      return api.getArticleList({params}).then(res=>{
        if (true){
          return {
            articles:res.items
          }
        }
      }).catch(err=>{
        return {
          articles:[]
        }
      });
     /* return {
        total: json.data.total
      }*/
    }
  }
</script>

<style scoped>

</style>
