<template>
  <div class="parent">
    <h2>this is a slot component , my name is {{ name }}</h2>
    <!-- ex1 -->
    <!-- <slot> </slot> -->
    <!-- ex2 -->
    <!-- <slot name="title">Default title Content</slot>
    <slot name="paragraph">Default Main Content</slot> -->
    <form action="">
      <slot name="slot-header"></slot>
      <slot name="slot-inputs"></slot>
      <slot name="slot-actions"></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: "SlotComponent",
  props: {
    name: {
      type: String,
      required: false,
      default: "default name",
    },
  },
};
</script>
