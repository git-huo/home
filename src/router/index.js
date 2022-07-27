//配置路由
import Vue from 'vue';
//引入
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Layout from '@/views/Layout';
import Search from '@/views/Search';
import Service from '@/views/Service';
import My from '@/views/My';
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/layout'
        },
        {
            path: '/layout',
            component: Layout,
            redirect: '/layout/home',
            children: [
                {
                    path: '/layout/home',
                    component: Home
                },
                {
                    path: '/layout/search',
                    component: Search
                },
              
            ]
        },
        {
            path: '/service',
            component: Service
        },
        {
            path: '/my',
            component: My
        }
    ]
})