<script setup lang="ts">
import Nav from '@/pages/Nav.vue';

</script>

<template>

  <!-- Header / Hero Section -->
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <div class="profile-pic-wrapper">
        <img src="/images/profile-pic.jpg" alt="Jon Russell" class="profile-pic">
      </div>
      <h1 class="">
        Hello, I'm Jon Russell!
      </h1>
      <p class="text-h5 text-grey-darken-1 mb-8">
        A <strong class="text-primary font-weight-bold">full-stack software engineer</strong>
        who creates robust, scalable solutions that power modern applications.
      </p>
    </div>
  </div>

  <Nav ref="nav" />

</template>

<style scoped>

</style>
