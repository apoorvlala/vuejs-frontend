import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes :[
        {
            path:'/',
            component:()=> import('@/components/Home'),
            name:'home'
        },
        {
            path:'/blog',
            component:()=> import('@/components/Blog'),
            name:'blog'
        },
        {
            path:'/slug',
            name:'page',
            component :()=>import('@/components/Page')
        },
        {
            path:'/contact',
            name:'contact',
            component :()=>import('@/components/Contact')
        },
        {
            path:'/addblog',
            name:'addblog',
            component:()=>import('@/components/AddBlog')
        }
    ]    
})