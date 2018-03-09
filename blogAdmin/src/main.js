

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import {
    Menu,
    Form,
    Option,
    Table,
    TableColumn,
    Pagination,
    FormItem,
    Input,
    Button,
    Submenu,
    MenuItem,
    Icon,
    Select,
    CheckboxGroup,
    Checkbox
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
Vue.use(MenuItem);
Vue.use(TableColumn);
Vue.use(Icon);
Vue.use(Select);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.prototype.axios = axios;




new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {
        App
    }
})
