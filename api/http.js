import axios from 'axios';
//import router from '../router';

axios.defaults.baseURL = 'http://localhost:9090/api';
// $axios.defaults.baseURL = 'http://pdczz.com/api';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 6000

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export default {
  //get请求
  requestGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      //params要加大括号在外边axios.get('/user', {
      //     params: {
      //       ID: 12345
      //     }
      //   })
       axios.get(url, params).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error)
      })
    })
  },

  //post请求
  requestPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error)
      })
    })
  },

  //delete请求
  requestDelete(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error)
      })
    })
  },

  //put请求
  requestPut(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, params).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error)
      })
    })
  },
}
