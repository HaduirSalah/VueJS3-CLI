<template>
  <div class="students" v-containerWidth="50">
    <h2 v-maxSize="30" v-theme="'light'" v-changeColor="'green'">
      Students Form
    </h2>
    <form @submit.prevent="addStudent()">
      <div class="name">
        <label for="name">Name:</label>
        <input type="text" v-model="student.name" name="name" id="name" />
        <!-- <p>Name is: {{ student.name }}</p> -->
      </div>
      <div class="age">
        <label for="age">Age:</label>
        <input type="number" v-model="student.age" name="age" id="age" />
        <!-- <p>Age is: {{ student.age }}</p> -->
      </div>

      <div class="select-options">
        <label for="Grade">Grade:</label>
        <select v-model="student.grade" name="Grade" id="Grade">
          <option value="Grade One">Grade One</option>
          <option value="Grade Two">Grade Two</option>
          <option value="Grade Three">Grade Three</option>
        </select>
        <!-- <p>Grade is: {{ student.grade }}</p> -->
      </div>

      <div class="radio">
        <strong>Gender: </strong>
        <input
          type="radio"
          name="Female"
          value="Female"
          id="Female"
          v-model="student.gender"
        />
        <label for="Female"> Female </label>
        <input
          type="radio"
          name="male"
          value="male"
          id="male"
          v-model="student.gender"
        />
        <label for="male"> male </label>
        <!-- <p>Gender is: {{ student.gender }}</p> -->
      </div>
      <div class="fav-sports">
        <strong>Favorite Sports: </strong>
        <input type="text" id="sport" v-model="sport" />
        <button @click.prevent="addSport">Add Sport</button>
        <p>Favorite Sports are: {{ student.favouritSports }}</p>
      </div>
      <input type="submit" value="Submit" />
      <div class="update-student">
        <h3>Update Student</h3>
        <div class="name">
          <label for="name">Name:</label>
          <input type="text" v-model="changeName" name="name" id="name" />
        </div>
        <div class="age">
          <label for="age">Age:</label>
          <input type="number" v-model="changeAge" name="age" id="age" />
        </div>
        <div class="id">
          <label for="id">id:</label>
          <input type="number" v-model="changeId" name="id" id="id" />
        </div>
        <button @click="updateStudent">Update Student</button>
      </div>
    </form>
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
          <button @click="deleteStudent(student.id)">Delete Student</button>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentsView",
  directives: {
    containerWidth(el, order) {
      el.style.width = order.value + "%";
      el.style.margin = "0 auto";
    },
  },
  data() {
    return {
      sport: "",
      student: {
        name: "",
        age: null,
        grade: "",
        gender: "",
        favouritSports: [],
      },
      studentsList: [],
      changeAge: "",
      changeName: "",
      changeId: "",
    };
  },
  methods: {
    addSport() {
      if (this.sport.trim() !== "") {
        this.student.favouritSports.push(this.sport.trim());
        this.sport = "";
      }
    },
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.studentsList = data;
        });
    },
    async addStudent() {
      const requestData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.student),
      };
      await fetch(
        "https://course-backend.onrender.com/add-student",
        requestData
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.studentsList = data;
          this.getStudents();
        });
    },

    async updateStudent() {
      if (!this.changeId || !this.changeName || !this.changeAge) {
        alert("Please fill in all fields to update a student.");
        return;
      }
      const requestData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.changeName,
          age: this.changeAge,
        }),
      };
      await fetch(
        `https://course-backend.onrender.com/update-student/${this.changeId}`,
        requestData
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.studentsList = data;
          this.getStudents();
        });
    },

    async deleteStudent(id) {
      const requestData = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      await fetch(
        `https://course-backend.onrender.com/delete-student/${id}`,
        requestData
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.studentsList = data;
          this.getStudents();
        });
    },
  },
  async mounted() {
    await this.getStudents();
  },
};
</script>
