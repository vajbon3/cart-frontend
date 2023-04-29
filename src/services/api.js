import axios from "axios";
import store from "@/store/auth";

const api = axios.create({
   baseURL: process.env.VUE_APP_API_DOMAIN,
   headers: {
       'Content-Type': 'application/json'
   }
});

api.interceptors.request.use(config => {
    const token = store.getters.getToken;

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;