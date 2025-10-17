<script setup lang="ts">
import '../../css/modal.css';
import { useModal } from '@/composables/useModal';
const { closeModal } = useModal();

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faXmark);

const props = defineProps({
    modalId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    showSubmit: {
        type: Boolean,
        required: false,
        default: false
    }
});

</script>

<template>
    <div
        :id="props.modalId"
        class="modal-wrapper"
        @click="closeModal(props.modalId)"
    >
        <div class="modal" @click.stop>
            <div class="modal-header">
                <h1 v-html="props.title" />
                <button @click="closeModal(props.modalId)" aria-label="Close">
                    <FontAwesomeIcon icon="fa-outline fa-xmark" class="h-6 w-6" />
                </button>
            </div>

            <div class="modal-content">
                <slot />
            </div>

            <div class="modal-footer">
                <button @click="closeModal(props.modalId)">Close</button>
                <button v-if="props.showSubmit" class="btn-submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
