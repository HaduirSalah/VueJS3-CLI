<template>
  <div>
    <h2>Home Page (View)</h2>
    <p>Message from Child: {{ message }}</p>
    <!-- استخدمنا الابن -->
    <Child @childClicked="getMessageFromChild" />
    <LifeCycle />
  </div>
</template>

<script>
import Child from "../components/Child.vue";
import LifeCycle from "../components/LifeCycle.vue";
export default {
  name: "HomeView",
  components: { Child, LifeCycle },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    getMessageFromChild(msg) {
      this.message = msg;
    },
  },
};
</script>
