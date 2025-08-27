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
    meta: {
      title: "About Us",
      description: "This is about us page",
      age: 30,
    },
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
  {
    name: "ComponentsView",
    path: "/computed",
    component: () => import("@/views/ComputedView.vue"),
  },
  {
    name: "ProfileView",
    path: "/profile",
    component: () => import("@/views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
