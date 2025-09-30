<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

const approaches = [
  {
    title: "API Development",
    description: "Designing and implementing RESTful APIs with proper authentication, rate limiting, and comprehensive documentation."
  },
  {
    title: "Database Optimization",
    description: "Optimizing database performance through proper indexing, query optimization, and efficient data structures."
  },
  {
    title: "System Architecture",
    description: "Building scalable backend architectures that can handle growth and maintain performance under load."
  },
  {
    title: "Code Quality",
    description: "Writing clean, maintainable code with comprehensive testing and following best practices and design patterns."
  }
]

const stats = [
  { value: "10+", label: "Years of professional full-stack development experience" },
  { value: "50+", label: "APIs built and maintained" },
  // { value: "15+", label: "Projects delivered successfully" },
  { value: "99.9%", label: "Success rate with learning new technologies" }
]
</script>

<template>
  <Head title="Jon Russell - Senior Software Engineer">
    <!--        <link rel="preconnect" href="https://rsms.me/" />-->
    <!--        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />-->
  </Head>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-16">
<!--        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">-->
<!--          I am Jon Russell-->
<!--        </h1>-->
<!--        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">-->
<!--          A <span class="text-primary-600 font-bold">full-stack software engineer</span> who creates robust, scalable solutions that power modern applications.-->
<!--        </p>-->
        <p class="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Currently a Senior Software Engineer with expertise in Laravel, PHP, and full-stack development.
          I specialize in building high-performance APIs, database optimization, and creating seamless
          integrations that bridge the gap between frontend and backend systems.
        </p>
      </div>

      <!-- Approach Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">My Approach</h2>
        <p class="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          My comprehensive development approach that builds reliable and maintainable backend systems.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(approach, index) in approaches" :key="index" class="card card-hover p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                {{ index + 1 }}
              </div>
              <h3 class="text-xl font-bold text-gray-900">{{ approach.title }}</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">{{ approach.description }}</p>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div>
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Experience</h2>
        <p class="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          It's not just about writing code. It's about building solutions that scale and deliver real business value.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(stat, index) in stats" :key="index" class="card text-center p-6">
            <div class="text-3xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
