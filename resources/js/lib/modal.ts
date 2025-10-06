/**
 * Global modal toggle function
 * Toggles the visibility of a modal by its ID
 * @param modalId - The ID of the modal to toggle (e.g., 'modal-project-digital')
 */
export function toggleModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`Modal with ID "${modalId}" not found`);
        return;
    }

    const isVisible = !modal.classList.contains('opacity-0');
    
    if (isVisible) {
        // Close modal
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100', 'pointer-events-auto');
        // Remove focus trap
        document.body.style.overflow = '';
    } else {
        // Open modal
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100', 'pointer-events-auto');
        // Add focus trap
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Open a specific modal
 * @param modalId - The ID of the modal to open
 */
export function openModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`Modal with ID "${modalId}" not found`);
        return;
    }

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
}

/**
 * Close a specific modal
 * @param modalId - The ID of the modal to close
 */
export function closeModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`Modal with ID "${modalId}" not found`);
        return;
    }

    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = '';
}

/**
 * Close all modals
 */
export function closeAllModals(): void {
    const modals = document.querySelectorAll('[id^="modal-"]');
    modals.forEach(modal => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100', 'pointer-events-auto');
    });
    document.body.style.overflow = '';
}

// Make functions available globally
declare global {
    interface Window {
        toggleModal: typeof toggleModal;
        openModal: typeof openModal;
        closeModal: typeof closeModal;
        closeAllModals: typeof closeAllModals;
    }
}

// Attach to window object for global access
if (typeof window !== 'undefined') {
    window.toggleModal = toggleModal;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.closeAllModals = closeAllModals;

    // Add keyboard support for closing modals with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeAllModals();
        }
    });
}
