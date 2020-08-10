import Vue from 'vue';
import App from './app.vue'
import VueRouter from 'vue-router';
import Routers from './router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VueRouter)
Vue.use(ViewUI)

const router = new VueRouter({routes:Routers})
new Vue({
    el:"#app",
    router:router,
    render:h => h(App)
})
