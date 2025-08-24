<template>
  <div class="container">
    <div class="card" v-for="student in students" :key="student.id">
      <img :src="student.img" :alt="student.name" />
      <div>
        <p>{{ student.name }}</p>
        <p>{{ student.age }}</p>
        <p>{{ student.department }}</p>
      </div>
    </div>
    <button @click="deleteStudent">Update Name</button>
    <p>isActive: {{ isActiveLocal }}</p>
    <button @click="isActiveLocal = !isActive">Toggle Active</button>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
img {
  width: 100%;
  height: 200px;
}
div {
  padding: 2px 16px;
}
</style>
<script>
export default {
  name: "MyCard",
  data() {
    return {
      studentDeleted: this.students,
      isActiveLocal: this.isActive,
    };
  },
  props: {
    students: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
  },
  methods: {
    deleteStudent() {
      this.studentDeleted.shift();
    },
  },
};
</script>
