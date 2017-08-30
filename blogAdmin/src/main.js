// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

import axios from './fetch/axios';

import store from './store/index';

Vue.use(ElementUI);
Vue.prototype.axios = axios;



/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})