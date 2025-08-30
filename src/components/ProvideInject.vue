<template>
  <div class="provide-inject">
    <h1>provide inject component</h1>
    <h2>Hello {{ name }}</h2>
    <h2>Age {{ age }}</h2>
    <button @click="myFunction()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "ProvideInject",
  //   props: {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  inject: ["name", "age", "myFunction"],
};
</script>
