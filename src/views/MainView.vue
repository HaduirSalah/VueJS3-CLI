<template>
  <div class="main">
    <h2>this is my main view page</h2>
    <MyCard />
  </div>
</template>

<script>
import MyCard from "@/components/MyCard.vue";

export default {
  name: "MainView",
  components: {
    MyCard,
  },
};
</script>
