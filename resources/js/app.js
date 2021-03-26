require('./bootstrap');

// Import modules...
import { App, plugin } from '@inertiajs/inertia-vue';
import store from '@/Store/index';
import Vue from 'vue';

Vue.use(plugin);

const el = document.getElementById('app');

new Vue({
    render: h => h(App, {
        store,
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(el);
