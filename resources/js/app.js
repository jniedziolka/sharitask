require('./bootstrap');

// Import modules...
import { App, plugin } from '@inertiajs/inertia-vue';
import store from '@/Store/index';
import Vue from 'vue';


Vue.use(plugin);

Vue.mixin({ methods: { route }});

const el = document.getElementById('app');

new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
    store
}).$mount(el);
