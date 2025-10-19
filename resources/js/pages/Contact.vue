<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';
import '../../css/modal.css';

const form = ref({
    email: '',
    subject: '',
    message: '',
});

const isLoading = ref(false);
const errors = ref({});
const successMessage = ref('');

const submitForm = async () => {
    isLoading.value = true;
    errors.value = {};
    successMessage.value = '';

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                Accept: 'application/json',
            },
            body: JSON.stringify(form.value),
        });

        const data = await response.json();

        if (!response.ok) {
            if (response.status === 422) {
                errors.value = data.errors || {};
            }
            throw new Error(data.message || 'Failed to send message');
        }

        form.value = { email: '', subject: '', message: '' };
        successMessage.value = data.message || 'Message sent successfully!';

        setTimeout(() => {
            successMessage.value = '';
        }, 5000);
    } catch (error) {
        console.error('Error submitting form:', error);
        if (!errors.value || Object.keys(errors.value).length === 0) {
            errors.value.general = error.message || 'Failed to send message. Please try again.';
        }
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <Modal modalId="contact-modal"
           title="Contact Me"
           :showSubmit="true"
           submitText="Send Message"
           :isLoading="isLoading"
           @submit="submitForm"
    >
        <!-- Contact Modal -->
        <div class="flex w-full flex-col gap-4 p-6">
            <div v-if="successMessage" class="success">
                {{ successMessage }}
            </div>

            <div v-if="errors.general" class="error">
                {{ errors.general }}
            </div>

            <div>
                <label for="email">Email:</label>
                <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="your.email@example.com"
                    :class="{ 'border-red-500': errors.email }"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email[0] }}</p>
            </div>

            <div>
                <label for="subject">Subject:</label>
                <input id="subject" v-model="form.subject" type="text" placeholder="Hey!!!"
                       :class="{ 'border-red-500': errors.subject }" />
                <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject[0] }}</p>
            </div>

            <div>
                <label for="message">Message:</label>
                <textarea
                    id="message"
                    v-model="form.message"
                    placeholder="Your message here..."
                    rows="4"
                    :class="{ 'border-error': errors.message }"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm error">{{ errors.message[0] }}</p>
            </div>
        </div>
    </Modal>
</template>

<style scoped>
@reference "../../css/app.css";

label {
    @apply mb-2 block font-space-mono text-lg font-bold text-white;
}

input,
textarea {
    @apply font-mono;
    @apply w-full rounded-md border bg-white px-3 py-2 text-lg text-terminal-black;
    @apply placeholder:text-terminal-black-400 placeholder:italic;
    @apply focus:border-blue focus:shadow focus:outline-none;
}
</style>
