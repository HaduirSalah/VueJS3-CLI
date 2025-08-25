<template>
  <div>
    <h2>Home Page (View)</h2>
    <!-- <p>Message from Child: {{ message }}</p> -->
    <!-- استخدمنا الابن -->
    <!-- <Child @childClicked="getMessageFromChild" /> -->
    <!-- <LifeCycle /> -->
    <MyForm />
  </div>
</template>

<script>
import MyForm from "../components/MyForm.vue";
export default {
  name: "HomeView",
  components: {
    // Child, LifeCycle,
    MyForm,
  },
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
