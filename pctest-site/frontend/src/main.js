import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap-vue/dist/bootstrap-vue.css';
window.axios = require('axios');

const app = createApp(App).use(router);
app.use(store);
app.mount('#app');
