import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers/routers';
import Vue3Marquee from 'vue3-marquee';
const app = createApp(App);
app.use(Vue3Marquee);
app.use(router);
app.mount('#app');
