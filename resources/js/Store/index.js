import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import userModule from "@/Store/Modules/user";
import taskModule from "@/Store/Modules/task";

const store = new Vuex.Store({
    modules: {
        user: userModule,
        task: taskModule
    }
});

export default store;
