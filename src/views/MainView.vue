<template>
  <div class="main">
    <h2>this is my main view page</h2>
    <MyCard :students="students" />
  </div>
</template>

<script>
import MyCard from "@/components/MyCard.vue";

export default {
  name: "MainView",
  data() {
    return {
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
    };
  },
  components: {
    MyCard,
  },
};
</script>
