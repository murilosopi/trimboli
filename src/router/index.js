import Vue from "vue";
import VueRouter from "vue-router";
import AboutView from "../views/AboutView/AboutViewMain.vue";
import SecuritizationView from "../views/SecuritizationView/SecuritizationViewMain.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/quem-somos" },
  {
    path: "/quem-somos",
    name: "about",
    component: AboutView,
  },
  {
    path: "/securitizacao",
    name: "securitization",
    component: SecuritizationView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
