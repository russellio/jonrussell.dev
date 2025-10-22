<script setup lang="ts">
import '../../../css/modal.css';
import { ref } from 'vue';
import type { Image } from '@/js/types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faXmark);

const isImageModalOpen = ref(false);
const currentImage = ref<Image | null>(null);

const openImageModal = (image: Image) => {
    if (!image?.src) return;
    currentImage.value = image;
    isImageModalOpen.value = true;
};

const closeImageModal = () => {
    isImageModalOpen.value = false;
};

defineExpose({
    openImageModal,
    closeImageModal
});
</script>

<template>
    <div class="image-modal-wrapper" :class="isImageModalOpen ? 'flex' : 'hidden'">
        <div class="image-modal">
            <button @click="closeImageModal()" aria-label="Close">
                <FontAwesomeIcon icon="fa-outline fa-xmark" class="h-4 w-4" />
            </button>
            <img v-if="currentImage?.src"
                 :src="`/images/projects/${currentImage.src}`"
                 :title="currentImage.title"
                 :alt="currentImage.alt"
            />
        </div>
    </div>
</template>

<style scoped>
@reference "@/css/app.css";

.image-modal-wrapper {
    @apply fixed inset-0 bg-black/75 items-center justify-center p-4 z-50;

    .image-modal {
        @apply relative bg-white p-2 rounded-lg max-w-3xl max-h-full;
    }

    button {
        @apply absolute top-1 right-1;
    }
}
</style>
