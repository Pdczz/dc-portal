export const actions = {
  nuxtServerInit(store,{app:{$cookies}}){

    let jsessionid = $cookies.get('JSESSIONID');
    console.log("jessionId"+jsessionid)
    // let user = store.state.admin.user
    store.commit('admin/setId',jsessionid)
  }
}
