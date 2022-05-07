import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/table",
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/Table.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue"),
  },
  {
    path: "/food",
    name: "Food",
    component: () => import("../views/Food.vue"),
  },
  {
    path: "/employee",
    name: "Employee",
    component: () => import("../views/Employee.vue"),
  },
  {
    path: "/statistic",
    name: "Statistic",
    component: () => import("../views/Statistic.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
