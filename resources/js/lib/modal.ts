import { useModalStore } from '@/stores/modalStore';

export function toggleModal(modalId: string): void {
  // const modalStore = useModalStore();
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`Modal with ID "${modalId}" not found (toggle)`);
        return;
    }

    if (modalStore.isModalOpen(modalId)) {
        // Close modal and remove focus trap
        modalStore.removeModal(modalId);
        document.body.style.overflow = '';
    } else {
        // Open modal and add focus trap
        modalStore.addModal(modalId);
        document.body.style.overflow = 'hidden';
    }
}

export function openModal(modalId: string): void {
  // const modalStore = useModalStore();
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`Modal with ID "${modalId}" not found (open)`);
        return;
    }
    modalStore.addModal(modalId);
    document.body.style.overflow = 'hidden';
}

export function closeModal(modalId: string): void {
  // const modalStore = useModalStore();
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`Modal with ID "${modalId}" not found (close)`);
        return;
    }
    modalStore.removeModal(modalId);

    const emit = defineEmits<{ close: [boolean] }>()
    emit('close', false);
    document.body.style.overflow = '';
}

export function closeAllModals(): void {
  // const modalStore = useModalStore();
    const modals = document.querySelectorAll('[id^="modal-"]');
    modals.forEach(modal => {
        modalStore.closeModal(modal.id);
    });
    document.body.style.overflow = '';
}

export function isOpen(modalId: string): boolean {
  const modalStore = useModalStore();
  const modal = document.getElementById(modalId);
  if (!modal) {
    console.warn(`Modal with ID "${modalId}" not found (isOpen)`);
    return false;
  }
  return modalStore.isModalOpen(modalId);
}

// // Make functions available globally
// declare global {
//     interface Window {
//         toggleModal: typeof toggleModal;
//         openModal: typeof openModal;
//         closeModal: typeof closeModal;
//         closeAllModals: typeof closeAllModals;
//     }
// }
//
// // Attach to window object for global access
// if (typeof window !== 'undefined') {
//     window.toggleModal = toggleModal;
//     window.openModal = openModal;
//     window.closeModal = closeModal;
//     window.closeAllModals = closeAllModals;
//
//     // Add keyboard support for closing modals with Escape key
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape') {
//             closeAllModals();
//         }
//     });
// }
