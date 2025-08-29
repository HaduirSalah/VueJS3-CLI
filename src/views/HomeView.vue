<template>
  <div>
    <h2>Home Page (View)</h2>
    <!-- <button @click="routerFunction()">Go to About Page</button>
    <button @click="routerFunction">Go to About Page</button> -->
    <!-- Best Practice -->
    <!-- <button @click="$router.push({ name: 'AboutPage' })">
      Go to About Page
    </button> -->

    <!-- <p>Message from Child: {{ message }}</p> -->
    <!-- استخدمنا الابن -->
    <!-- <Child @childClicked="getMessageFromChild" /> -->
    <!-- <LifeCycle /> -->
    <!-- <MyForm /> -->
    <div class="students-view" v-if="studentsList.length > 0">
      <h3>Students</h3>
      <ul>
        <li v-for="(student, i) in studentsList" :key="i">
          <p>Name: {{ student.name }}</p>
          <p>Gender: {{ student.gender }}</p>
          <p>Age: {{ student.age }}</p>
          <p>Grade: {{ student.grade }}</p>
          <p>
            Sports:
            <!-- <span v-if="student.sports.football"> Football </span>
            <br />
            <span v-if="student.sports.basketball"> Basketball </span>
            <br />
            <span v-if="student.sports.tennis"> Tennis </span> -->
            <strong>
              <span v-for="(sport, i) in student.favouritSports" :key="i">
                <span> {{ sport }} <br /></span>
              </span>
            </strong>
          </p>
          <button
            v-on:click="
              goToProfile(
                'ProfileView',
                student.id,
                student.name,
                student.age,
                student.gender,
                student.grade
              )
            "
          >
            View Profile
          </button>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import MyForm from "../components/MyForm.vue";
import studentsMixin from "../mixins/studentMixin.js";
export default {
  name: "HomeView",
  mixins: [studentsMixin],
  components: {
    // Child, LifeCycle,
    // MyForm,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    goToProfile(viewName, id, userName, age, gender, grade) {
      this.$router.push({
        name: viewName,
        params: { userId: id, userName: userName },
        query: {
          age: age,
          gender: gender,
          grade: grade,
        },
      });
    },
    getMessageFromChild(msg) {
      this.message = msg;
    },
    routerFunction() {
      // this.$router.push("/about");
      // this.$router.push({ name: "AboutPage" });
      // this.$router.go(-1); // -1 back , 1 forward
      this.$router.replace({ name: "AboutPage" });
    },
  },
  mounted() {
    // console.log("HomeView Mounted", this.$router.hasRoute("aboutPage")); // Output: false
    // if (this.$router.hasRoute("AboutPage")) {
    //   console.log("Route Exists"); // Output: Route Exists
    // } else {
    //   console.log("Route Not Exists");
    // }
    console.log(this.$route);
    console.log(this.$route.name);
    console.log(this.$router);
    if (this.$router.hasRoute(this.$route.name)) {
      console.log("Route Exists"); // Output: Route Exists
    } else {
      console.log("Route Not Exists");
    }
  },
};
</script>
