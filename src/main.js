import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false

import "./../node_modules/bootstrap/dist/css/bootstrap.css"; // 引入 bootstarp的样式文件
import "../css/index.css" // 引入index.css
// 引入axios
import axios from "axios"
// 设置axios的统一路径
axios.defaults.baseURL = "http://localhost:3000"
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')