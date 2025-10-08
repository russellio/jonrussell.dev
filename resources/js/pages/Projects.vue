<script setup lang="ts">
import App from '@/App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { openModal, closeModal } from '@/composables/modal';
import ProjectModal from '@/components/ProjectModal.vue';

const projects = [
    {
        id: 'project-dod',
        title: 'DoD Budgeting Application',
        byline: `SaaS budgeting platform supporting the Navy's Strategic Systems Programs.`,
        description:
            `An internal, web-based SaaS platform supporting the Navy's Strategic Systems Programs (SSP), this
            application managed intricate budget packages spanning appropriations, contracts, and fiscal requirements
            across multiple years.`,
        technologies: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'RestAPIs', 'Microservices', 'Node.js'],
        company: 'Pioneering Evolution',
        icon: '',
        image: '/images/ssp-logo.png',
        bgImage: '/images/ssp-logo.png',
        bgPositionX: '-30px',
        bgPositionY: '-50px',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'demo', label: 'Live Demo', icon: 'mdi-open-in-new', url: '#' }
        ]
    },
    {
        id: 'project-api',
        title: 'Enterprise API Gateway & Authentication',
        byline: 'Centralized API gateway with OAuth2 authentication, rate limiting, and request routing for multiple client applications',
        description:
            `As a part of the Digital Flag Board implementation, authentication through LDAP was added so users could
            utilize their existing Active Directory accounts. Once that was up and running, it became clear a more unified
            way for additional internal apps to talk to each other was needed. That work on authentication kick-started
            the groundwork for what became the Glen Raven API. I dove into research, even traveled to API World, and then
            came back with a proposal for a secure, REST-based API with JWT authentication and Azure pipeline management.
            That effort set the stage for the Glen Raven API to connect systems, share data, and build future apps on a
            common foundation. The Glen Raven API allows several different applications to interface with each other (client
            /vendor orders, distribution, metrics, et al)`,
        technologies: ['Lumen (Laravel)', 'JWT', 'PHP', 'MySQL', 'Rest API'],
        company: 'Glen Raven',
        icon: '',
        image: '/images/api-bg.png',
        bgImage: '/images/api-bg.png',
        bgPositionX: '-30px',
        bgPositionY: '-65px',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'docs', label: 'Documentation', icon: 'mdi-book', url: '#' }
        ]
    },
    {
        id: 'project-digital',
        title: 'Digital Flag Board',
        byline: 'Ticketing system for tracking issues with machines across factories.',
        description: `
        The Digital Flag Board is an enterprise-level ticketing system for operators to report and technicians to track issues with machines
        on the factory floor. The web application is loaded as the sole application running on mobile devices and numerous kiosks stationed
        around the factory floors. With authentication via Active Directory and LDAP, the admin console allowed senior management
        to pull cycle time metrics, run reports, manage users, and overall CRUD functionality.
        `,
        technologies: ['Laravel', 'PHP', 'MySQL', 'LDAP', 'Active Directory', 'jQuery'],
        company: 'Glen Raven',
        icon: '',
        image: '/images/flag-board/bg.png',
        bgImage: '/images/flag-board/bg.png',
        bgPositionX: '-30px',
        bgPositionY: '-130px',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'docs', label: 'Documentation', icon: 'mdi-book', url: '#' }
        ]
    },
    {
        id: 'project-concert',
        title: 'Concert Web',
        byline: 'SaaS cash machine app?',
        description: '',
        technologies: ['Laravel', 'PHP', 'MySQL', 'Redis', 'REST APIs'],
        company: 'ARCA',
        icon: '',
        image: '/images/concert-bg.png',
        bgImage: '/images/concert-bg.png',
        bgPositionX: '-30px',
        bgPositionY: '-65px',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'docs', label: 'API Docs', icon: 'mdi-book', url: '#' }
        ]
    },
    {
        id: 'project-sms',
        title: 'Enterprise SMS Notification Services',
        byline: 'Inclement weather and office closure notification system',
        description: 'Glen Raven 511 – SMS Notification Services',
        technologies: ['Laravel', 'PHP', 'Vue.js'],
        company: 'Glen Raven',
        icon: '',
        image: 'https://static.photos/technology/640x360/144',
        bgImage: 'https://static.photos/technology/640x360/144',
        bgPositionX: '-30px',
        bgPositionY: '-30px',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'demo', label: 'Live Demo', icon: 'mdi-open-in-new', url: '#' }
        ]
    },
    {
        id: 'project-web',
        title: 'Web Request Dashboard',
        byline: 'Ticketing system for tracking issues with machines across factories.',
        description: 'Built a real-time analytics system processing millions of events per day. Features include data aggregation, real-time dashboards, and automated reporting with WebSocket connections.',
        technologies: ['Laravel', 'PHP', 'MySQL', 'RestAPI', 'jQuery', 'Bootstrap'],
        company: 'Glen Raven',
        icon: '',
        image: '/images/web-requests-bg.png',
        bgImage: '/images/web-requests-bg.png',
        bgPositionX: '0',
        bgPositionY: '0',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'docs', label: 'Documentation', icon: 'mdi-book', url: '#' }
        ]
    },
    {
        id: 'project-manager',
        title: 'Project Manager Dashboard',
        byline: 'UI for project managers',
        description: ``,
        technologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'jQuery'],
        company: 'Digital Insight',
        icon: '',
        image: 'https://static.photos/technology/640x360/184',
        bgImage: 'https://static.photos/technology/640x360/184',
        bgPositionX: '-30px',
        bgPositionY: '-65px',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'docs', label: 'API Docs', icon: 'mdi-book', url: '#' }
        ]
    }
];

</script>

<template>
    <App>
        <section>
            <!-- Header -->
            <div class="mb-16 text-center">
                <h2>Projects</h2>
                <p class="text-xl text-terminal-black-500">A collection of projects I've worked on.</p>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
                <div v-for="(project, index) in projects" :key="index" class="card">
                    <a aria-label="View project details" class="cursor-pointer">
                        <div class="group project" @click="openModal('modal-' + project.id)">

                            <img :src="project.image" alt="Project Image" class="project-image"
                                 :style="`object-position: ${project.bgPositionX} ${project.bgPositionY}`" />

                            <div class="project-title-backdrop"><h1>{{ project.title }}</h1></div>
                            <div class="project-info-wrapper">
                                <p>{{ project.byline }}</p>

                                <!-- Technologies -->
                                <div class="mt-2 mb-4 flex flex-wrap gap-2">
                                    <div v-for="tech in project.technologies" :key="tech"
                                         data-open="true"
                                         data-shape="pill"
                                         class="pill">
                                        <span class="leading-none my-1 mx-2.5">{{ tech }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <!-- Project Modal -->
                    <ProjectModal
                        :modalId="'modal-' + project.id"
                        class="modal-wrapper">
                        <div class="modal">
                            <div class="p-4 pb-2 flex justify-between items-center">
                                <h1>{{ project.title }}</h1>
                                <button @click="closeModal('modal-' + project.id)" aria-label="Close">
                                    <FontAwesomeIcon icon="fa-solid fa-xmark" class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="p-4 pt-2 text-terminal-black-600">{{ project.description }}</div>
                            <div class="p-4 flex justify-end gap-2">
                                <button @click="closeModal('modal-' + project.id)">Close</button>
                                <button class="btn-submit">Submit</button>
                            </div>
                        </div>
                    </ProjectModal>

                    <div :id="'modal-' + project.id"  class="modal-wrapper">
                        <div class="modal">
                            <div class="p-4 pb-2 flex justify-between items-center">
                                <h1>{{ project.title }}</h1>
                                <button @click="closeModal('modal-' + project.id)" aria-label="Close">
                                    <FontAwesomeIcon icon="fa-solid fa-xmark" class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="p-4 pt-2 text-terminal-black-600">{{ project.description }}</div>
                            <div class="p-4 flex justify-end gap-2">
                                <button @click="closeModal('modal-' + project.id)">Close</button>
                                <button class="btn-submit">Submit</button>
                            </div>
                        </div>
                    </div>

                    <!-- Project Modal -->
<!--                    <div :id="'modal-' + project.id"-->
<!--                         class="modal-wrapper"-->
<!--                         @click="closeModal('modal-' + project.id)"-->
<!--                         aria-hidden="true"-->
<!--                    >-->
<!--                        <div class="modal" @click.stop>-->
<!--                            <div class="p-4 pb-2 flex justify-between items-center">-->
<!--                                <h1>{{ project.title }}</h1>-->
<!--                                <button @click="closeModal('modal-' + project.id)" aria-label="Close">-->
<!--                                    <FontAwesomeIcon icon="fa-solid fa-xmark" class="h-6 w-6" aria-hidden="true" />-->
<!--                                </button>-->
<!--                            </div>-->
<!--                            <div class="p-4 pt-2 text-terminal-black-600">{{ project.description }}</div>-->
<!--                            <div class="p-4 flex justify-end gap-2">-->
<!--                                <button @click="closeModal('modal-' + project.id)">Close</button>-->
<!--                                <button class="btn-submit">Submit</button>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

                </div>
            </div>

        </section>

    </App>
</template>

<style scoped>
@reference "../../css/app.css";

.project {
    @apply overflow-hidden rounded-lg border-1 z-0 h-[260px] relative align-bottom;
}

.project-image {
    @apply absolute opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-100;
    @apply object-none z-10 bg-terminal-black;
    object-position: -30px -130px;
    /*@apply saturate-100 transition-saturate duration-300 ease-in-out group-hover:saturate-0;*/
    @apply blur-xs transition-[blur] duration-300 ease-in-out group-hover:blur-none;
}

.project-info-wrapper {
    @apply absolute bottom-0 z-50 text-white px-4 bg-terminal-black w-full;
    @apply bg-gradient-to-t from-black via-terminal-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100;
}

.project-title-backdrop {
    @apply absolute w-[98%] rounded-md p-0.5 z-20 m-1 mt-15;
    @apply border-1 border-terminal-black-700 border-s-0 border-t-0;
    @apply transition-[border] duration-300 ease-in-out group-hover:border-transparent;

    h1 {
        @apply p-1 ps-8 backdrop-blur-sm border-1 border-blue-100 rounded-md;
        @apply backdrop-filter bg-white/5 transition-[bg-white] duration-300 ease-in-out group-hover:bg-white/45;
    }
}

.pill {
    @apply inline-flex w-max items-center border select-none rounded-md;
    @apply data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm;
}

.modal-wrapper {
    /*@apply fixed inset-0 z-[60] grid h-screen w-screen place-items-center bg-white/5 backdrop-blur-sm;*/
    /*@apply fixed inset-0 z-[60] grid h-screen w-screen place-items-center bg-white/5 opacity-0 backdrop-blur-sm transition-opacity duration-300;*/
    /*@apply flex justify-center items-center opacity-0 transition-opacity duration-300 ease-out z-[999] pointer-events-none;*/
    /*@apply fixed inset-0 pointer-events-none;*/
    /*@apply grid h-screen w-screen place-items-center backdrop-opacity-10 opacity-0 backdrop-blur-sm transition-opacity duration-300;*/

    .modal {
        /*
        @apply relative bg-white rounded-xl shadow-2xl shadow-terminal-black-950/5 border-1 border-terminal-black-200 w-3/4 scale-95;
        */
        /*@apply relative rounded-md overflow-hidden shadow-sm w-3/4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;*/
    }

    .modal-header {
        /*
        @apply p-4 pb-2 flex justify-between items-center;
        */
    }

    .modal-content {
        /*
        @apply p-4 pt-2 text-white bg-terminal-black;
        */
    }

    h1 {
        /*
        @apply text-lg text-terminal-black-800 font-semibold;
        */
    }

    button {
        /*@apply inline-grid place-items-center align-middle text-center;*/
        /*@apply transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none;*/
        /*@apply text-terminal-black-200 hover:bg-terminal-black/10;*/
        /*@apply border-1 border-transparent hover:border-terminal-black/50 shadow-none hover:shadow-none outline-none;*/

        /*
        @apply rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none;
        */
    }

    .btn-submit {
        /*@apply inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center;*/
        /*@apply transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed;*/
        /*@apply data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4;*/
        /*@apply shadow-sm hover:shadow-md bg-terminal-black-800 border-terminal-black-800 text-terminal-black-50;*/
        /*@apply hover:bg-terminal-black-700 hover:border-terminal-black-700;*/
    }
}
</style>
