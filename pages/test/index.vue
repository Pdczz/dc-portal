<template>
    <div>
      <br>
      <br>
      <h1>测试页面</h1>
      {{article}}
    </div>
</template>

<script>
    export default {
        name: "index",
        async asyncData({$axios}){
            // console.log($axios)
            // let newVar = $axios({url:'/data/list.json'});
            let articles = await $axios.get('/article/7/1');
            return{
                article: articles.data.items
            }
        }
    }
</script>

<style scoped>

</style>
