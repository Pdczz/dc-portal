<template>
  <div>
    test2
    <button @click="login">点击</button>
  </div>
</template>

<script>
  import { githubLogin } from '/api/user'
  export default {
    name: "index",
    methods:{
        login(){
          githubLogin(this.$route.query.code).then(res=>{
            console.log(res.data)
          }).catch(err=>{
            console.log(err)
          })
        }
      }
    }

</script>

<style scoped>

</style>
