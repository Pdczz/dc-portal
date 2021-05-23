export default function ({store, redirect, req, route, $axios,app:{$cookies}})  {
  $axios.defaults.baseURL = 'http://localhost:9090/api';
  // $axios.defaults.baseURL = 'http://pdczz.com/api';
  $axios.defaults.withCredentials = true;
  $axios.defaults.timeout = 6000

  //请求拦截
  $axios.onRequest(config => {
    // console.log("请求拦截");
    // config.headers.token='加token';
    // console.log(store.state)
    // console.log("cookie: "+config.headers.Cookie);
    return config;
  })
  //响应拦截
  $axios.onResponse(response => {
    return response;
  })
  //错误拦截
  $axios.onError(err =>{
    // router.replace('/login');
  })
}
