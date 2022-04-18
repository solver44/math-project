export default ({
    state: () => ({
        user: null,
        currentUserPoint: 0,
    }),
    getters: {
        user(state) {
            return state.user;
        },
        currentUserPoint(state) {
            return state.currentUserPoint;
        }
    },
    mutations: {
        updateUser(state, payload) {
            state.user = payload;
            state.currentUserPoint = parseInt(payload.point);
        },
        updateCurrentUserPoint(state, value) {
            state.currentUserPoint += value;
        }
    },
    actions: {
        setCurrentUserPoint({ commit }, value) {
            commit('updateCurrentUserPoint', value);
        },
        fetchUser({ commit }) {
            return new Promise((resolve, reject) => {
                this.$axios.get('/')
                    .then(data => data.data)
                    .then(response => {
                        commit('updateUser', response);
                        resolve(response);
                    })
                    .catch(error => reject(error));
            });
        },
        async setVideoData({ dispatch, getters }, data) {
            await this.$axios.post('/setData.php/', data)
                .then(data => data.data)
                .then(response => {
                    dispatch('fetchUser');
                    dispatch('fetchVideos', { userId: getters.user.id });
                })
                .catch(error => console.error(error));
        },
        async setPoint({ dispatch }, data) {
            await this.$axios.post('/setData.php/', data)
                .then(data => data.data)
                .then(response => { dispatch('fetchUser'); })
                .catch(error => console.error(error));
        },
    }
})