<template>
  <div class="main">
    <h2>this is my main view page</h2>
    <MyCard
      :students="students"
      :isActive="isActive"
      @updateActive="changeActive"
    />
    <MyCard
      :students="students"
      :isActive="isActive"
      @updateActive="changeActive"
    />
  </div>
</template>

<script>
import MyCard from "@/components/MyCard.vue";

export default {
  name: "MainView",
  data() {
    return {
      // Reference Data type is Array or object
      // Primitive Data type is boolean or number or string
      students: [
        {
          id: 1,
          img: require("@/assets/boy.jpg"),
          name: "Alice Johnson",
          age: 22,
          department: "Computer Science",
        },
        {
          id: 2,
          img: require("@/assets/boy.jpg"),
          name: "Bob Smith",
          age: 24,
          department: "Mathematics",
        },
        {
          id: 3,
          img: require("@/assets/girl.jpg"),
          name: "Charlie Brown",
          age: 21,
          department: "Physics",
        },
      ],
      isActive: true,
    };
  },
  components: {
    MyCard,
  },
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
