import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import userModule from "@/Store/Modules/user";

const store = new Vuex.Store({
    modules: {
        user: userModule
    }
});

export default store;
