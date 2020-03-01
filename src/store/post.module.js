import {PostService} from '@/common/api.service';
import {FETCH_POST_ACTION , CREATE_POST_ACTION} from './actions.type';
import {SET_POST_ACTION , SET_CREATE_POST_ACTION} from './mutations.type';
const state = {
    posts :[]
}
const actions = {
    async [FETCH_POST_ACTION](context){
        const response = await PostService.get(`/api/posts`);        
        const {data} = response.data;             
        if(response.data !== undefined){
            return context.commit(SET_POST_ACTION , data)
        }        
    },
    async [CREATE_POST_ACTION](context , payload){        
        const response = await PostService.post('/api/post',payload)
        const {data} =  response.data;
        if(data !== undefined){
            return context.commit(SET_CREATE_POST_ACTION, data)
        }
    }
}
const mutations = {
    [SET_POST_ACTION](state , payload){        
        state.posts=payload;               
    },
    [SET_CREATE_POST_ACTION](state , payload){
        state.posts.push(payload)
    }
}
const getters = {
    posts(state){        
        return state.posts;
    }
}

export default {
    state ,
    actions ,
    mutations,
    getters
}