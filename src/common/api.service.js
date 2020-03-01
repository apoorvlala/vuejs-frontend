import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {API_URL} from '@/common/config';

const ApiService = {
    init(){
        Vue.use(VueAxios ,axios);
        Vue.axios.defaults.baseURL = API_URL;
    },
    get(resource){
        console.log(resource)
        return Vue.axios.get(`${resource}`).catch((error)=>{
            throw new Error(`API Service ${error}`)
        })
    },
    post(resource , params){
        return Vue.axios.post(`${resource}`,params)
    }
}
export default ApiService;

export const PostService = {
    get(resource){
        return ApiService.get(resource);
    },
    post(resource , payload){
        console.log(resource , payload)
        return ApiService.post(resource , payload);
    }
}

export const ContactService = {
    post(resource , payload){
        return ApiService.post(resource , payload)
    }
}