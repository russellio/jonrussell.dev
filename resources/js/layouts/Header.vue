<script setup lang="ts">
import Nav from '@/layouts/Nav.vue';
import BackgroundStars from '@/components/BackgroundStars.vue';
// import Contact from '@/pages/Contact.vue'
// import { openModal } from '@/composables/modal';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faLinkedin, faEnvelope, faXmark);

</script>

<template>
    <BackgroundStars ref="stars" />

    <div class="intro-wrapper">
        <div class="intro-backdrop"></div>

        <div class="intro">
            <div class="profile-avatar-wrapper">
                <div class="profile-avatar-backdrop"></div>
                <img src="/images/profile-avatar.png" alt="Jon Russell" class="profile-avatar" />
                <div class="contact-item-header">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Remote - North Carolina</span>
                </div>
                <div class="profile-icons z-50">
                    <a href="https://www.linkedin.com/in/russell-jonathan/">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" />
                    </a>
<!--                    <a data-dialog-target="contact-modal" @click="openModal('modal-contact')" class="cursor-pointer">-->
<!--                        <FontAwesomeIcon icon="fa-regular fa-envelope" size="lg" />-->
<!--                    </a>-->
                </div>
            </div>
            <h1>Welcome! I'm</h1>
            <h1 class="name">Jon Russell.</h1>
            <p>
                A <strong>full-stack software engineer</strong>
                who creates robust, scalable solutions that power modern web applications.
            </p>
        </div>
    </div>

    <!-- Contact Modal -->
<!--    <Contact :modalId="'contact'" />-->

    <Nav ref="navigation" />
</template>

<style scoped>
@reference "../../css/app.css";

.intro-wrapper {
    @apply w-full text-white;
    /*@apply w-full px-4 sm:px-6 lg:px-8 text-white;*/
    /*@apply backdrop-opacity-5 bg-radial-[at_70%_50%] from-white/45 to-transparent to-65%;*/

/*    //background: //  radial-gradient(at 96% 48%, #041028 0px, transparent 50%),
        //  radial-gradient(at 100% 1%, #111b4f 0px, transparent 60%),
        //  radial-gradient(at 100% 99%, #330509 0px, transparent 50%),
        //  #041028;*/
}

.intro-backdrop {
    /*@apply absolute h-80 w-full mt-8 bg-white rounded-sm backdrop-filter backdrop-blur-lg opacity-5;*/
    @apply absolute mt-8 h-80 w-full;
}

.intro {
    @apply mx-auto w-5/8 pt-20 pb-6;
}

h1 {
    @apply text-6xl text-nowrap text-blue;

    &.name {
        @apply text-right font-bold tracking-tight text-white;
    }
}

p {
    @apply ms-10 mt-9 mb-8 w-5/6 -indent-8 text-2xl text-terminal-black-50;

    strong {
        @apply px-3 text-4xl font-bold tracking-tight text-white;
    }
}

.profile-avatar-wrapper {
    @apply flex flex-col items-center justify-center h-50 w-46 rounded-full float-right;
  /*@apply flex w-46 h-50 rounded-full float-right items-center justify-center;*/
}

.profile-avatar-backdrop {
    @apply absolute z-30 h-38 w-38 border-2 border-secondary bg-white/20 backdrop-blur-sm backdrop-opacity-50 backdrop-saturate-100;
}

.profile-avatar {
    @apply z-40 m-1 h-full w-full rounded-full object-cover;
}

.profile-icons {
    @apply mt-2 flex text-right;
}
</style>
