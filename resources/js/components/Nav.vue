<script setup lang="ts">

// const navigation = [
//   {
//     name: "About",
//     route: "/about"
//   },
//   {
//     name: "Projects",
//     route: "/projects"
//   },
//   {
//     name: "Contact",
//     route: "/contact"
//   }
// ]
</script>

<template>
  <!-- Navigation -->
  <nav class="mb-6 overflow-visible">
    <div class="section-wrapper sticky top-0">
      <div class="flex items-center justify-center nav-backdrop">

        <div class="hidden md:block">
<!--          <button-->
<!--            v-for="item in navigation"-->
<!--            :key="item.name"-->
<!--            @click="scrollToSection(item.route)"-->
<!--            class="btn-primary"-->
<!--          >-->
<!--            {{ item.name }}-->
<!--          </button>-->
        </div>

<!--        <div class="hidden md:block">-->
<!--          <div class="flex items-center space-x-8">-->
<!--            <Link v-for="item in navigation" :key="item.name"-->
<!--                  :href="item.route"-->
<!--                  @click="scrollToSection(item.route)"-->
<!--                  class="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"-->
<!--                  as="button"-->
<!--            >-->
<!--              {{ item.name}}-->
<!--            </Link>-->
<!--          </div>-->
<!--        </div>-->

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
@reference "../../css/app.css";

.nav-backdrop {
    @apply w-11/12 mx-auto bg-gradient-to-b from-transparent to-dark-blue pb-10;
    border-bottom: 1px solid var(--color-blue);
    margin-bottom: -20px;
}

</style>
