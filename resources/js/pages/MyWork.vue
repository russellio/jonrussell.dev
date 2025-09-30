<script setup lang="ts">

</script>

<template>
  <template>
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="text-center mb-12">
            <h1 class="text-h2 font-weight-bold mb-4">My Work</h1>
            <p class="text-h6 text-grey-darken-1">A collection of projects I've worked on.</p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="(project, index) in projects" :key="index">
          <v-card class="h-100" elevation="2" rounded="lg" hover>
            <v-img
              :src="project.image"
              height="200"
              cover
              class="text-white"
            >
              <div class="d-flex align-center justify-center fill-height">
                <v-icon size="64" color="white">{{ project.icon }}</v-icon>
              </div>
            </v-img>

            <v-card-title class="text-h6 font-weight-bold pa-6 pb-2">
              {{ project.title }}
            </v-card-title>

            <v-card-text class="pa-6 pt-2">
              <p class="text-body-2 text-grey-darken-1 mb-4">{{ project.description }}</p>

              <div class="d-flex flex-wrap gap-2 mb-4">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="small"
                  color="primary"
                  variant="outlined"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>

            <v-card-actions class="pa-6 pt-0">
              <v-btn
                v-for="link in project.links"
                :key="link.type"
                :href="link.url"
                target="_blank"
                :prepend-icon="link.icon"
                variant="text"
                color="primary"
                size="small"
              >
                {{ link.label }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script>
    export default {
      name: 'Projects',
      data() {
        return {
          projects: [
            {
              title: "E-Commerce API Platform",
              description: "A comprehensive REST API for a large e-commerce platform handling millions of transactions. Built with Laravel, featuring advanced caching, queue management, and real-time inventory tracking.",
              technologies: ["Laravel", "PHP", "MySQL", "Redis", "Docker"],
              icon: "mdi-shopping",
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
              links: [
                { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
                { type: "demo", label: "Live Demo", icon: "mdi-open-in-new", url: "#" }
              ]
            },
            {
              title: "Microservices Architecture",
              description: "Designed and implemented a microservices architecture for a fintech application. Includes user authentication, payment processing, and notification services with proper service communication.",
              technologies: ["Laravel", "PHP", "PostgreSQL", "RabbitMQ", "Kubernetes"],
              icon: "mdi-cogs",
              image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
              links: [
                { type: "github", label: "GitHub", icon: "mdi-github", url: "#" },
                { type: "docs", label: "Documentation", icon: "mdi-book", url: "#" }
              ]
            },
            {
              title: "Real-time Analytics Dashboard",
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
              title: "API Gateway & Authentication",
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
            }
          ]
        }
      }
    }
  </script>

</template>

<style scoped>

</style>
