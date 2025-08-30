<template>
  <h2>this is a about page</h2>
  <!-- <MyCard :students="students" /> -->
  <!-- <button @click="isActive = !isActive">Change Active</button>
  <p>User status active is: {{ isActive }}</p>
  <button @click="myArray.push('new Item')">add item</button> -->
  <!-- <provide-inject name="Hadeer Salah" /> -->
  <h1>age from parent {{ age }}</h1>
  <button @click="age++">Increase Age</button>
  <provide-inject />
</template>
<script>
// import MyCard from "@/components/MyCard.vue";
import ProvideInject from "@/components/ProvideInject.vue";
export default {
  name: "AboutPage",
  components: {
    // MyCard,
    ProvideInject,
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
      isActive: false,
      myObject: { a: 1, b: 2, c: 3 },
      myArray: [1, 2, 3, 4, 5],
      name: "Ahmed Salah",
      age: 29,
    };
  },
  methods: {
    sayHello() {
      console.log("Hello");
    },
  },
  // provide: {
  //   name: "Ahmed Salah",
  // },
  provide() {
    return {
      name: this.name,
      age: this.age,
      myFunction: this.sayHello,
    };
  },
  inject: ["emitter"],
  mounted() {
    this.emitter.on("myEvent", (data) => {
      console.log(`data from about page global event bus`, data);
    });
  },
  watch: {
    isActive(newVal, oldVal) {
      console.log(`New: ${newVal}, Old: ${oldVal}`);
    },
    myObject: {
      handler(newVal, oldVal) {
        console.log(
          `New: ${JSON.stringify(newVal)}, Old: ${JSON.stringify(oldVal)}`
        );
      },
      deep: true,
    },

    "myObject.a": function (newVal, oldVal) {
      console.log(`New a: ${newVal}, Old a: ${oldVal}`);
    },
    myArray: {
      handler(newVal, oldVal) {
        console.log(`New Array: ${newVal}, Old Array: ${oldVal}`);
      },
      deep: true,
    },
  },
};
</script>
