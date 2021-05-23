<template>
  <el-menu
    :default-active="currentPath"
    class="el-menu-admin"
    router
    mode="vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
    <div style="height: 80px;"></div>
    <!--index 没有用但是必需字段-->
    <el-submenu v-for="(item,i) in menuList" :key="i" :index="(i).toString()" style="text-align: left">
        <span slot="title" style="font-size: 15px;">
          <i :class="item.iconCls"></i>
          {{item.nameZh}}
        </span>
      <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
        <i :class="child.icon"></i>
        {{ child.nameZh }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>


    export default {
        name: 'AdminMenu',
        data() {
            return {
                isCollapse: false,
                name: '',
                menuList:[]
            }
        },
        created(){
            let data = [];

            this.$axios.get('/menu').then(resp => {
                if (resp && resp.status === 200) {
                    data = resp.data;
                    let temp = [];
                    for(let i=0;i<data.length;i++){
                        temp.push(data[i])
                    }
                    this.menuList=temp;
                    if (temp.length==0){
                        this.$router.replace('/login')
                    }
                    // return [{"id":1,"path":"/admin","name":"AdminIndex","nameZh":"首页","iconCls":"el-icon-s-home","component":"AdminIndex","parentId":0,"children":[{"id":2,"path":"/admin/dashboard","name":"DashboardAdmin","nameZh":"运行情况","iconCls":null,"component":"dashboard/admin/index","parentId":1,"children":null}]},{"id":3,"path":"/admin","name":"User","nameZh":"用户管理","iconCls":"el-icon-user","component":"AdminIndex","parentId":0,"children":[{"id":6,"path":"/admin/user/profile","name":"Profile","nameZh":"用户信息","iconCls":null,"component":"user/UserProfile","parentId":3,"children":null},{"id":7,"path":"/admin/user/role","name":"Role","nameZh":"角色配置","iconCls":null,"component":"user/Role","parentId":3,"children":null}]},{"id":4,"path":"/admin","name":"Content","nameZh":"内容管理","iconCls":"el-icon-tickets","component":"AdminIndex","parentId":0,"children":[{"id":8,"path":"/admin/content/book","name":"BookManagement","nameZh":"图书管理","iconCls":null,"component":"content/BookManagement","parentId":4,"children":null},{"id":9,"path":"/admin/content/banner","name":"BannerManagement","nameZh":"广告管理","iconCls":null,"component":"content/BannerManagement","parentId":4,"children":null},{"id":10,"path":"/admin/content/article","name":"ArticleManagement","nameZh":"文章管理","iconCls":null,"component":"content/ArticleManagement","parentId":4,"children":null}]},{"id":5,"path":"/admin","name":"System","nameZh":"媒资管理","iconCls":"el-icon-s-tools","component":"AdminIndex","parentId":0,"children":[{"id":11,"path":"/admin/media/media","name":"MediaManagement","nameZh":"视频管理","iconCls":null,"component":"media/MediaManagement","parentId":5,"children":null}]}]
                    /*return data*/
                    // let fmtRoutes = formatRoutes(resp.data)
                    // this.$router.addRoutes(fmtRoutes)
                    // this.$store.commit('admin/initAdminMenu', data)
                    // _this.$store.commit('admin/login',_this.loginForm)
                }
            })
        },
        mounted(){
        },
        computed: {
            adminMenus() {
                /*let data = [];
                var temp = [];
                this.$axios.get('/menu').then(resp => {
                    if (resp && resp.status === 200) {
                        data = resp.data;
                        for(let i=0;i<data.length;i++){
                            temp.push(data[i])
                        }

                        console.log("list1: "+this.menuList)
                        return [{"id":1,"path":"/admin","name":"AdminIndex","nameZh":"首页","iconCls":"el-icon-s-home","component":"AdminIndex","parentId":0,"children":[{"id":2,"path":"/admin/dashboard","name":"DashboardAdmin","nameZh":"运行情况","iconCls":null,"component":"dashboard/admin/index","parentId":1,"children":null}]},{"id":3,"path":"/admin","name":"User","nameZh":"用户管理","iconCls":"el-icon-user","component":"AdminIndex","parentId":0,"children":[{"id":6,"path":"/admin/user/profile","name":"Profile","nameZh":"用户信息","iconCls":null,"component":"user/UserProfile","parentId":3,"children":null},{"id":7,"path":"/admin/user/role","name":"Role","nameZh":"角色配置","iconCls":null,"component":"user/Role","parentId":3,"children":null}]},{"id":4,"path":"/admin","name":"Content","nameZh":"内容管理","iconCls":"el-icon-tickets","component":"AdminIndex","parentId":0,"children":[{"id":8,"path":"/admin/content/book","name":"BookManagement","nameZh":"图书管理","iconCls":null,"component":"content/BookManagement","parentId":4,"children":null},{"id":9,"path":"/admin/content/banner","name":"BannerManagement","nameZh":"广告管理","iconCls":null,"component":"content/BannerManagement","parentId":4,"children":null},{"id":10,"path":"/admin/content/article","name":"ArticleManagement","nameZh":"文章管理","iconCls":null,"component":"content/ArticleManagement","parentId":4,"children":null}]},{"id":5,"path":"/admin","name":"System","nameZh":"媒资管理","iconCls":"el-icon-s-tools","component":"AdminIndex","parentId":0,"children":[{"id":11,"path":"/admin/media/media","name":"MediaManagement","nameZh":"视频管理","iconCls":null,"component":"media/MediaManagement","parentId":5,"children":null}]}]
                        /!*return data*!/
                        // let fmtRoutes = formatRoutes(resp.data)
                        // this.$router.addRoutes(fmtRoutes)
                        // this.$store.commit('admin/initAdminMenu', data)
                        // _this.$store.commit('admin/login',_this.loginForm)
                    }
                })*/
                // console.log(store);
                /*this.name = store.state.user.username.name
                return store.state.adminMenus*/
                // return [{"id":1,"path":"/admin","name":"AdminIndex","nameZh":"首页","iconCls":"el-icon-s-home","component":"AdminIndex","parentId":0,"children":[{"id":2,"path":"/admin/dashboard","name":"DashboardAdmin","nameZh":"运行情况","iconCls":null,"component":"dashboard/admin/index","parentId":1,"children":null}]},{"id":3,"path":"/admin","name":"User","nameZh":"用户管理","iconCls":"el-icon-user","component":"AdminIndex","parentId":0,"children":[{"id":6,"path":"/admin/user/profile","name":"Profile","nameZh":"用户信息","iconCls":null,"component":"user/UserProfile","parentId":3,"children":null},{"id":7,"path":"/admin/user/role","name":"Role","nameZh":"角色配置","iconCls":null,"component":"user/Role","parentId":3,"children":null}]},{"id":4,"path":"/admin","name":"Content","nameZh":"内容管理","iconCls":"el-icon-tickets","component":"AdminIndex","parentId":0,"children":[{"id":8,"path":"/admin/content/book","name":"BookManagement","nameZh":"图书管理","iconCls":null,"component":"content/BookManagement","parentId":4,"children":null},{"id":9,"path":"/admin/content/banner","name":"BannerManagement","nameZh":"广告管理","iconCls":null,"component":"content/BannerManagement","parentId":4,"children":null},{"id":10,"path":"/admin/content/article","name":"ArticleManagement","nameZh":"文章管理","iconCls":null,"component":"content/ArticleManagement","parentId":4,"children":null}]},{"id":5,"path":"/admin","name":"System","nameZh":"媒资管理","iconCls":"el-icon-s-tools","component":"AdminIndex","parentId":0,"children":[{"id":11,"path":"/admin/media/media","name":"MediaManagement","nameZh":"视频管理","iconCls":null,"component":"media/MediaManagement","parentId":5,"children":null}]}]
                // console.log([{"id":1,"path":"/admin","name":"AdminIndex","nameZh":"首页","iconCls":"el-icon-s-home","component":"AdminIndex","parentId":0,"children":[{"id":2,"path":"/admin/dashboard","name":"DashboardAdmin","nameZh":"运行情况","iconCls":null,"component":"dashboard/admin/index","parentId":1,"children":null}]},{"id":3,"path":"/admin","name":"User","nameZh":"用户管理","iconCls":"el-icon-user","component":"AdminIndex","parentId":0,"children":[{"id":6,"path":"/admin/user/profile","name":"Profile","nameZh":"用户信息","iconCls":null,"component":"user/UserProfile","parentId":3,"children":null},{"id":7,"path":"/admin/user/role","name":"Role","nameZh":"角色配置","iconCls":null,"component":"user/Role","parentId":3,"children":null}]},{"id":4,"path":"/admin","name":"Content","nameZh":"内容管理","iconCls":"el-icon-tickets","component":"AdminIndex","parentId":0,"children":[{"id":8,"path":"/admin/content/book","name":"BookManagement","nameZh":"图书管理","iconCls":null,"component":"content/BookManagement","parentId":4,"children":null},{"id":9,"path":"/admin/content/banner","name":"BannerManagement","nameZh":"广告管理","iconCls":null,"component":"content/BannerManagement","parentId":4,"children":null},{"id":10,"path":"/admin/content/article","name":"ArticleManagement","nameZh":"文章管理","iconCls":null,"component":"content/ArticleManagement","parentId":4,"children":null}]},{"id":5,"path":"/admin","name":"System","nameZh":"媒资管理","iconCls":"el-icon-s-tools","component":"AdminIndex","parentId":0,"children":[{"id":11,"path":"/admin/media/media","name":"MediaManagement","nameZh":"视频管理","iconCls":null,"component":"media/MediaManagement","parentId":5,"children":null}]}])
            },
            currentPath() {
                return this.$route.path
            }
        },
        methods: {
            logout() {
                var _this = this
                this.$axios.get('/logout').then(resp => {
                    if (resp && resp.status === 200) {
                        _this.$store.commit('logout')
                        _this.$router.replace('/index')
                        // 清空路由，防止路由重复加载
                        const newRouter = createRouter()
                        _this.$router.matcher = newRouter.matcher
                    }
                }).catch(failResponse => {
                })
            }
        }
    }
</script>

<style scoped>
  .el-menu-admin {
    border-radius: 5px;
    height: 100%;
  }

  .image > img {
    width: 100%;
    max-width: 45px;
    height: auto;
  }

  .img-circle {
    border-radius: 50%;
  }

</style>
