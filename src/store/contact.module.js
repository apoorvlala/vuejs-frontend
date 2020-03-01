import {CREATE_CONTACT_ACTION} from './actions.type'
import {SET_CREATE_CONTACT_ACTION} from './mutations.type'
import {ContactService} from '@/common/api.service'
const state ={
    contact:[]
}
const actions={
    async [CREATE_CONTACT_ACTION](context , payload){
        console.log('-------------',payload)
        const response = await ContactService.post('/api/post/contact' , payload)
        const {data} = response.data
        if(response.data !== undefined){
            return context.commit(SET_CREATE_CONTACT_ACTION , data)
        }
    }
}
const mutations = {
    [SET_CREATE_CONTACT_ACTION](state , payload){
        state.contact.push(payload)
    }
}
const getters = {
    contact(state){
        return state.contact;
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}