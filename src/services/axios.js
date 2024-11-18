import axios from "axios";
import Cookies from "js-cookie";

const axiosRequest = axios.create({
  baseURL: process.env.REACT_APP_DEV_API_URL
});


axiosRequest.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
}, (err) => {
  return Promise.reject(err)
})


export default axiosRequest;