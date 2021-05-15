<template>
  <div>
    <!--<el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      style="min-width: 1300px;position: absolute;margin: 0">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
    </el-menu>-->
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/jotter', navItem: '笔记本'},
          {name: '/library', navItem: '图书馆'},
          {name: '/history', navItem: '历史'},
          {name:'/about', navItem: '关于'}
        ],
        keywords: ''
      }
    },
    computed: {
      hoverBackground () {
        return '#ffd04b'
      },
      currentPath () {
        var x = this.$route.path.indexOf('/', 1)
        if (x !== -1) {
          return this.$route.path.substring(0, x)
        } else {
          return this.$route.path
        }
      }
    },
    methods:{
      login(){
        this.$router.replace('/login')
      },
      register(){
        this.$router.replace('/register')
      }
    }
  }
</script>
<style scoped>
  a{
    text-decoration: none;
  }
  span {
    pointer-events: none;
  }
  .el-menu{
    padding-left: 300px;
  }
</style>
