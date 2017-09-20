import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/views/Login' //登录
import Editor from '../views/Article/Editor'; //文章编辑
import Index from '@/views/Index'
import Navbar from '../components/Navbar';



import store from '../store/index';







Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        }
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/articlemanagement',
        name: '文章管理',
        component: Navbar,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [{
            path: 'index',
            component: Login,
            name: '介绍 '
        }, {
            path: 'editor',
            name: '文章编辑',
            component: Editor
        },{
            path: 'revisearticle',
            name: '文章修改',
            component: Editor
        }]
    }]
})

if (window.localStorage.getItem('token')) {
    store.commit('loginIn', window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/login',
            })
        }
    } else {
        next();
    }
});

export default router;