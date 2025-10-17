<script setup lang="ts">
import '../../css/modal.css';
import Modal from '@/components/Modal.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faAward, faCaretRight, faArrowUpRightFromSquare);

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
});

const projectHasProperty = (project: any, property: any) => {
    return project.hasOwnProperty(property) && project[property].length > 0;
};

const hasModalLeftContent = (project: any) => {
    return projectHasProperty(project, 'primaryImage');
};

const hasModalRightContent = (project: any) => {
    return projectHasProperty(project, 'skills')
        || projectHasProperty(project, 'technologies')
        || projectHasProperty(project, 'tools');
};

const title = `project: <span>${props.project.title}</span>`;
</script>

<template>

<Modal :project="project" modalId="project-modal" :title="title">

    <div v-if="hasModalLeftContent(project)" class="modal-left">
        <div v-if="projectHasProperty(project, 'primaryImage')" class="primary-image">
            <img :src="project.primaryImage" alt="Project Image" />
        </div>
        <div v-if="projectHasProperty(project, 'images')" class="thumbnails">
            <div v-for="(image, index) in project.images" :key="index" class="thumbnail">
                <a :href="image.src" target="_blank"><img :src="image.src" :alt="image.alt" /></a>
            </div>
        </div>
    </div>

    <div class="modal-center">
        <div v-if="projectHasProperty(project, 'company')" class="company">
            <h3>company: <span>{{ project.company }}</span></h3>
        </div>

        <div v-if="projectHasProperty(project, 'description')" class="description">
            <h3>description:</h3>
            <div v-html="project.description" />
        </div>

        <div v-if="projectHasProperty(project, 'links')" class="links">
            <h3>links:</h3>
            <ul class="fa-ul">
                <li v-for="(link, index) in project.links" :key="index">
                    <a :href="link.url" target="_blank">{{ link.title }}</a>
                    <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="text-gold ps-2" size="sm" />
                </li>
            </ul>
        </div>
    </div>

    <div v-if="hasModalRightContent(project)" class="modal-right">
        <div v-if="projectHasProperty(project, 'skills')" class="skills">
            <h3>skills:</h3>
            <ul class="fa-ul">
                <li v-for="(skill, index) in project.skills" :key="index">
                    <span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" class="text-gold" /></span>
                    {{ skill }}
                </li>
            </ul>
        </div>

        <div v-if="projectHasProperty(project, 'technologies')" class="technologies">
            <h3>tech:</h3>
            <ul class="fa-ul">
                <li v-for="(tech, index) in project.technologies" :key="index">
                    <span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" class="text-gold" /></span>
                    {{ tech }}
                </li>
            </ul>
        </div>

        <div v-if="projectHasProperty(project, 'tools')" class="tools">
            <h3>tools:</h3>
            <ul class="fa-ul">
                <li v-for="(tool, index) in project.tools" :key="index">
                    <span class="fa-li"><FontAwesomeIcon :icon="faCaretRight" class="text-gold" /></span>
                    {{ tool }}
                </li>
            </ul>
        </div>
    </div>

</Modal>

</template>

<style scoped>
@reference "../../css/app.css";

h3 {
    @apply font-bold mt-2 text-sm font-space-mono;
}

.primary-image {
    @apply p-1;

    img {
        @apply w-full object-fill;
    }
}

.description {
    @apply text-sm;
}

.thumbnails {

    .thumbnail {
        @apply inline-flex align-top justify-center w-1/2 mt-2;

        img {
            @apply max-w-[80px];
        }
    }
}
</style>
