<script setup lang="ts">
import Nav from '@/layouts/Nav.vue';
import BackgroundStars from '@/components/BackgroundStars.vue';
// import Contact from '@/pages/Contact.vue'
// import { openModal } from '@/composables/modal';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
library.add(faLocationDot, faLinkedin, faEnvelope, faUserShield);

</script>

<template>
    <BackgroundStars ref="stars" />

    <div class="intro-wrapper">
        <div class="intro-backdrop"></div>

        <div class="intro">
            <div class="profile-avatar-wrapper">
                <div class="profile-avatar-backdrop"></div>
                <img src="/images/profile-avatar.png" alt="Jon Russell" class="profile-avatar" />
                <div class="profile-addons">
                    <div class="profile-pill">
                        <FontAwesomeIcon :icon="faLocationDot" size="xs" />
                        Remote - North Carolina
                    </div>
                    <div class="profile-pill">
                        <FontAwesomeIcon :icon="faUserShield" size="xs" />
                        Confidential Security Clearance
                    </div>
                    <div class="profile-icons">
                        <a href="https://www.linkedin.com/in/russell-jonathan/">
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
    @apply absolute mt-8 h-80 w-full bg-white rounded-sm backdrop-filter backdrop-blur-lg opacity-5;
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
    @apply flex flex-col items-end justify-center h-50 align-top w-46 rounded-full float-right;
}

.profile-avatar-backdrop {
    @apply absolute rounded-xs z-30 h-38 w-38 border-2 border-secondary to-purple-100 me-5;
    @apply bg-white/20 backdrop-blur-sm backdrop-opacity-50 backdrop-saturate-100;
}

.profile-avatar {
    @apply z-40 m-1 h-full w-full rounded-full object-cover mb-3 mt-10;
}

.profile-pill {
    @apply inline-flex w-max items-center border-1 border-terminal-black-300 rounded-full;
    @apply text-sm p-0.5 px-4 m-2;
}

.profile-icons {
    @apply text-right z-50 m-2;
}
.profile-addons {
    @apply flex flex-col justify-end;
}
</style>
