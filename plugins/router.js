/*
export default ({app,redirect,params,query,store})=>{
  app.router.beforeEach((to,from,next)=>{
    console.log("插件配置，全局守卫")


    if (to.path.startsWith('/admin') && store.state.admin.jid==''){
      console.log("进到导航守卫里的jid"+store.state.admin.jid)
      redirect('/login')
    }else {
      next()
   }
    next()
  })

}
*/
