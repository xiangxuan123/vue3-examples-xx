import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    component: () => import("@/views/example01/example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/example02.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
