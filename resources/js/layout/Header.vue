<script setup lang="ts">
// import Nav from '@/layout/Nav.vue';
import { useModal } from '@/composables/useModal';
import Contact from '@/pages/Contact.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCertificate, faLocationDot, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed, defineAsyncComponent, onMounted, ref } from 'vue';

library.add(faLocationDot, faLinkedin, faEnvelope, faUserShield, faCertificate);

const { isOpen, openModal } = useModal();
const isModalOpen = computed(() => isOpen('contact-modal'));

const BackgroundStars = defineAsyncComponent(() => import('@/components/BackgroundStars.vue'));
const backgroundLoaded = ref(false);
const showBackground = ref(false);
const handleBackgroundReady = () => {
    backgroundLoaded.value = true;
    // Small delay to ensure smooth transition
    setTimeout(() => {
        showBackground.value = true;
    }, 100);
};

onMounted(() => {
    setTimeout(() => {
        showBackground.value = true;
    }, 50);
});
</script>

<template>
    <div class="fallback-background" :class="{ 'fade-out': showBackground }"></div>

    <Transition name="background-fade" appear>
        <BackgroundStars v-if="showBackground" ref="stars" @background-ready="handleBackgroundReady" />
    </Transition>

    <div class="intro-wrapper">
        <div class="intro-backdrop"></div>

        <div class="intro">
            <div class="welcome">
                <h1>Welcome! I'm <span class="name">Jon Russell.</span></h1>
                <p>
                    A <strong>full-stack software engineer</strong>
                    who creates robust, scalable solutions that power modern web applications.
                </p>
            </div>

            <div class="profile-avatar-wrapper">
                <div class="profile-avatar-backdrop"></div>
                <img src="/images/profile-avatar.png" alt="Jon Russell" class="profile-avatar" />
                <div class="profile-addon-wrapper">
                    <div class="profile-pill">
                        <FontAwesomeIcon :icon="faLocationDot" class="text-gold" size="sm" />
                        Remote - North Carolina
                    </div>
                    <div class="profile-pill">
                        <FontAwesomeIcon :icon="faCertificate" class="text-gold" size="sm" />
                        ScrumMaster Certification
                    </div>
                    <div class="profile-pill">
                        <FontAwesomeIcon :icon="faUserShield" class="text-gold" size="sm" />
                        DoD Confidential Security Clearance
                    </div>
                    <div class="profile-icons">
                        <a href="https://www.linkedin.com/in/russell-jonathan/" target="_blank">
                            <FontAwesomeIcon :icon="faLinkedin" size="xl" />
                        </a>
                        <a type="button" data-dialog-target="contact-modal" @click="openModal('contact-modal')" class="cursor-pointer">
                            <FontAwesomeIcon icon="fa-regular fa-envelope" size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Modal -->
    <Contact v-if="isModalOpen" />

    <!--    <Nav ref="navigation" />-->

    <div class="intro-bottom"></div>
</template>

<style scoped>
@reference "../../css/app.css";

/* Fallback background for immediate visibility */
.fallback-background {
    @apply fixed h-full w-full overflow-hidden;
    z-index: -2;
    background:
        radial-gradient(at 51% 46%, #041028 0, transparent 50%), radial-gradient(at 85% 99%, #330509 0, transparent 50%),
        radial-gradient(at 18% 22%, #111b4f 0, transparent 50%), #041028;
    transition: opacity 1.5s ease-in-out;
    opacity: 1;
}

.fallback-background.fade-out {
    opacity: 0;
}

.background-fade-enter-active {
    transition: opacity 1.5s ease-in-out;
}

.background-fade-enter-from {
    opacity: 0;
}

.background-fade-enter-to {
    opacity: 1;
}

.intro-wrapper {
    @apply w-full text-white;
    @apply bg-radial-[at_70%_50%] from-white/45 to-transparent to-65% backdrop-opacity-5;
}

.intro {
    @apply mx-auto mb-2 w-5/6 pt-20 pb-6 md:w-3/4;
    @apply flex flex-col md:flex-row;

    .welcome {
        @apply w-full md:w-3/4;
    }
}

.intro-backdrop {
    @apply absolute mt-12 h-[38%] w-full bg-white opacity-20 backdrop-blur-lg backdrop-filter;
    @apply md:h-full md:opacity-5;
}

.intro-bottom {
    @apply hidden md:block;
    @apply max-w-7xl px-4 sm:px-6 lg:px-8;
    @apply relative z-[-1] clear-right mx-auto h-14 w-9/10;
    /*@apply bg-gradient-to-b from-transparent to-dark-blue;*/
}

h1 {
    @apply text-6xl text-blue md:text-nowrap;

    .name {
        @apply font-bold tracking-tighter text-white md:block md:text-right;
    }
}

p {
    @apply ms-0 mt-9 mb-8 text-2xl text-terminal-black-50 md:ms-10 md:-indent-8;

    strong {
        @apply px-3 text-4xl font-bold tracking-tight text-white;
    }
}

.profile-avatar-wrapper {
    @apply flex w-11/12 flex-col justify-start rounded-full md:float-right md:h-50 md:w-46;
    @apply items-start md:items-end;
}

.profile-avatar-backdrop {
    @apply absolute z-30 ms-5 mt-30 h-70 w-76 rounded-sm border-2 border-secondary to-purple-100 md:me-5 md:mt-10 md:h-38 md:w-38;
    @apply bg-white/20 backdrop-blur-sm backdrop-opacity-50 backdrop-saturate-100;
}

.profile-avatar {
    @apply z-40 m-1 h-full w-full rounded-full object-cover md:mb-3;
}

.profile-pill {
    @apply w-max rounded-full border-1 border-white bg-blue font-bold;
    @apply mt-1 mb-2 p-0.5 px-4 text-[18px] md:text-sm;
}

.profile-icons {
    @apply z-50 text-right;

    a svg {
        @apply text-white;
    }
}

.profile-addon-wrapper {
    @apply grid grid-cols-1 justify-items-center md:justify-items-end;
}
</style>
