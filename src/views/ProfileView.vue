<template>
  <div class="profile">
    <h1>Profile View</h1>
    <p>This is the profile view of the application.</p>
    <h2>User Details params</h2>
    <p>User ID: {{ $route.params.userId }}</p>
    <p>User Name: {{ $route.params.userName }}</p>
    <h2>User Details query</h2>
    <p>Age: {{ $route.query.age }}</p>
    <p>Gender: {{ $route.query.gender }}</p>
    <p>Grade: {{ $route.query.grade }}</p>
    <hr />
    <ul
      style="
        list-style-type: none;
        padding: 10px;
        display: flex;
        gap: 10px;
        justify-content: center;
      "
    >
      <li>
        <router-link :to="{ name: 'MyLearnings' }">My Learnings</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'MyWishlist' }">My Wishlist</router-link>
      </li>
    </ul>
    <hr />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  mounted() {
    console.log(this.$route);
  },
};
</script>
