<template>
  <div>
    <h2>Home Page (View)</h2>
    <button @click="$router.push('/about')">Go to About Page</button>
    <button @click="$router.push({ name: 'AboutPage' })">
      <!-- Best Practice -->
      Go to About Page
    </button>

    <!-- <p>Message from Child: {{ message }}</p> -->
    <!-- استخدمنا الابن -->
    <!-- <Child @childClicked="getMessageFromChild" /> -->
    <!-- <LifeCycle /> -->
    <MyForm />
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
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyForm from "../components/MyForm.vue";
import studentsMixin from "../mixins/studentMixin.js";
export default {
  name: "HomeView",
  mixins: [studentsMixin],
  components: {
    // Child, LifeCycle,
    MyForm,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    getMessageFromChild(msg) {
      this.message = msg;
    },
  },
  mounted() {
    console.log("HomeView Mounted", this.$router);
  },
};
</script>
