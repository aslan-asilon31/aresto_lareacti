import './bootstrap';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import { BrowserRouter } from 'react-router-dom';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <BrowserRouter>
        <App {...props} />
            </BrowserRouter>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
