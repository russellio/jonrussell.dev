import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import '@/css/app.css';

const appName = import.meta.env.VITE_APP_NAME || 'Jon Russell - Senior Software Engineer';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
      resolvePageComponent(
        `./pages/${name}.vue`,
        import.meta.glob<DefineComponent>('./pages/**/*.vue')
      ),
    setup({ el, App, props, plugin }) {
        const pinia = createPinia();
        createApp({ render: () => h(App, props) })
            .use(pinia)
            .use(plugin)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
