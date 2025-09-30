<script setup lang="ts">
import Header from './Header.vue'

</script>

<template>
  <main>
    <header>
      <Header ref="header" />
<!--      <div class="hidden md:block">-->
<!--        <div class="ml-10 flex items-baseline space-x-4">-->
<!--          <button-->
<!--            v-for="item in navigation"-->
<!--            :key="item.name"-->
<!--            @click="scrollToSection(item.route)"-->
<!--            class="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"-->
<!--          >-->
<!--            {{ item.name }}-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->

    </header>

    <slot />

  </main>
</template>

<style scoped>

</style>
