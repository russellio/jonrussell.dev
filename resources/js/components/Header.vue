<script setup lang="ts">
import Nav from '@/components/Nav.vue';
import BackgroundStars from '@/components/BackgroundStars.vue';
</script>

<template>

  <BackgroundStars ref="stars" />

  <div class="intro-wrapper">
      <div class="intro-backdrop"></div>

    <div class="intro">
      <div class="profile-avatar-wrapper">
        <div class="profile-avatar-backdrop"></div>
        <img src="/images/profile-avatar.png"  alt="Jon Russell" class="profile-avatar">
      </div>
      <h1>Welcome! I'm</h1>
      <h1 class="name">Jon Russell.</h1>
      <p>
        A <strong>full-stack software engineer</strong>
        who creates robust, scalable solutions that power modern web applications.
      </p>


    </div>
  </div>

  <Nav ref="navigation" />

</template>

<style scoped>
@reference "../../css/app.css";

.intro-wrapper {
  @apply w-full text-white;
  /*@apply w-full px-4 sm:px-6 lg:px-8 text-white;*/
  /*@apply backdrop-opacity-5 bg-radial-[at_70%_50%] from-white/45 to-transparent to-65%;*/

    //background:
  //  radial-gradient(at 96% 48%, #041028 0px, transparent 50%),
  //  radial-gradient(at 100% 1%, #111b4f 0px, transparent 60%),
  //  radial-gradient(at 100% 99%, #330509 0px, transparent 50%),
  //  #041028;
}

.intro-backdrop {
    /*@apply absolute h-80 w-full mt-8 bg-white rounded-sm backdrop-filter backdrop-blur-lg opacity-5;*/
    @apply absolute h-80 w-full mt-8;
}

.intro {
  @apply pt-20 pb-6 w-5/8 mx-auto;
    /*border-top: 2px solid dimgray;*/
    //border-bottom: 1px solid dimgray;
}

h1 {
  @apply text-6xl text-nowrap text-blue;

    &.name {
        @apply text-right text-white tracking-tight font-bold;
    }
}

p {
  @apply text-2xl mb-8 mt-9 w-5/6 ms-10 text-terminal-black-50 -indent-8;

  strong {
    @apply text-4xl text-white tracking-tight font-bold px-3;
  }
}

.profile-avatar-wrapper {
  @apply flex w-46 h-50 rounded-full float-right items-center justify-center;
}

.profile-avatar-backdrop {
  @apply bg-white/20 w-38 h-38 border-2 border-secondary backdrop-blur-sm backdrop-opacity-50 backdrop-saturate-100 absolute z-30;
}

.profile-avatar {
  @apply w-full h-full rounded-full m-1 object-cover z-40;
}
</style>
