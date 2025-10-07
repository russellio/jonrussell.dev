<script setup lang="ts">
import { closeModal } from '@/composables/modal';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
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

const modalId = 'modal-' + props.modalId;
</script>

<template>

    <div :id="modalId" class="modal-wrapper"
         @click="closeModal(modalId)"
         :data-dialog-backdrop="modalId"
         data-dialog-backdrop-close="true"
         aria-hidden="true">

        <div class="modal"
             :data-dialog="modalId"
             @click.stop
        >
            <div class="modal-header">
                <h1>{{ props.title }}</h1>
                <button @click="closeModal(modalId)" aria-label="Close">
                    <FontAwesomeIcon icon="fa-outline fa-xmark" class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            <div class="modal-content">

                <slot />

            </div>
            <div class="p-4 flex justify-center gap-2">
                <button type="button" @click="closeModal(modalId)">Close</button>
                <button class="btn-submit">Submit</button>
            </div>
        </div>
    </div>

</template>

<style scoped>
@reference "../../css/app.css";

.modal-wrapper {
    @apply fixed inset-0 z-[60] grid h-screen w-screen place-items-center bg-white/5 opacity-100 backdrop-blur-sm transition-opacity duration-300;

    /*@apply flex justify-center items-center opacity-0 transition-opacity duration-300 ease-out z-[999] pointer-events-none;*/
    /*@apply fixed inset-0 pointer-events-none;*/
    /*@apply grid h-screen w-screen place-items-center backdrop-opacity-10 opacity-0 backdrop-blur-sm transition-opacity duration-300;*/

    .modal {
        @apply relative bg-white rounded-xl shadow-2xl shadow-terminal-black-950/5 border-1 border-terminal-black-200 w-3/4 scale-95;
        /*@apply relative rounded-md overflow-hidden shadow-sm w-3/4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;*/
    }

    .modal-header {
        @apply p-4 pb-2 flex justify-between items-center;
    }

    .modal-content {
        @apply p-4 pt-2 text-white bg-terminal-black;
    }

    h1 {
        @apply text-lg text-terminal-black-800 font-semibold;
    }

    button {
        /*@apply inline-grid place-items-center align-middle text-center;*/
        /*@apply transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none;*/
        /*@apply text-terminal-black-200 hover:bg-terminal-black/10;*/
        /*@apply border-1 border-transparent hover:border-terminal-black/50 shadow-none hover:shadow-none outline-none;*/

        @apply rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none;
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
