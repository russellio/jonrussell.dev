<script setup lang="ts">
import ImageModal from '@/components/ImageModal.vue';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';
import '../../css/modal.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare, faAward, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAward, faCaretRight, faArrowUpRightFromSquare);

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
});

const imageModalRef = ref<InstanceType<typeof ImageModal> | null>(null);

const projectHasProp = (project: any, property: any) => {
    return project.hasOwnProperty(property) && project[property].length > 0;
};

const hasModalLeft = (project: any) => {
    return projectHasProp(project, 'primaryImage');
};

const hasModalRight = (project: any) => {
    return projectHasProp(project, 'skills') || projectHasProp(project, 'technologies') || projectHasProp(project, 'tools');
};

const title = `project: <span>${props.project.title}</span>`;
</script>

<template>
    <Modal modalId="project-modal" :title="title">
        <div v-if="hasModalLeft(project)" class="modal-left">
            <div v-if="projectHasProp(project, 'primaryImage')" class="primary-image" @click="imageModalRef?.openImageModal(project.primaryImage)">
                <img :src="`/images/projects/${project.primaryImage}`" :title="project.primaryImage.title" :alt="project.primaryImage.alt ?? ''" />
            </div>
            <div v-if="projectHasProp(project, 'images')" class="thumbnails">
                <div v-for="(image, index) in project.images" :key="index" class="thumbnail" @click="imageModalRef?.openImageModal(image)">
                    <img v-if="image?.src" :src="`/images/projects/${image.src}`" :title="image.title" :alt="image.alt" />
                </div>
            </div>
        </div>

        <div class="modal-center">
            <div v-if="projectHasProp(project, 'company')" class="company">
                <h3>
                    company: <span>{{ project.company }}</span>
                </h3>
            </div>

            <div v-if="projectHasProp(project, 'description')" class="description">
                <h3>description:</h3>
                <div v-html="project.description" />
            </div>

            <div v-if="projectHasProp(project, 'links')" class="links">
                <h3>links:</h3>
                <ul class="fa-ul">
                    <li v-for="(link, index) in project.links" :key="index">
                        <a :href="link.url" target="_blank">{{ link.title }}</a>
                        <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="ps-2 text-gold" size="sm" />
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="hasModalRight(project)" class="modal-right">
            <div v-if="projectHasProp(project, 'skills')" class="skills">
                <h3>skills:</h3>
                <ul class="fa-ul">
                    <li v-for="(skill, index) in project.skills" :key="index">
                        <span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" class="text-gold" /></span>
                        {{ skill }}
                    </li>
                </ul>
            </div>

            <div v-if="projectHasProp(project, 'technologies')" class="technologies">
                <h3>tech:</h3>
                <ul class="fa-ul">
                    <li v-for="(tech, index) in project.technologies" :key="index">
                        <span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" class="text-gold" /></span>
                        {{ tech }}
                    </li>
                </ul>
            </div>

            <div v-if="projectHasProp(project, 'tools')" class="tools">
                <h3>tools:</h3>
                <ul class="fa-ul">
                    <li v-for="(tool, index) in project.tools" :key="index">
                        <span class="fa-li"><FontAwesomeIcon :icon="faCaretRight" class="text-gold" /></span>
                        {{ tool }}
                    </li>
                </ul>
            </div>
        </div>

        <ImageModal ref="imageModalRef" />
    </Modal>
</template>

<style scoped>
@reference "../../css/app.css";

h3 {
    @apply mt-2 font-space-mono text-sm font-bold;
}

.primary-image {
    img {
        @apply w-full object-fill;
    }
}

.description {
    @apply text-sm;
}

.thumbnails {
    @apply grid grid-cols-2 gap-1;

    .thumbnail {
        @apply mt-1 max-h-[80px] max-w-[80px] cursor-pointer overflow-hidden;
    }
}
</style>
