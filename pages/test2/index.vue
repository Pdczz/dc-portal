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
          console.log(process.client)
          githubLogin(this.$route.query.code).then(res=>{
            console.log(res)
            if (res.status==200){
              this.$message.success("登录成功")
            }else if (res.status==401){
              this.$message.error("GitHub登录code过期")
            }

          }).catch(err=>{
            let response = err.response;
            if (response && response.data){
              this.$message.error(response.data.msg)
            }else{

              this.$message.error("登录失败")
            }
          })

        }
      }
    }

</script>

<style scoped>

</style>
