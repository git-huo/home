//axios二次封装
import axios from 'axios';
 const request =axios.create({
    baseURL:"http://liufusong.top:8080/"
 })
 //暴露
 export default request