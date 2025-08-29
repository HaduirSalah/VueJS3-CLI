import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import AboutPage from "@/views/AboutPage.vue";
import HomePage from "@/views/HomeView.vue";
import myLearnings from "@/views/MyLearnings.vue";
import myWishlist from "@/views/MyWishlist.vue";

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
    path: "/profile/:userId/:userName",
    component: () => import("@/views/ProfileView.vue"),
    meta: {
      title: "Profile",
      description: "This is profile page",
    },
    children: [
      {
        name: "MyLearnings",
        path: "learnings",
        component: myLearnings,
        meta: {
          title: "My Learnings",
          description: "This is my learnings page",
        },
      },
      {
        name: "MyWishlist",
        path: "wishlist",
        component: myWishlist,
        meta: {
          title: "My Wishlist",
          description: "This is my wishlist page",
        },
      },
    ],
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "404 Not Found",
      description: "This is 404 not found page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  // createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log("to beforeEach", to);
  // console.log("from beforeEach", from);
  // if (to.name === "ProfileView") {
  //   return next("/home");
  // }
  document.title = to.meta.title;
  next();
});
router.afterEach((to, from) => {
  console.log("to afterEach", to);
  console.log("from afterEach", from);
});

export default router;
