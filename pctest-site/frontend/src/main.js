import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dayjs from 'dayjs';
import 'bootstrap-vue/dist/bootstrap-vue.css';
window.axios = require('axios');

const app = createApp(App);
app.use(dayjs);
app.use(router);
app.use(store);
app.mount('#app');
// app.config.globalProperties.dayjs = dayjs;
// app.config.globalProperties.axios = axios;
