import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import AboutPage from "@/views/AboutPage.vue";
import HomePage from "@/views/HomeView.vue";

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
  {
    name: "HomePage",
    path: "/home",
    component: HomePage,
  },
  {
    name: "StudentsView",
    path: "/students",
    component: () => import("@/views/StudentsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
