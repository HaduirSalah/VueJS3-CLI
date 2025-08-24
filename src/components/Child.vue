<template>
  <div>
    <button @click="$emit('childClicked', 'Hello Parent, I’m Child 👋')">
      Click Me
    </button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  emits: ["childClicked"],
  methods: {},
};
</script>
