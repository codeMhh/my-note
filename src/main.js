import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'

import  * as echarts  from "echarts";

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts;
Vue.use(Antd);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
