import axios from 'axios'
// import store from '@/store'
import { getToken } from '@/utils/auth'
const service=axios.create({
   baseURL: process.env.VUE_APP_BASE_API,
    timeout:5000
})
// request interceptor
service.interceptors.request.use(config=>{
    // if (store.getters.token) {
    //     // let each request carry token
    //     // ['X-Token'] is a custom headers key
    //     // please modify it according to the actual situation
    //     config.headers['X-Token'] = getToken()
    // }
    config.headers['X-Token'] = Math.random();
    return config
},error => {
    return Promise.reject(error)
})
// response interceptor
service.interceptors.response.use(response=>{
    const res = response.data;
    return res
},error => {
    return Promise.reject(error)
})

/封装get接口
// params={} 是设置默认值
export function get(url, params = {}) {
    params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
    return service({
        url: url,
        method: 'get',
        headers: {
        },
        params
    })
}

//封装post请求
export function post(url, data = {}) {
    //默认配置
    let sendObject = {
        url: url,
        method: "post",
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: data
    };
    sendObject.data = JSON.stringify(data);
    return service(sendObject)
}

export function http(url = '', data = {}, method = "GET") {
    const options = { url: url, data: data, method: method }
    return fetch(options).catch(error => {
        console.log(error)
        throw error
    })
}
export function htts(url = '', data = {}, method = "GET") {
    const options = { url: url, data: data, method: method }

}