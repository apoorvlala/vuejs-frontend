import Vue from 'vue'
import Vuex from 'vuex'
import post from './post.module'
import contact from './contact.module'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        post,
        contact        
    }
});