<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <div class="app-layout gap-0">
    <header>
      <!-- Header / Intro / Navigation -->
      <Header ref="header" />
    </header>

    <!-- Main content -->
    <main class="relative">
      <slot />
    </main>

    <!-- Footer -->
    <Footer ref="footer" />
  </div>
</template>

<style scoped>

</style>
