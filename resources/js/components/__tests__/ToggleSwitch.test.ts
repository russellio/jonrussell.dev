import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ToggleSwitch from '../ToggleSwitch.vue';

describe('ToggleSwitch.vue', () => {
    it('should render with default props', () => {
        const wrapper = mount(ToggleSwitch);
        expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
    });

    it('should have modelValue as false by default', () => {
        const wrapper = mount(ToggleSwitch);
        const input = wrapper.find('input[type="checkbox"]');
        expect((input.element as HTMLInputElement).checked).toBe(false);
    });

    it('should set modelValue to true when prop is true', () => {
        const wrapper = mount(ToggleSwitch, {
            props: {
                modelValue: true,
            },
        });
        const input = wrapper.find('input[type="checkbox"]');
        expect((input.element as HTMLInputElement).checked).toBe(true);
    });

    it('should display label when provided', () => {
        const wrapper = mount(ToggleSwitch, {
            props: {
                label: 'Test Label',
            },
        });
        expect(wrapper.text()).toContain('Test Label');
    });

    it('should not display label when not provided', () => {
        const wrapper = mount(ToggleSwitch);
        expect(wrapper.find('span').exists()).toBe(false);
    });

    it('should emit update:modelValue when checkbox is toggled', async () => {
        const wrapper = mount(ToggleSwitch, {
            props: {
                modelValue: false,
            },
        });
        const input = wrapper.find('input[type="checkbox"]');
        await input.setValue(true);
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue')[0]).toEqual([true]);
    });

    it('should update internal value when modelValue prop changes', async () => {
        const wrapper = mount(ToggleSwitch, {
            props: {
                modelValue: false,
            },
        });
        await wrapper.setProps({ modelValue: true });
        const input = wrapper.find('input[type="checkbox"]');
        expect((input.element as HTMLInputElement).checked).toBe(true);
    });

    it('should apply bold class to label when toggle is active', async () => {
        const wrapper = mount(ToggleSwitch, {
            props: {
                modelValue: false,
                label: 'Test Label',
            },
        });
        let span = wrapper.find('span');
        expect(span.classes()).not.toContain('font-bold');

        await wrapper.setProps({ modelValue: true });
        span = wrapper.find('span');
        expect(span.classes()).toContain('font-bold');
    });

    it('should handle multiple toggles', async () => {
        const wrapper = mount(ToggleSwitch, {
            props: {
                modelValue: false,
            },
        });
        const input = wrapper.find('input[type="checkbox"]');

        await input.setValue(true);
        expect(wrapper.emitted('update:modelValue')[0]).toEqual([true]);

        await input.setValue(false);
        expect(wrapper.emitted('update:modelValue')[1]).toEqual([false]);
    });
});
