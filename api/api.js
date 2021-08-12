import http from "./http";

//首屏获取文章列表，分页查询
export const getArticleList = (pid) =>{
  return http.requestGet('/page',pid);
}
export const getArticleList2 = (pid) =>{
  return http.requestGet('/article',pid);
}


//例如：post请求
export const addLink = (link) =>{
  return http.requestPost('/user/addlink/',link);
}

//例如：put请求
export const updateLink = (link) =>{
  return http.requestPut('/user/updateLink/',link);
}

//例如：delete请求
export const deleteLink = (linkId) =>{
  return http.requestDelete('/user/link/'+linkId);
}
