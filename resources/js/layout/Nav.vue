<script setup lang="ts">
import { ref } from 'vue';

const navigation = [
    {
        name: 'About',
        route: '/about',
    },
    {
        name: 'Projects',
        route: '/projects',
    },
    {
        name: 'Contact',
        route: '/contact',
    },
];

const scrollToSection = (route: string) => {
    // Implementation for scrolling to section
    console.log('Scrolling to:', route);
};

const mobileMenuOpen = ref(false);
</script>

<template>
    <!-- Navigation -->
    <nav class="overflow-visible">
        <div class="section-wrapper sticky top-0">
            <div class="mt-2 flex items-center justify-center">
                <div class="hidden md:block">
                    <button v-for="item in navigation" :key="item.name" @click="scrollToSection(item.route)" class="primary-btn">
                        {{ item.name }}
                    </button>
                </div>

                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <button
                            v-for="item in navigation"
                            :key="item.name"
                            @click="scrollToSection(item.route)"
                            class="hover:text-primary-600 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-200"
                        >
                            {{ item.name }}
                        </button>
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button @click="mobileMenuOpen = !mobileMenuOpen" class="hover:text-primary-600 p-2 text-gray-600">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="mobileMenuOpen" class="md:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <button
                        v-for="item in navigation"
                        :key="item.name"
                        @click="
                            scrollToSection(item.route);
                            mobileMenuOpen = false;
                        "
                        class="hover:text-primary-600 block rounded-md px-3 py-2 text-base font-medium text-gray-600"
                    >
                        {{ item.name }}
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
@reference "@/css/app.css";

/*.primary-btn {
  @apply w-40 relative h-14 border-3 border-[#149CEA] outline-none bg-transparent text-white transition-all duration-1000 rounded-sm text-base font-bold cursor-pointer hover:shadow-[inset_0px_0px_25px_#1479EA] before:content-[''] before:absolute before:top-[-10px] before:left-[3%] before:w-[95%] before:h-[40%] before:bg-[#212121] before:transition-all before:duration-500 before:origin-center before:transform before:scale-100 hover:before:scale-0 after:content-[''] after:absolute after:top-[80%] after:left-[3%] after:w-[95%] after:h-[40%] after:bg-[#212121] after:transition-all after:duration-500 after:origin-center after:transform after:scale-100 hover:after:scale-0;
}*/

button {
    @apply relative h-12 w-40 cursor-pointer rounded-xl bg-transparent font-bold text-white uppercase;
    /*    width: 10em;
    height: 3.5em;*/
    border: 3px ridge var(--color-primary);
    outline: none;
    transition: 1s;
    font-size: 16px;
    margin: 3rem 1rem 0 1rem;
}

button::after {
    @apply absolute bg-dark-blue;
    content: '';
    top: -10px;
    left: 3%;
    width: 94%;
    height: 10px;
    transition: 0.5s;
    transform-origin: center;
}

button::before {
    @apply absolute bg-dark-blue;
    content: '';
    transform-origin: center;
    top: 98%;
    left: 3%;
    width: 94%;
    height: 10%;
    transition: 0.5s;
}

button:hover::before,
button:hover::after {
    transform: scale(0);
}

button:hover {
    box-shadow: inset 0 0 25px #1479ea;
}
</style>
