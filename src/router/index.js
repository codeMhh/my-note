import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('@/components/HelloWorld')
    },
    {
        path: '/word',
        name: '在线word',
        component: () => import('@/components/WordPreview')
    },
    {
        path: '/map',
        name: '地图',
        component: () => import('@/components/GuangdongMap')
    },
    {
        path: '/map-in',
        name: '下钻地图',
        component: () => import('@/components/GuangdongMapIn')
    }
]

export default new VueRouter({
    routes
})