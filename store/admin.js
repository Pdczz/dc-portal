export const state = () => ({
  user:{
    username: '',
    name:''
  },
  jid:''
})
export const mutations ={
  login(admin,playload){
    admin.user.username = playload.username
    admin.user.name = playload.name
  },
  setId(admin,playload){
    admin.jid = playload
  },
}
