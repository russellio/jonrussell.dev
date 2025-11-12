import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useModal } from '../useModal';

describe('useModal', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        // Reset body style
        document.body.style.overflow = '';
    });

    it('should open a modal', () => {
        const { openModal, isOpen } = useModal();
        openModal('test-modal');
        expect(isOpen('test-modal')).toBe(true);
    });

    it('should close a modal', () => {
        const { openModal, closeModal, isOpen } = useModal();
        openModal('test-modal');
        closeModal('test-modal');
        expect(isOpen('test-modal')).toBe(false);
    });

    it('should toggle a modal', () => {
        const { toggleModal, isOpen } = useModal();
        toggleModal('test-modal');
        expect(isOpen('test-modal')).toBe(true);
        toggleModal('test-modal');
        expect(isOpen('test-modal')).toBe(false);
    });

    it('should close all modals', () => {
        const { openModal, closeAllModals, isOpen } = useModal();
        openModal('modal-1');
        openModal('modal-2');
        openModal('modal-3');
        closeAllModals();
        expect(isOpen('modal-1')).toBe(false);
        expect(isOpen('modal-2')).toBe(false);
        expect(isOpen('modal-3')).toBe(false);
    });

    it('should add focus trap when opening a modal', () => {
        const { openModal } = useModal();
        openModal('test-modal');
        expect(document.body.style.overflow).toBe('hidden');
    });

    it('should remove focus trap when closing a modal', () => {
        const { openModal, closeModal } = useModal();
        openModal('test-modal');
        closeModal('test-modal');
        expect(document.body.style.overflow).toBe('');
    });

    it('should remove focus trap when closing all modals', () => {
        const { openModal, closeAllModals } = useModal();
        openModal('test-modal');
        closeAllModals();
        expect(document.body.style.overflow).toBe('');
    });

    it('should provide access to modalStore', () => {
        const { modalStore } = useModal();
        expect(modalStore).toBeDefined();
        expect(modalStore.openModals).toBeDefined();
    });

    it('should handle toggle with focus trap management', () => {
        const { toggleModal } = useModal();
        toggleModal('test-modal');
        expect(document.body.style.overflow).toBe('hidden');
        toggleModal('test-modal');
        expect(document.body.style.overflow).toBe('');
    });
});
