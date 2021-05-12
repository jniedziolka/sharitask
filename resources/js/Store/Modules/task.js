import route from 'ziggy';

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
        setTaskStatuses (state, payload) {
            state.taskStatuses = payload.taskStatuses
        },
        setTaskVisibilities (state, payload) {
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
        async fetchTaskStatuses ({ commit }) {
            try {
                const response = await axios.get(route('task.getTaskStatuses'));
                commit('setTaskStatuses', {
                    taskStatuses: response.data
                });
            } catch (error) {
                console.error(error);
            }
        },
        async fetchTaskVisibilities ({ commit }) {
            try {
                const response = await axios.get(route('task.getTaskVisibilities'));
                commit('setTaskVisibilities', {
                    taskVisibilities: response.data
                });
            } catch (error) {
                console.error(error);
            }
        },
        async storeTask({ dispatch }, { task }) {
            try {
                await axios.post(route('task.store'), {
                    title: task.title,
                    description: task.description,
                    visibility: task.visibility,
                    date: task.date
                });
                dispatch('fetchTasks');
            } catch (err) {
                console.error(err);
            }
        },
        async editTask({ dispatch }, { task }) {
            try {
                await axios.put(route('task.update'), task);
                dispatch('fetchTasks');
            } catch (err) {
                console.error(err);
            }
        },
        async deleteTask({ dispatch }, { id }) {
            try {
                await axios.delete(route('task.destroy', id));
                dispatch('fetchTasks');
            } catch (err) {
                console.error(err);
            }
        }
    }
};

export default taskModule;
