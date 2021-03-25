import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    component: () => import("@/views/example01/example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/example02.vue")
  },
  {
    path: "/example03",
    component: () => import("@/views/example03/example03.vue")
  },
  {
    path: "/homework01",
    component: () => import("@/views/homework01/homework01.vue")
  },
  {
    path: "/example04",
    component: () => import("@/views/example04/example04.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
