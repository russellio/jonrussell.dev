<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const navigation = [
  {
    name: "Home",
    route: "/"
  },
  {
    name: "About",
    route: "/about"
  },
  {
    name: "Projects",
    route: "/projects"
  },
  {
    name: "Contact",
    route: "/contact"
  }
]
</script>

<template>
  <!-- Navigation -->
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">

            <Link v-for="item in navigation" :key="item.name"
                  :href="item.route"
                  method="post"
                  @click="scrollToSection(item.route)"
                  class="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              {{ item.name}}
            </Link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <!--          <div class="md:hidden">-->
        <!--            <button-->
        <!--              @click="mobileMenuOpen = !mobileMenuOpen"-->
        <!--              class="text-gray-600 hover:text-primary-600 p-2"-->
        <!--            >-->
        <!--              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
        <!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />-->
        <!--              </svg>-->
        <!--            </button>-->
        <!--          </div>-->
      </div>

      <!-- Mobile menu -->
      <!--        <div v-if="mobileMenuOpen" class="md:hidden">-->
      <!--          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">-->
      <!--            <button-->
      <!--              v-for="item in navigation"-->
      <!--              :key="item.name"-->
      <!--              @click="scrollToSection(item.route); mobileMenuOpen = false"-->
      <!--              class="text-gray-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"-->
      <!--            >-->
      <!--              {{ item.name }}-->
      <!--            </button>-->
      <!--          </div>-->
      <!--        </div>-->
    </div>
  </nav>
</template>

<style scoped>

</style>
