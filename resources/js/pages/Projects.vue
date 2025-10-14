<script setup lang="ts">
import App from '@/App.vue';
import ProjectModal from '@/components/ProjectModal.vue';
import { useModal } from '@/composables/useModal';
import { computed, ref } from 'vue';
import projectData from '@/data/projects.json';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
library.add(faAward, faCaretRight, faArrowUpRightFromSquare);

const { isOpen, openModal } = useModal();

const projects = ref(projectData);
const selectedProject = ref<any>(null);

const isModalOpen = computed(() => isOpen('project-modal'));

const openProjectModal = (project: any) => {
    selectedProject.value = project;
    openModal('project-modal');
};

const projectHasProperty = (project: any, property: any) => {
    return project.hasOwnProperty(property) && project[property].length > 0;
};

const hasModalLeftContent = (project: any) => {
    return projectHasProperty(project, 'image');
};

const hasModalRightContent = (project: any) => {
    return projectHasProperty(project, 'skills')
        || projectHasProperty(project, 'technologies')
        || projectHasProperty(project, 'tools');
};
</script>

<template>
    <App>
        <section>
            <!-- Page Header -->
            <div class="mb-16 mt-10 text-center">
                <h2>Projects</h2>
                <p class="text-xl text-terminal-black-500">A collection of projects I've worked on.</p>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
                <div v-for="(project, index) in projects" :key="index" class="card">

                    <a aria-label="View project details" class="cursor-pointer">
                        <div class="group project" @click="openProjectModal(project)">
                            <img :src="project.bgImage" alt="Project Image" class="project-image"
                                 :style="`object-position: ${project.bgPositionX} ${project.bgPositionY}`" />

                            <div class="project-title-backdrop">
                                <h1>{{ project.title }}</h1>

                                <div v-if="project.awards" class="awards">
                                    <div v-for="(award, index) in project.awards" :key="index"
                                         class="pill">
                                        <span class="leading-none my-1 mx-2.5">
                                            <FontAwesomeIcon icon="fa-solid fa-award" class="text-gold" />
                                            {{ award }}
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div class="project-info-wrapper">
                                <p>{{ project.byline }}</p>

                                <!-- Technologies -->
                                <div v-if="project.technologies" class="mt-2 mb-4 flex flex-wrap gap-2">
                                    <div v-for="(tech, index) in project.technologies" :key="index" class="pill">
                                        <span class="leading-none my-1 mx-2.5">{{ tech }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>

        </section>

        <!-- Single Project Modal -->
        <ProjectModal
            v-if="isModalOpen && selectedProject"
            modalId="project-modal"
            :project="selectedProject"
        >
            <div v-if="hasModalLeftContent(selectedProject)" class="modal-left">
                <div v-if="projectHasProperty(selectedProject, 'image')" class="primary-image">
                    <img :src="selectedProject.image" alt="Project Image" />
                </div>
            </div>

            <div v-if="hasModalRightContent(selectedProject)" class="modal-right">
                <div v-if="projectHasProperty(selectedProject, 'skills')" class="skills">
                    <h3>skills:</h3>
                    <ul class="fa-ul">
                        <li v-for="(skill, index) in selectedProject.skills" :key="index">
                            <span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" class="text-gold" /></span>
                            {{ skill }}
                        </li>
                    </ul>
                </div>

                <div v-if="projectHasProperty(selectedProject, 'technologies')" class="technologies">
                    <h3>tech:</h3>
                    <ul class="fa-ul">
                        <li v-for="(tech, index) in selectedProject.technologies" :key="index">
                            <span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" class="text-gold" /></span>
                            {{ tech }}
                        </li>
                    </ul>
                </div>

                <div v-if="projectHasProperty(selectedProject, 'tools')" class="tools">
                    <h3>tools:</h3>
                    <ul class="fa-ul">
                        <li v-for="(tool, index) in selectedProject.tools" :key="index">
                            <span class="fa-li"><FontAwesomeIcon :icon="faCaretRight" class="text-gold" /></span>
                            {{ tool }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="modal-center">
                <div v-if="projectHasProperty(selectedProject, 'company')" class="company">
                    <h3>company: <span>{{ selectedProject.company }}</span></h3>
                </div>

                <div v-if="projectHasProperty(selectedProject, 'description')" class="description">
                    <h3>description:</h3>
                    <div v-html="selectedProject.description" />
                </div>

                <div v-if="projectHasProperty(selectedProject, 'links')" class="links">
                    <h3>links:</h3>
                    <ul class="fa-ul">
                        <li v-for="(link, index) in selectedProject.links" :key="index">
                            <a :href="link.url" target="_blank">{{ link.title }}</a>
                            <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="text-gold ps-2" size="sm" />
                        </li>
                    </ul>
                </div>
            </div>

            <div class="clear-both" />
        </ProjectModal>

    </App>
</template>

<style scoped>
@reference "../../css/app.css";

.modal-center {
    @apply grid grid-cols-1 gap-0 h-full;

    h3 {
        @apply font-bold mt-2 text-lg font-space-mono;

        span {
            @apply font-normal;
            font-family: Roboto, sans-serif;
        }
    }

    .links {
        ul {
            list-style-type: disc;
        }
        li .text-gold {
            @apply ps-2;
        }
    }
}

.modal-left {
    @apply float-start grid grid-cols-1 text-sm me-4 pt-4 w-1/6 h-full;
    @apply float-start grid grid-cols-1 text-sm me-4 pt-4 w-1/6 h-full;

    h3 {
        @apply font-bold mt-2 text-sm font-space-mono;
    }
}

.modal-right {
    @apply float-end grid grid-cols-1 text-sm ms-4 pt-2 w-1/6;

    h3 {
        @apply font-bold mt-3 text-sm font-space-mono;
    }
}

.description {
    @apply text-sm;
}

.project {
    @apply overflow-hidden rounded-lg border-1 border-terminal-black-700 z-0 h-[260px] relative align-bottom;
}

.project-image {
    @apply absolute opacity-40 transition-opacity duration-300 ease-in-out group-hover:opacity-100;
    @apply object-none z-10 bg-terminal-black;
    object-position: -30px -130px;
    /*@apply saturate-100 transition-saturate duration-300 ease-in-out group-hover:saturate-0;*/
    /*@apply blur-xs transition-[blur] duration-300 ease-in-out group-hover:blur-none;*/
    @apply grayscale-0 transition-[grayscale] duration-300 ease-in-out group-hover:grayscale-100;
}

.project-info-wrapper {
    @apply absolute bottom-0 z-50 text-white px-4 pt-2 bg-terminal-black w-full border-t-1 border-terminal-black-300;
    @apply bg-gradient-to-t from-black via-terminal-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100;
}

.project-title-backdrop {
    @apply absolute w-[98%] rounded-md p-0.5 z-20 m-1 mt-15;
    @apply border-1 border-terminal-black-700 border-s-0 border-t-0;
    @apply transition-all duration-300 ease-in-out group-hover:mt-5 group-hover:border-transparent;

    h1 {
        @apply p-1 ps-8 backdrop-blur-sm border-1 border-blue-100 rounded-md;
        @apply backdrop-filter bg-white/5 transition-[bg-white] duration-300 ease-in group-hover:bg-white/45;
    }

    div.awards {
        @apply absolute mt-2 pe-2 grid grid-cols-1 justify-items-end w-full opacity-90;

        .pill {
            @apply bg-dark-blue font-bold w-max border-1 border-white text-white;
        }
    }
}

.pill {
    @apply inline-flex w-max items-center border-1 border-terminal-black-300 select-none;
    @apply rounded-full text-xs p-0.5 shadow-sm;
}
</style>
