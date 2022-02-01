import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import "windi.css";
import Home from "@/views/Home.vue";
import ProductDetail from "@/views/ProductDetail.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/product-detail",
        component: ProductDetail,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

createApp(App).use(router).mount("#app");
