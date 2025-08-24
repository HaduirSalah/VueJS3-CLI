<template>
  <div>
    <h2>Home Page (View)</h2>
    <p>Message from Child: {{ message }}</p>
    <!-- استخدمنا الابن -->
    <Child @childClicked="getMessageFromChild" />
  </div>
</template>

<script>
import Child from "../components/Child.vue";
export default {
  name: "HomeView",
  components: { Child },
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
