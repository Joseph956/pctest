import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import VueEditor from 'vue2-editor';
// import Vue from 'vue';

// Vue.use(VueEditor);

// Vue.config.productionTip = false;

const app = createApp(App).use(router);
app.use(store);
app.mount('#app');
