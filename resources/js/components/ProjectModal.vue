<script setup lang="ts">
import '../../css/modal.css';
import { useModal } from '@/composables/useModal';
const { closeModal } = useModal();

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faXmark);

const props = defineProps({
    count: Number,
    modalId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    project: {
        type: Object,
        required: true,
    },
    showSubmit: {
        type: Boolean,
        required: false,
        default: false
    }
});

const modalId = props.modalId;
const title = props.title ?? props.project.title;
</script>

<template>
    <div
        :id="modalId"
        class="modal-wrapper"
        @click="closeModal(modalId)"
    >
        <div class="modal" @click.stop>
            <div class="modal-header">
                <h1>project: <span>{{ title }}</span></h1>
                <button @click="closeModal(modalId)" aria-label="Close">
                    <FontAwesomeIcon icon="fa-outline fa-xmark" class="h-6 w-6" />
                </button>
            </div>

            <div class="modal-content">
                <slot />
            </div>

            <div class="modal-footer">
                <button @click="closeModal(modalId)">Close</button>
                <button v-if="props.showSubmit" class="btn-submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "../../css/app.css";
</style>
