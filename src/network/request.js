import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instancel = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })

    //2.拦截器
    // 2.1 请求拦截 axios.interceptors
    instancel.interceptors.request.use(config =>{
        //请求成功
            return config
    },err =>{
         //请求失败
         console.log(err);
         
    })

    // 2.2响应拦截
    instancel.interceptors.response.use(res =>{
        return res.data
    },err =>{ 
        console.log(err);
        
    })

    //3.发送真正的网络请求
   return instancel(config)
    
}



