





import axios from 'axios';



axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://api.djui.cn';

// axios.interceptors.request.use(
//     config => {
//         if (store.state.token && config.method === 'post') {
//             config.headers['access-token'] = `${ store.state.token }`;
//             //config.data['access-token'] = `${ store.state.token }`;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });



// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
           
//         }
//         return Promise.reject(error.response.data)
//     });






export default axios;