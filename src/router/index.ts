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
  },
  {
    props: true,
    path: "/homework02",
    component: () => import("@/views/homework02/home.vue"),
    children: [
      {
        path: "foods",
        component: () => import("@/views/homework02/foods.vue")
      },
      {
        path: "location",
        component: () => import("@/views/homework02/location.vue")
      },
      {
        props: true,
        path: "shop/:sid",
        component: () => import("@/views/homework02/shop.vue")
      },
      {
        path: "order",
        component: () => import("@/views/homework02/order.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
