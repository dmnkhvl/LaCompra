import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import MyLists from "../views/MyLists.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/lists",
  },
  {
    path: "/lists",
    name: "Lists",
    component: MyLists,
  },
  {
    path: "/list/:id",
    name: 'list-detail',
    component: () => import("../views/DetailList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
