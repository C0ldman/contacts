import Vue from 'vue'
import VueRouter from 'vue-router'
import UserInfo from "@/components/userInfo";

Vue.use(VueRouter)

const routes = [
    {
      path: '/user/:id',
        name: 'UserInfo',
        component: UserInfo
    },
]

const router = new VueRouter({
    routes
})

export default router
