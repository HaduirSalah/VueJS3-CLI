import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");

vueApp.directive("maxSize", (el, order) => {
  el.style.fontSize = order.value + "px";
});

vueApp.directive("theme", (el, order) => {
  if (order.value === "dark") {
    el.style.backgroundColor = "#333";
    el.style.color = "#fff";
  } else if (order.value === "light") {
    el.style.backgroundColor = "#fff";
    el.style.color = "#000";
  }
});

vueApp.directive("changeColor", (el, order) => {
  el.style.color = order.value;
});
