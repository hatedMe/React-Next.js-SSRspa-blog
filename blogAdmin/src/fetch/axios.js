import axios from 'axios';

import store from '../store/index';
import router from '../router/index';

axios.interceptors.request.use(
    config => {
        if (store.state.token && config.method === 'post') {
            config.headers['access_token'] = `${ store.state.token }`;
            config.data.access_token = `${ store.state.token }`;
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
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    //store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
            }
        }
        return Promise.reject(error.response.data)
    });






export default axios;