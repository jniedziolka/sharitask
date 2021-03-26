const userModule = {
    state: () => ({
        first_name: '',
        last_name: '',
        nickname: '',
        email: ''
    }),
    mutations: {
        setUserInfo (state, payload) {
            state.first_name = payload.first_name;
            state.last_name = payload.last_name;
            state.nickname = payload.nickname;
            state.email = payload.email;
        }
    },
    actions: {

    },
    getters: {

    }
};

export default userModule;
