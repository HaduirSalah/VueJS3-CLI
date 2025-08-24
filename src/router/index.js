import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    name: "MainView",
    path: "/",
    component: MainView,
  },
  {
    name: "AboutPage",
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
