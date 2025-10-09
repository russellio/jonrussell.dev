<script setup lang="ts">
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import ContentFrame from '@/components/ContentFrame.vue';

</script>

<template>
<!--    <UApp>-->
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
<!--    </UApp>-->
</template>

<style scoped>

</style>
