<template>
  <h2>this is a about page</h2>
  <MyCard :students="students" />
</template>
<script>
import MyCard from "@/components/MyCard.vue";
export default {
  name: "AboutPage",
  components: {
    MyCard,
  },
  data() {
    return {
      students: [
        {
          id: 1,
          name: "Hadeer Salah",
          age: 26,
          department: "CS",
          img: require("@/assets/boy.jpg"),
        },
        {
          id: 2,
          name: "Ahmed Salah",
          age: 29,
          department: "IT",
          img: require("@/assets/boy.jpg"),
        },
        {
          id: 3,
          name: "Hadeer Salah",
          age: 26,
          department: "CS",
          img: require("@/assets/girl.jpg"),
        },
        {
          id: 4,
          name: "Ahmed Salah",
          age: 29,
          department: "IT",
          img: require("@/assets/boy.jpg"),
        },
      ],
    };
  },
};
</script>
