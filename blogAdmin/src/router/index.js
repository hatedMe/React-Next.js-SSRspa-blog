import Vue from 'vue'
import Router from 'vue-router'


// import Login from '@/views/Login' //登录
// import Editor from '@/views/Article/Editor'; //文章编辑
// import Index from '@/views/Index'
// import Navbar from '@/components/Navbar';
// import Test from '@/views/test'
// import ArticleList from '@/views/Article/List'



const Login = r => require.ensure([], () => r(require('@/views/Login')) , 'Login');
const Editor = r => require.ensure([], () => r(require('@/views/Article/Editor')), 'Editor')
const Index = r => require.ensure([], () => r(require('@/views/Index')), 'Index')
const Navbar = r => require.ensure([], () => r(require('@/components/Navbar')), 'Navbar')
const Test = r => require.ensure([], () => r(require('@/views/test')), 'Test')
const ArticleList = r => require.ensure([], () => r(require('@/views/Article/List')), 'ArticleList')


import store from '@/store/index';







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
            path: 'articleList',
            component: ArticleList,
            name: '文章列表'
        }, {
            path: 'editor',
            name: '文章编辑',
            component: Editor
        },{
            path: 'revisearticle',
            name: '文章修改',
            component: Editor
        }]
    },{
        path: '/test',
        name: 'Test',
        component: Test
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