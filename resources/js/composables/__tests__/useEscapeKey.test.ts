import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useEscapeKey } from '../useEscapeKey';
import { defineComponent, h } from 'vue';
import { mount } from '@vue/test-utils';

// Create a test component that uses useEscapeKey
const TestComponent = defineComponent({
    setup() {
        const callback = vi.fn();
        useEscapeKey(callback);
        return { callback };
    },
    render() {
        return h('div', 'Test');
    },
});

describe('useEscapeKey', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TestComponent);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should call callback when Escape key is pressed', async () => {
        const callback = wrapper.vm.callback;
        const event = new KeyboardEvent('keydown', { keyCode: 27 });
        window.dispatchEvent(event);
        expect(callback).toHaveBeenCalled();
    });

    it('should not call callback for other key codes', async () => {
        const callback = wrapper.vm.callback;
        const event = new KeyboardEvent('keydown', { keyCode: 13 }); // Enter key
        window.dispatchEvent(event);
        expect(callback).not.toHaveBeenCalled();
    });

    it('should add event listener on mount', () => {
        const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
        mount(TestComponent);
        expect(addEventListenerSpy).toHaveBeenCalledWith(
            'keydown',
            expect.any(Function)
        );
        addEventListenerSpy.mockRestore();
    });

    it('should remove event listener on unmount', () => {
        const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
        const comp = mount(TestComponent);
        comp.unmount();
        expect(removeEventListenerSpy).toHaveBeenCalledWith(
            'keydown',
            expect.any(Function)
        );
        removeEventListenerSpy.mockRestore();
    });

    it('should handle multiple Escape key presses', async () => {
        const callback = wrapper.vm.callback;
        const event1 = new KeyboardEvent('keydown', { keyCode: 27 });
        const event2 = new KeyboardEvent('keydown', { keyCode: 27 });
        window.dispatchEvent(event1);
        window.dispatchEvent(event2);
        expect(callback).toHaveBeenCalledTimes(2);
    });
});
