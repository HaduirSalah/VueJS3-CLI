import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "@/views/MainView.vue";

const routes = [
  {
    name: "MainView",
    path: "/",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
