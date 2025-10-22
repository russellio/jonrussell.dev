<script setup lang="ts">

</script>

<template>
    <!-- Footer -->
    <footer>
        <div class="section-wrapper">
            <p class="text-green text-center">
                &copy; {{ new Date().getFullYear() }} Jon Russell. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<style scoped>
@reference "@/css/app.css";

footer {
    @apply text-terminal-black-500 py-8;
}
</style>
