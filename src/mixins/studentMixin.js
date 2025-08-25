const studentMixin = {
  data() {
    return {
      studentsList: [],
    };
  },
  methods: {
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((response) => response.json())
        .then((data) => {
          this.studentsList = data;
        });
    },
  },
  async mounted() {
    await this.getStudents();
  },
};

export default studentMixin;
