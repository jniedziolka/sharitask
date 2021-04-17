const taskModule = {
    state: () => ({
        tasks: null,
        isLoading: false,
        isFailure: false,
        isFirstFetched: false
    }),
    mutations: {
        addTaskToList (state, payload) {
            state.tasks = payload.tasks;
        }
    },
    actions: {
        async fetchTasks ({ commit }) {
            try {
                const response = await axios.get('/api/jsonTasks');
                commit('addTaskToList', {
                    tasks: response.data
                });
            } catch (error) {
                console.error(error);
            }
        }
    },
    getters: {

    }
};

export default taskModule;
