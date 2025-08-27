<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/green-leaves-round-logo.png" :alt="logo" />
    </div>
    <div class="links">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/Profile">Profile</router-link></li>
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
  data() {
    return {
      logo: "Logo",
      name: "NavBar",
      links: ["Home", "About", "Contact", "Blog", "Careers"],
    };
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
