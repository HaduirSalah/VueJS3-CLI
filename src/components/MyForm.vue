<template>
  <div>
    <h2>My Form</h2>
    <form @submit.prevent="addStudent()">
      <div>
        <label for="userName">userName:</label>
        <input
          type="text"
          v-model.lazy="student.userName"
          id="userName"
          required
        />
        <p>userName is: {{ student.name }}</p>
      </div>
      <div>
        <label for="lastName">lastName:</label>
        <input
          type="text"
          v-model.lazy="student.lastName"
          id="lastName"
          required
        />
        <p>lastName is: {{ student.lastName }}</p>
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="age" v-model.lazy="student.age" id="age" />
        <p>Age is: {{ student.age }}</p>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model.lazy="student.email" id="email" />
        <p>Email is: {{ student.email }}</p>
      </div>
      <div class="checkboxes">
        <input
          type="checkbox"
          v-model.lazy="student.sports.football"
          id="football"
        />
        <label for="football"> Football </label>

        <input
          type="checkbox"
          v-model.lazy="student.sports.basketball"
          id="basketball"
        />
        <label for="basketball"> basketball </label>
        <input
          type="checkbox"
          v-model.lazy="student.sports.tennis"
          id="tennis"
        />
        <label for="tennis"> Tennis </label>
        <p>
          Sports:
          <span v-if="student.sports.football"> Football </span>
          <span v-if="student.sports.basketball"> Basketball </span>
          <span v-if="student.sports.tennis"> Tennis </span>
        </p>
      </div>

      <div class="radio">
        <input
          type="radio"
          v-model.lazy="student.gender"
          id=""
          value="Female"
        />
        <label for="Female"> Female </label>
        <input type="radio" v-model.lazy="student.gender" id="" value="male" />
        <label for="male"> male </label>
        <p>Gender is: {{ student.gender }}</p>
      </div>
      <div class="mb-3">
        <label for="city" class="form-label">City: </label>
        <select
          class="form-select form-select-lg"
          name="city"
          id="city"
          v-model.lazy="student.city"
        >
          <option value="NewDelhi">New Delhi</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Jakarta">Jakarta</option>
        </select>
        <p>City is: {{ student.city }}</p>
      </div>
      <div class="text-area">
        <label for="textArea">Bio: </label>
        <textarea
          name="textArea"
          id="textArea"
          cols="30"
          rows="10"
          v-model.lazy="student.bio"
        ></textarea>
        <p>Text Area is: {{ student.bio }}</p>
      </div>

      <button type="submit">Submit</button>
    </form>

    <div class="students" v-if="students.length > 0">
      <h3>Students</h3>
      <ul>
        <li v-for="(student, i) in students" :key="i">
          <p>Name: {{ student.userName }} {{ student.lastName }}</p>
          <p>Age: {{ student.age }}</p>
          <p>Email: {{ student.email }}</p>
          <p>City: {{ student.city }}</p>
          <p>Bio: {{ student.bio }}</p>
          <p>
            Sports:
            <!-- <span v-if="student.sports.football"> Football </span>
            <br />
            <span v-if="student.sports.basketball"> Basketball </span>
            <br />
            <span v-if="student.sports.tennis"> Tennis </span> -->
            <strong>
              <span v-for="(value, key, i) in student.sports" :key="i">
                <span v-if="value"> {{ key }} <br /></span>
              </span>
            </strong>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      students: [],
      student: {
        userName: "",
        lastName: "",
        email: "",
        age: null,
        sports: {
          football: false,
          basketball: false,
          tennis: false,
        },
        gender: "",
        city: "",
        bio: "",
      },
    };
  },

  methods: {
    addStudent() {
      console.log(this.student);
      this.students.push(this.student);
      console.log(this.students);
      this.student = {
        userName: "",
        lastName: "",
        email: "",
        age: null,
        sports: {
          football: false,
          basketball: false,
          tennis: false,
        },
        gender: "",
        city: "",
        bio: "",
      };
    },
  },
};
</script>
