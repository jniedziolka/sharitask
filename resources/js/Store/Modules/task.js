const taskModule = {
    state: () => ({
        tasks: null,
        taskStatuses: null,
        taskVisibilities: null,
        isLoading: false,
        isFailure: false,
        isFirstFetched: false
    }),
    mutations: {
        setTasks (state, payload) {
            state.tasks = payload.tasks;
        },
        addTaskToList (state, payload) {
            state.tasks = [...state.tasks, JSON.parse(payload.task)];
        },
        editTask (state, payload) {
            const index = state.tasks.findIndex(task => task.id === payload.id);

        },
        removeTaskFromTheList (state, payload) {
            const index = state.tasks.findIndex(task => task.id === payload.id);
            state.tasks.splice(index, 1);
        },
        setTasksStatuses (state, payload) {
            state.taskStatuses = payload.taskStatuses
        },
        setTasksVisibilities (state, payload) {
            state.taskVisibilities = payload.taskVisibilities;
        }
    },
    actions: {
        async fetchTasks ({ commit }) {
            try {
                const response = await axios.get(route('task.getJsonTasks'));
                commit('setTasks', {
                    tasks: response.data
                });
            } catch (error) {
                console.error(error);
            }
        },
        async fetchTasksStatuses ({ commit }) {
            try {
                const response = await axios.get(route('task.getTaskStatuses'));
                commit('setTasksStatuses', {
                    taskStatuses: response.data
                });
            } catch (error) {
                console.error(error);
            }
        },
        async fetchTasksVisibilities ({ commit }) {
            try {
                const response = await axios.get(route('task.getTaskVisibilities'));
                commit('setTasksVisibilities', {
                    taskVisibilities: response.data
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
};

export default taskModule;
