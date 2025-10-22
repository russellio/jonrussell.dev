<script setup lang="ts">
import Header from '@/js/layout/Header.vue'
import Footer from '@/js/layout/Footer.vue'
import ContentFrame from '@/js/components/ContentFrame.vue';

</script>

<template>
  <div class="app-layout">
    <header>
      <!-- Header / Intro / Navigation -->
      <Header ref="header" />
    </header>

    <!-- Main content -->
    <main ref="main" class="relative">
        <ContentFrame>
            <slot />
        </ContentFrame>
    </main>

    <!-- Footer -->
    <Footer ref="footer" />
  </div>
</template>

<style scoped>

</style>
