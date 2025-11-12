# Frontend Testing Guide

This project uses **Vitest** for unit testing Vue.js components and composables, with **Vue Test Utils** for component testing.

## Setup

Testing dependencies are already installed. To install them:

```bash
npm install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test -- --watch
```

### Run tests with UI
```bash
npm run test:ui
```

### Generate coverage report
```bash
npm run test:coverage
```

## Test Structure

Tests are organized alongside the code they test using the `__tests__` directory pattern:

```
resources/js/
├── components/
│   ├── __tests__/
│   │   └── ToggleSwitch.test.ts
│   └── ToggleSwitch.vue
├── composables/
│   ├── __tests__/
│   │   ├── useEscapeKey.test.ts
│   │   ├── useModal.test.ts
│   │   └── useScrollToSection.test.ts
│   ├── useEscapeKey.ts
│   ├── useModal.ts
│   └── useScrollToSection.ts
└── stores/
    ├── __tests__/
    │   └── modalStore.test.ts
    └── modalStore.ts
```

## Current Test Coverage

### Stores
- **modalStore.ts** - Full coverage of Pinia store actions and getters

### Composables
- **useModal.ts** - Modal open/close/toggle, focus trap management
- **useEscapeKey.ts** - Keyboard event handling and listener lifecycle
- **useScrollToSection.ts** - (Pending)

### Components
- **ToggleSwitch.vue** - Props, events, label rendering, state updates

## Writing New Tests

### Component Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyComponent from '../MyComponent.vue';

describe('MyComponent.vue', () => {
    it('should render correctly', () => {
        const wrapper = mount(MyComponent);
        expect(wrapper.find('div').exists()).toBe(true);
    });

    it('should emit event on click', async () => {
        const wrapper = mount(MyComponent);
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click')).toBeTruthy();
    });
});
```

### Composable Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { useMyComposable } from '../useMyComposable';

describe('useMyComposable', () => {
    it('should return expected value', () => {
        const { value } = useMyComposable();
        expect(value).toBe('expected');
    });
});
```

### Store Test Example

```typescript
import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { useMyStore } from '../myStore';

describe('myStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should update state', () => {
        const store = useMyStore();
        store.updateValue('new-value');
        expect(store.value).toBe('new-value');
    });
});
```

## Best Practices

1. **Test behavior, not implementation** - Focus on what the component/composable does, not how it does it
2. **Use descriptive test names** - Test names should clearly describe what is being tested
3. **Keep tests isolated** - Each test should be independent and not rely on other tests
4. **Mock external dependencies** - Use `vi.fn()` and `vi.mock()` for external dependencies
5. **Test edge cases** - Include tests for error states, empty states, and boundary conditions
6. **Keep tests focused** - Each test should verify one behavior

## Debugging Tests

### Run a single test file
```bash
npm test -- resources/js/stores/__tests__/modalStore.test.ts
```

### Run tests matching a pattern
```bash
npm test -- --grep "useModal"
```

### Debug with Node inspector
```bash
node --inspect-brk ./node_modules/vitest/vitest.mjs
```

## CI/CD Integration

Tests should be run as part of your CI/CD pipeline. Add to your GitHub Actions workflow:

```yaml
- name: Run frontend tests
  run: npm test
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Vue Test Utils Documentation](https://test-utils.vuejs.org/)
- [Testing Library Best Practices](https://testing-library.com/docs/guiding-principles)
