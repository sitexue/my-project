import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui';


var Axios = axios.create({
    baseURL: '/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  Message(error)
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.returnCode != '200') {//没有返回成功
    Message(response.data.msg);
  }
  if (response.data.returnCode != '401') {//返回登录失败
    Message(response.data.msg);
    setTimeout(() => {
        router.push('login')
    }, 2000);
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  Message(error)
  return Promise.reject(error);
});

export default{
    plugin:{ //全局注册
        install: function (Vue) {
            Object.defineProperty(Vue.prototype, '$ajax', {
              value: Axios
            })
        }
    },
    ajax: Axios //单独调用
}
