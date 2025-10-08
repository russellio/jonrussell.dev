<script setup lang="ts">
import '@/lib/modal';
import '../../css/modal.css';
// import { closeModal } from '@/composables/modal';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { isOpen } from '@/lib/modal';

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
    showModal: {
        type: Boolean,
        required: false,
        default: false
    }
})

const modalId = props.modalId;
const emit = defineEmits<{ close: [boolean] }>()

</script>

<template>
    <UModal
        v-if="isOpen(modalId)"
        :id="modalId"
        :close="{ onClick: () => emit('close', false) }"
        :title="`This modal was opened programmatically ${count} times`"
    >
        <template #header>
            <div class="modal-header">
                <h1>{{ props.title }}</h1>
                <button @click="closeModal(modalId)" aria-label="Close">
                    <FontAwesomeIcon icon="fa-outline fa-xmark" class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </template>

        <template #footer>
            <div class="flex gap-2">
                <UButton label="Cancel" @click="closeModal(modalId)" />
                <UButton label="Success" @click="closeModal(modalId)" />
            </div>
        </template>
    </UModal>

<!--    <div :id="modalId" class="modal-wrapper"-->
<!--         :data-dialog-backdrop="modalId"-->
<!--         data-dialog-backdrop-close="true"-->
<!--         aria-hidden="true">-->

<!--        <div class="modal"-->
<!--             :data-dialog="modalId"-->
<!--             @click.stop-->
<!--        >-->
<!--            <div class="modal-header">-->
<!--                <h1>{{ props.title }}</h1>-->
<!--                <button @click="closeModal(modalId)" aria-label="Close">-->
<!--                    <FontAwesomeIcon icon="fa-outline fa-xmark" class="h-6 w-6" aria-hidden="true" />-->
<!--                </button>-->
<!--            </div>-->

<!--            <div class="modal-content">-->
<!--                <slot />-->
<!--            </div>-->

<!--            <div class="p-4 flex justify-center gap-2">-->
<!--                <button type="button" @click="closeModal(modalId)">Close</button>-->
<!--                <button class="btn-submit">Submit</button>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<style scoped>
@reference "../../css/app.css";

</style>
