<script setup lang="ts">
import Modal from '@/layouts/Modal.vue';
const props = defineProps({
    modalId: {
        type: String,
        required: true
    },
    project: {
        type: Object,
        required: false
    }
})
const title = props.project?.title ?? props.modalId.toUpperCase();
</script>

<template>
    <Modal :modalId="props.modalId" :title="title">
        <!-- Contact Modal -->
        <div class="modal-content">

            <div class="flex flex-col gap-4 p-6">
                <div class="w-full max-w-sm min-w-[200px]">
                    <label class="block mb-2 text-sm">
                        Email
                    </label>
                    <input type="email" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                </div>

                <div class="w-full max-w-sm min-w-[200px]">
                    <label class="block mb-2 text-sm">
                        Password
                    </label>
                    <input type="password" class="w-full bg-transparent text-sm border-1 border-terminal-black-200 rounded-md px-3 py-2 transition duration-300 ease shadow-sm focus:shadow" placeholder="Your Password" />
                </div>
            </div>

        </div>

    </Modal>

</template>

<style scoped>
@reference "../../css/app.css";

</style>
