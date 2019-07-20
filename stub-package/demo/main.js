import Vue from 'vue';
import App from './App.vue';
import { StubPackagePlugin } from "../src";

Vue.use(StubPackagePlugin);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
