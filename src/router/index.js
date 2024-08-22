import Vue from "vue";
import VueRouter from "vue-router";
import AboutView from "../views/AboutView/AboutViewMain.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/quem-somos" },
  {
    path: "/quem-somos",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
