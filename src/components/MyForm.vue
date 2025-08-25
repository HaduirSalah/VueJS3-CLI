<template>
  <div>
    <h2>My Form</h2>
    <form @submit.prevent>
      <div>
        <label for="userName">userName:</label>
        <input type="text" v-model.lazy="student.name" id="userName" required />
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
        <div>
          <label for="age">Age:</label>
          <input type="age" v-model.lazy="student.age" id="age" />
          <p>Age is: {{ student.age }}</p>
        </div>
        <label for="email">Email:</label>
        <input type="email" v-model.lazy="student.email" id="email" />
        <p>Email is: {{ student.email }}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      student: {
        userName: "",
        lastName: "",
        email: "",
        age: null,
      },
    };
  },

  methods: {},
};
</script>
