<script setup lang="ts">
// import Nav from '@/layout/Nav.vue';
import BackgroundStars from '@/components/BackgroundStars.vue';
// import Contact from '@/pages/Contact.vue'
// import { openModal } from '@/composables/modal';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
library.add(faLocationDot, faLinkedin, faEnvelope, faUserShield, faCertificate);

</script>

<template>
    <BackgroundStars ref="stars" />

    <div class="intro-wrapper">
        <div class="intro-backdrop"></div>

        <div class="intro">

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
                        <!--                    <a data-dialog-target="contact-modal" @click="openModal('modal-contact')" class="cursor-pointer">-->
                        <!--                        <FontAwesomeIcon icon="fa-regular fa-envelope" size="lg" />-->
                        <!--                    </a>-->
                    </div>
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

<!--    <Nav ref="navigation" />-->

    <div class="intro-bottom"></div>
</template>

<style scoped>
@reference "../../css/app.css";

.intro-wrapper {
    @apply w-full text-white;
    @apply backdrop-opacity-5 bg-radial-[at_70%_50%] from-white/45 to-transparent to-65%;
}

.intro {
    @apply mx-auto w-5/8 pt-20 pb-6 mb-2;
}

.intro-backdrop {
    @apply absolute mt-12 h-94 w-full bg-white rounded-sm backdrop-filter backdrop-blur-lg opacity-5;
}

.intro-bottom {
    @apply max-w-7xl px-4 sm:px-6 lg:px-8;
    @apply relative clear-right mx-auto w-9/10 h-14 z-[-1];
    /*@apply bg-gradient-to-b from-transparent to-dark-blue;*/
}

h1 {
    @apply text-6xl text-nowrap text-blue;

    &.name {
        @apply text-right font-bold tracking-tight text-white;
    }
}

p {
    @apply ms-10 mt-9 mb-8 w-2/3 -indent-8 text-2xl text-terminal-black-50;

    strong {
        @apply px-3 text-4xl font-bold tracking-tight text-white;
    }
}

.profile-avatar-wrapper {
    @apply flex flex-col items-end justify-center h-50 align-top w-46 rounded-full float-right;
}

.profile-avatar-backdrop {
    @apply absolute rounded-xs z-30 h-38 w-38 border-2 border-secondary to-purple-100 me-5;
    @apply bg-white/20 backdrop-blur-sm backdrop-opacity-50 backdrop-saturate-100;
    margin-top: -30px;
}

.profile-avatar {
    @apply z-40 m-1 h-full w-full rounded-full object-cover mb-3 mt-[8rem];
}

.profile-pill {
    @apply w-max border-1 border-white rounded-full font-bold bg-blue;
    @apply text-sm p-0.5 px-4 mt-1 mb-2;
}

.profile-icons {
    @apply text-right z-50;

    a svg {
        @apply text-white;
    }
}

.profile-addon-wrapper {
    @apply grid grid-cols-1 justify-items-end;
}
</style>
