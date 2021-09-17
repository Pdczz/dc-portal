export default ({app,redirect,params,query,store})=>{
  app.router.beforeEach((to,from,next)=>{
    // console.log("插件配置，全局守卫")


    let sessionId = store.state.admin.jid;
    // console.log("sessionId: " +sessionId);
    if (to.path.startsWith('/admin') && sessionId =='' ){
      console.log("进到导航守卫里的jid"+sessionId)
      redirect('/login')
    }else {
      next()
   }
    next()
  })

}
