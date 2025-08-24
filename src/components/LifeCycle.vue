<template>
  <div class="life">
    <h2>hi this is life cycle Hooks component</h2>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <!-- <button v-on:click="age++">Increase Age</button> -->
    <button @click="age++">Increase Age</button>
  </div>
</template>
<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "Ahmed Salah",
      age: 29,
    };
  },
  beforeCreate() {
    alert("before Create Hook");
  },
  created() {
    alert("created Hook");
  },
  beforeMount() {
    alert("before Mount Hook");
  },
  mounted() {
    alert("mounted Hook");
  },
  beforeUpdate() {
    alert("before Update Hook");
  },
  updated() {
    alert("updated Hook");
  },
  beforeUnmount() {
    alert("before Unmount Hook");
  },
  unmounted() {
    alert("unmounted Hook");
  },
};
</script>
