<script setup lang="ts"></script>

<template>
    <!-- Footer -->
    <footer>
        <div class="section-wrapper">
            <p class="text-green text-center">&copy; {{ new Date().getFullYear() }} Jon Russell. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
@reference "@/css/app.css";

footer {
    @apply py-8 text-terminal-black-500;
}
</style>
