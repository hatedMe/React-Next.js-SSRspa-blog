// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import { Menu , Form , Option ,Table,
    TableColumn,Pagination,FormItem,Input,Button,Submenu,MenuItem,Icon ,Select ,CheckboxGroup
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import axios from './fetch/axios';

import store from './store/index';

Vue.use(Menu);
Vue.use(Form);
Vue.use(Pagination);
Vue.use(Option);
Vue.use(Table);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Submenu);
Vue.use( MenuItem );
Vue.use(TableColumn);
Vue.use(Icon);
Vue.use(Select);
Vue.use(CheckboxGroup);

Vue.prototype.axios = axios;



/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})