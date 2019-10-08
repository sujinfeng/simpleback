// http.js
import axios from 'axios'
import qs from 'qs'

import store from './store'
import router from './router'

// 响应时间
axios.defaults.timeout = 5000;

// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'https://www.baidu.com';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = 'https://www.ceshi.com';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'https://www.production.com';
// }
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
console.log(axios.defaults.baseURL)
console.log(axios.defaults)

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {

    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.token;
    token && (config.headers.Authorization = token);

    // 在发送请求之前做某件事
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    console.log('错误的传参')
    return Promise.reject(error);
});

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {

    // 对响应数据做些事
    if (!res.data.success) {
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
    case 401 :

    // 返回 401 清除token信息并跳转到登录页面
    store.commit('del_token');
      router.replace({
        path: 'login',
        query: {
          redirect: router.currentRoute.fullPath
        }// 登录成功后跳入浏览的当前页面
      })
    }
  }

  // 返回接口返回的错误信息
  return Promise.reject(error.response.data)
});

// 返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

// 返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: param
      }).then(response => {
        resolve(response)
      }, err => {
        reject(err)
      }).catch((error) => {
        reject(error)
      })
    })
}
export default {
    fetchPost,
    fetchGet
}
