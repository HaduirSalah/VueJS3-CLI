<template>
  <div>
    <button @click="notifyParent">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  methods: {
    notifyParent() {
      // ابعت event للأب
      this.$emit("childClicked", "Hello Parent, I’m Child 👋");
    },
  },
};
</script>
