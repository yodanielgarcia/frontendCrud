import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/createUser.vue"),
  },
  {
    path: "/CreateUser",
    name: "CreateUser",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/createUser.vue"),
  },
  {
    path: "/ListUser",
    name: "ListUser",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListUser.vue"),
  },
  {
    path: "/team/:teamId",
    name: "team",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/team.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
