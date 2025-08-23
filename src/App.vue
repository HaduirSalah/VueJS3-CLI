<template>
  <app-nav-bar></app-nav-bar>
  <router-view />
</template>
<script>
import AppNavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    AppNavBar,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
