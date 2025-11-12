import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { useModalStore } from '../modalStore';

describe('modalStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should initialize with empty openModals set', () => {
        const store = useModalStore();
        expect(store.openModals.size).toBe(0);
    });

    it('should add a modal to openModals', () => {
        const store = useModalStore();
        store.addModal('test-modal');
        expect(store.openModals.has('test-modal')).toBe(true);
    });

    it('should remove a modal from openModals', () => {
        const store = useModalStore();
        store.addModal('test-modal');
        store.removeModal('test-modal');
        expect(store.openModals.has('test-modal')).toBe(false);
    });

    it('should toggle a modal (add if not present)', () => {
        const store = useModalStore();
        store.toggleModal('test-modal');
        expect(store.openModals.has('test-modal')).toBe(true);
    });

    it('should toggle a modal (remove if present)', () => {
        const store = useModalStore();
        store.addModal('test-modal');
        store.toggleModal('test-modal');
        expect(store.openModals.has('test-modal')).toBe(false);
    });

    it('should check if a modal is open', () => {
        const store = useModalStore();
        store.addModal('test-modal');
        expect(store.isModalOpen('test-modal')).toBe(true);
        expect(store.isModalOpen('other-modal')).toBe(false);
    });

    it('should handle multiple modals', () => {
        const store = useModalStore();
        store.addModal('modal-1');
        store.addModal('modal-2');
        store.addModal('modal-3');
        expect(store.openModals.size).toBe(3);
        expect(store.isModalOpen('modal-1')).toBe(true);
        expect(store.isModalOpen('modal-2')).toBe(true);
        expect(store.isModalOpen('modal-3')).toBe(true);
    });

    it('should not add duplicate modals', () => {
        const store = useModalStore();
        store.addModal('test-modal');
        store.addModal('test-modal');
        expect(store.openModals.size).toBe(1);
    });
});
