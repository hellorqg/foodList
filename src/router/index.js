import Vue from "vue"
import VueRouter from "vue-router"


import foodList from "../views/foodList.vue"
import messages from "../components/messages.vue"
import city from "../components/city.vue"
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            path: "/",
            redirect: "/foodlist",
        },
        // 美食列表
        {
            path: "/foodlist",
            component: foodList
        },
        // 城市列表
        {
            path: "/city",
            component: city
        },
        // 评论列表
        {
            path: "/messages",
            component: messages
        }
    ]



})