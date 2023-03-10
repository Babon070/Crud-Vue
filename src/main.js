import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router/router';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Vue from 'vue'
import Vuelidate from 'vuelidate'
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
app.use(Vue);
app.use(Vuelidate);

