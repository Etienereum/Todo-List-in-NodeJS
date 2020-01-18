/*
  We imported BoostrapVue and other libraries needed by the application.We 
  also imported App component and defined it as a component on the root instance.

  We imported axios, an http client and we configured the base url of the 
  backend application. You should ensure the baseUrl matches your backend URL.
*/
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import App from './App.vue';

const http = axios.create({
  baseURL: process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost/todos',
});

Vue.prototype.$http = http;

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
