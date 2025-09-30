<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

const projects = [
  {
    title: "Digital Flag Board",
    description: "The Digital Flag Board " +
      "is an enterprise-level ticketing system for operators to report and technicians to track issues with machines on the factory " +
      "floor. The web application is loaded as the sole application running on mobile devices and numerous kiosks stationed " +
      "around the factory floors. With authentication via Active Directory and LDAP, the admin console allowed senior management " +
      "to pull cycle time metrics, run reports, manage users, and overall CRUD functionality.",
    technologies: ["Laravel", "PHP", "MySQL", "RestAPI", "Sass", "jQuery"],
    icon: "mdi-cogs",
    image: "/images/flag-board/bg.png",
    bgImage: "/images/flag-board/bg.png",
    links: [
      { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
      { type: "docs", label: "Documentation", icon: "mdi-book", url: "#" }
    ]
  },
  {
    title: "TRBO - 'Tools and Resources for Budget Optimization' - DoD Budgeting Web Application",
    description: "TRBO is an internal, web-based SaaS platform supporting the Navy's Strategic Systems Programs (SSP). The " +
      "system managed intricate budget packages spanning appropriations, contracts, and fiscal requirements across multiple years.",
    technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Redis", "Docker"],
    icon: "mdi-shopping",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
    links: [
      { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
      { type: "demo", label: "Live Demo", icon: "mdi-open-in-new", url: "#" }
    ]
  },
  {
    title: "Glen Raven API Gateway & Authentication",
    description: "Developed a centralized API gateway with OAuth2 authentication, rate limiting, and request routing. Handles " +
      "authentication for multiple client applications with JWT tokens and refresh mechanisms.",
    technologies: ["Laravel", "PHP", "MySQL", "RestAPI", "Nexmo"],
    icon: "mdi-cogs",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
    links: [
      { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
      { type: "docs", label: "Documentation", icon: "mdi-book", url: "#" }
    ]
  },
  /* {
    title: "Web Request Dashboard",
    description: "Built a real-time analytics system processing millions of events per day. Features include data aggregation, real-time dashboards, and automated reporting with WebSocket connections.",
    technologies: ["Laravel", "PHP", "InfluxDB", "WebSockets", "Vue.js"],
    icon: "mdi-chart-line",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    links: [
      { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
      { type: "demo", label: "Live Demo", icon: "mdi-open-in-new", url: "#" }
    ]
  },
  {
    title: "SMS Administrator - Inclement weather and office closure notification system",
    description: "Developed a centralized API gateway with OAuth2 authentication, rate limiting, and request routing. Handles authentication for multiple client applications with JWT tokens and refresh mechanisms.",
    technologies: ["Laravel", "PHP", "Redis", "JWT", "OAuth2"],
    icon: "mdi-shield-lock",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    links: [
      { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
      { type: "docs", label: "API Docs", icon: "mdi-book", url: "#" }
    ]
  },
  {
    title: "Database Migration Tool",
    description: "Created a custom database migration and seeding tool for large-scale data operations. Features include data validation, rollback capabilities, and progress tracking for complex migrations.",
    technologies: ["Laravel", "PHP", "MySQL", "PostgreSQL", "CLI"],
    icon: "mdi-database-sync",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop",
    links: [
      { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
      { type: "npm", label: "NPM Package", icon: "mdi-package-variant", url: "#" }
    ]
  },
  {
    title: "Automated Testing Suite",
    description: "Built comprehensive testing infrastructure including unit tests, integration tests, and API testing. Implemented CI/CD pipelines with automated testing, code coverage reporting, and quality gates.",
    technologies: ["PHPUnit", "Laravel", "GitHub Actions", "Docker", "Codeception"],
    icon: "mdi-test-tube",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    links: [
      { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
      { type: "docs", label: "Documentation", icon: "mdi-book", url: "#" }
    ]
  }*/
];
</script>

<template>
  <Head title="Jon Russell - Senior Software Engineer">

  </Head>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p class="text-xl text-gray-600">A collection of projects I've worked on.</p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index" class="card card-hover overflow-hidden">

          <!-- Project Image -->
          <div class="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-white text-6xl">
                <svg v-if="project.icon === 'mdi-shopping'" class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                </svg>
                <svg v-else-if="project.icon === 'mdi-cogs'" class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                </svg>
                <svg v-else-if="project.icon === 'mdi-chart-line'" class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,11.78L20.71,5.29L22,6.71L16,12.78L10,6.78L4,12.78L5.29,14.07L10,9.36L16,11.78Z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-3">
              <a
                v-for="link in project.links"
                :key="link.type"
                :href="link.url"
                target="_blank"
                class="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center gap-1"
              >
                <svg v-if="link.icon === 'mdi-github'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
                <svg v-else-if="link.icon === 'mdi-open-in-new'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
