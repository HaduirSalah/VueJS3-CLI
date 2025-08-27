import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import AboutPage from "@/views/AboutPage.vue";
import HomePage from "@/views/HomeView.vue";

const routes = [
  {
    name: "MainView",
    path: "/",
    component: MainView,
    meta: {
      title: "Main",
      description: "This is main page",
    },
  },
  {
    name: "AboutPage",
    path: "/about",
    component: AboutPage,
    meta: {
      title: "About Us",
      description: "This is about us page",
    },
  },
  {
    name: "HomePage",
    path: "/home",
    component: HomePage,
    meta: {
      title: "Home",
      description: "This is home page",
    },
  },
  {
    name: "StudentsView",
    path: "/students",
    component: () => import("@/views/StudentsView.vue"),
    meta: {
      title: "Students",
      description: "This is students page",
    },
  },
  {
    name: "ComponentsView",
    path: "/computed",
    component: () => import("@/views/ComputedView.vue"),
    meta: {
      title: "Computed",
      description: "This is computed page",
    },
  },
  {
    name: "ProfileView",
    path: "/profile",
    component: () => import("@/views/ProfileView.vue"),
    meta: {
      title: "Profile",
      description: "This is profile page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  // createWebHashHistory(),
  routes,
});

export default router;
