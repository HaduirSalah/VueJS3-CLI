<template>
  <div class="profile">
    <h1>Profile View</h1>
    <p>This is the profile view of the application.</p>
    <p>User ID: {{ $route.params.userId }}</p>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
};
</script>
