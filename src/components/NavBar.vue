<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/green-leaves-round-logo.png" :alt="logo" />
    </div>
    <div class="links">
      <ul>
        <li v-for="link in links" :key="link.name">
          <!-- <router-link :to="link.path">{{ link.meta.title }}</router-link> -->
          <router-link
            v-if="link.name == 'ProfileView'"
            :to="{
              name: link.name,
              params: { userId: 4, userName: 'Hadeer Salah' },
              query: { age: 26, gender: 'Female', grade: 'A+' },
            }"
            >{{ link.meta.title }}</router-link
          >
          <router-link v-else :to="{ name: link.name }">{{
            link.meta.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="btns">
      <button>LOG IN</button>
      <button>SIGN UP</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      logo: "Logo",
      name: "NavBar",
      links: [],
    };
  },
  methods: {
    getRoutes() {
      console.log(this.$router.options.routes);
      this.links = this.$router.options.routes;
    },
  },
  mounted() {
    this.getRoutes();
  },
};
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;

  .icon {
    font-size: 24px;
  }
  .logo img {
    height: 60px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .btns {
    button {
      margin-left: 10px;
      padding: 5px 10px;
      border: none;
      background-color: #42b983;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #369870;
      }
    }
  }
}
</style>
