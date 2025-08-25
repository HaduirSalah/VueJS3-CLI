<template>
  <div class="computed">
    <h1>Computed Properties</h1>
    <h3>Full Name: {{ fullName }}</h3>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <h3>Original Array: {{ myArr }}</h3>
    <h3>Calculated Array: {{ calculatedArr }}</h3>
    <h3>Calculated Number: {{ calcNum }}</h3>

    <div class="students-view" v-if="studentsList.length > 0">
      <h3>Old Students (age >= 20):</h3>
      <ul>
        <li v-for="(student, i) in getOldStudents" :key="i">
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
    <div class="students-view" v-if="studentsList.length > 0">
      <h3>Students With Search :</h3>
      <input type="search" v-model="searchTerm" name="search" id="search" />
      <ul>
        <li v-for="(student, i) in searchedStudents" :key="i">
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
import studentMixin from "../mixins/studentMixin.js";
export default {
  name: "ComputedView",
  mixins: [studentMixin],
  data() {
    return {
      firstName: "Hadui",
      lastName: "Zhang",
      myArr: [1, 2, 3, 4, 5],
      searchTerm: "",
    };
  },
  computed: {
    fullName() {
      console.log("Full Name is being evaluated...");
      return `${this.firstName} ${this.lastName}`;
    },
    calculatedArr() {
      return this.myArr.map((num) => num * 2);
    },
    calcNum() {
      return this.myArr.reduce((acc, cur) => acc + cur, 0);
    },
    getOldStudents() {
      return this.studentsList.filter((s) => s.age >= 14);
    },
    searchedStudents() {
      return this.studentsList.filter((s) =>
        s.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
};
</script>
