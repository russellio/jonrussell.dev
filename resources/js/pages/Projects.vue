<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Layout from '@/layouts/Layout.vue';
import { XMarkIcon } from '@heroicons/vue/20/solid';

// Global modal functions are available via window object
declare global {
    interface Window {
        openModal: (modalId: string) => void;
        closeModal: (modalId: string) => void;
    }
}

const openModal = (modalId: string) => {
    if (typeof window !== 'undefined' && window.openModal) {
        window.openModal(modalId);
    }
};

const closeModal = (modalId: string) => {
    if (typeof window !== 'undefined' && window.closeModal) {
        window.closeModal(modalId);
    }
};

const projects = [
    {
        id: 'project-dod',
        title: 'DoD Budgeting Application',
        byline: 'SaaS budgeting platform supporting the Navy\'s Strategic Systems Programs.',
        description:
            'As an internal, web-based SaaS platform supporting the Navy\'s Strategic Systems Programs (SSP), this SaaS ' +
            'application managed intricate budget packages spanning appropriations, contracts, and fiscal requirements across multiple years.',
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
            'At Glen Raven, I developed a centralized API gateway with OAuth2 authentication, rate limiting, and request routing. Handles ' +
            'authentication for multiple client applications with JWT tokens and refresh mechanisms.',
        technologies: ['Laravel/Lumen', 'JWT', 'PHP', 'MySQL', 'Rest API'],
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
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'docs', label: 'API Docs', icon: 'mdi-book', url: '#' }
        ]
    },
    {
        id: 'project-sms',
        title: 'SMS Administrator',
        byline: 'Inclement weather and office closure notification system',
        description: '',
        technologies: ['Laravel', 'PHP', 'Vue.js'],
        company: 'Digital Insight',
        icon: '',
        image: 'https://static.photos/monochrome/640x360/172',
        bgImage: 'https://static.photos/monochrome/640x360/172',
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
        company: 'Digital Insight',
        icon: '',
        image: 'https://static.photos/monochrome/640x360/253',
        bgImage: 'https://static.photos/monochrome/640x360/253',
        bgPositionX: '-30px',
        bgPositionY: '-130px',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'docs', label: 'Documentation', icon: 'mdi-book', url: '#' }
        ]
    },
    {
        id: 'project-sms',
        title: 'SMS Administrator',
        byline: 'Inclement weather and office closure notification system',
        description: '',
        title: 'Project Manager Dashboard',
        description: 'Developed a centralized API gateway with OAuth2 authentication, rate limiting, and request routing. Handles authentication for multiple client applications with JWT tokens and refresh mechanisms.',
        technologies: ['Laravel', 'PHP', 'Redis', 'JWT', 'OAuth2'],
        company: 'Digital Insight',
        icon: '',
        image: 'https://static.photos/monochrome/640x360/56',
        bgImage: 'https://static.photos/monochrome/640x360/56',
        bgPositionX: '-30px',
        bgPositionY: '-130px',
        links: [
            { type: 'github', label: 'GitHub', icon: 'mdi-github', url: '#' },
            { type: 'docs', label: 'API Docs', icon: 'mdi-book', url: '#' }
        ]
    }
];
</script>

<template>
    <Head title="Jon Russell - Senior Software Engineer - Projects" />
    <Layout>
        <section>
            <div class="section-wrapper">
                <div class="section-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                    </svg>
                </div>

                <!-- Header -->
                <div class="mb-16 text-center">
                    <h2>Projects</h2>
                    <p class="text-xl text-terminal-black-500">A collection of projects I've worked on.</p>
                </div>

                <!-- Projects Grid -->
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
                    <div v-for="(project, index) in projects" :key="index" class="card">

                        <a type="button" aria-label="View project details" class="cursor-pointer">
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

                    </div>
                </div>

                <div class="section-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <!-- Project Modals -->
            <div v-for="(project, index) in projects" :key="index" :id="'modal-' + project.id" class="modal-wrapper"
                 @click="closeModal('modal-' + project.id)" aria-hidden="true">

                <div class="modal" @click.stop>
                    <div class="p-4 pb-2 flex justify-between items-center">
                        <h1>{{ project.title }}</h1>
                        <button @click="closeModal('modal-' + project.id)" aria-label="Close">
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="p-4 pt-2 text-terminal-black-600">{{ project.description }}</div>
                    <div class="p-4 flex justify-end gap-2">
                        <button @click="closeModal('modal-' + project.id)">Close</button>
                        <button class="btn-submit">Submit</button>
                    </div>
                </div>

            </div>

        </section>

    </Layout>
</template>

<style scoped>
@reference "../../css/app.css";


.project {
    @apply overflow-hidden rounded-lg border-1 z-0 h-[260px] relative align-bottom;
}

.project-image {
    @apply absolute opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-100;
    @apply object-none z-10;
    object-position: -30px -130px;
    /*@apply saturate-100 transition-saturate duration-300 ease-in-out group-hover:saturate-0;*/
    /*@apply blur-xs transition-blur duration-300 ease-in-out group-hover:blur-none;*/
}

.project-info-wrapper {
    /*inset-0 flex items-end*/
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

.section-top, .section-bottom {
    @apply absolute left-0 overflow-hidden;
    width: 101%;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: 115%;
        height: 70px;
    }

    .shape-fill {
        fill: #041028;
    }
}

.section-top {
    top: 0;
    transform: rotate(180deg);
}

.section-bottom {
    bottom: 0;
    transform: scaleX(-1);

    svg {
        height: 55px;
    }
}

/* override default styles */
.section-wrapper {
    @apply relative mx-auto w-9/10 rounded-xl bg-terminal-black-50 pt-12 pb-16;
}

.modal-wrapper {
    @apply fixed inset-0 bg-terminal-black-950/50 flex justify-center items-center opacity-0 pointer-events-none;
    @apply transition-opacity duration-300 ease-out z-[9999];

    .modal {
        @apply bg-white rounded-xl shadow-2xl shadow-terminal-black-950/5 border border-terminal-black-200 w-1/3 scale-95;
    }

    h1 {
        @apply text-lg text-terminal-black-800 font-semibold;
    }

    button {
        /*@apply inline-grid place-items-center border align-middle select-none text-center;*/
        /*@apply transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none;*/
        /*@apply data-[shape=circular]:rounded-full text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent;*/
        /*@apply border-transparent text-terminal-black-200-foreground hover:bg-terminal-black-200/10;*/
        @apply hover:border-terminal-black-200/10 shadow-none hover:shadow-none outline-none absolute right-2 top-2;
    }
    .btn-submit {
        /*@apply inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center;*/
        /*@apply transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed;*/
        /*@apply data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4;*/
        /*@apply shadow-sm hover:shadow-md bg-terminal-black-800 border-terminal-black-800 text-terminal-black-50;*/
        @apply hover:bg-terminal-black-700 hover:border-terminal-black-700;
    }
}
</style>
