import axios from 'axios';

import store from '../store/index';
import router from '../router/index';


axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://api.djui.cn';

axios.interceptors.request.use(
    config => {
        if (store.state.token && config.method === 'post') {
            config.headers['access-token'] = `${ store.state.token }`;
            //config.data['access-token'] = `${ store.state.token }`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });



axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 417:
                    // 401 清除token信息并跳转到登录页面
                    //store.commit(types.LOGOUT);
                    console.log(router);
                    // router.replace({
                    //     path: '/login',
                    //     query: { redirect: router.currentRoute.fullPath }
                    // })
            }
        }
        return Promise.reject(error.response.data)
    });






export default axios;