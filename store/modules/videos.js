export default ({
    state: () => ({
        videos: null,
        dataQuiz: null,
        titleInfo: null,

        showNextVideo: {
            show: false,
            videoIndex: -1,
        },
    }),
    getters: {
        allVideos(state) {
            return state.videos;
        },
        allDataQuiz(state) {
            return state.dataQuiz;
        },
        getTitle(state) {
            return state.titleInfo;
        },
        showNextVideo(state) {
            return state.showNextVideo;
        }
    },
    mutations: {
        updateVideos(state, value) {
            state.videos = value;
        },
        updateDataQuiz(state, value) {
            state.dataQuiz = value;
        },
        updateTitle(state, value) {
            state.titleInfo = value;
        },
        updateShowingNextVideo(state, value) {
            state.showNextVideo = value;
        }
    },
    actions: {
        async fetchVideos({ commit }, data) {
            await this.$axios.post('/videos.php/', data)
                .then(data => data.data)
                .then(response => commit('updateVideos', response))
                .catch(error => console.error(error));
        },
        async fetchDataQuiz({ commit }, data) {
            await this.$axios.post('/documents.php/', data)
                .then(data => data.data)
                .then(response => commit('updateDataQuiz', response))
                .catch(error => console.error(error))
                .finally(setTimeout(() => { commit('updateStartGame', { loader: false, start: true, countdown: false }) }, 400))
        },
        async fetchDataBattle({ commit }, data) {
            await this.$axios.post('/battle.php/', data)
                .then(data => data.data)
                .then(response => commit('updateDataQuiz', response))
                .catch(error => console.error(error))
                .finally(setTimeout(() => {
                    commit('updateStartGame', { loader: false, start: false, countdown: true });
                    setTimeout(() => {
                        commit('updateStartGame', { loader: false, start: true, countdown: false });
                    }, 4000);
                }, 400));
        },
        async fetchTitle({ commit }, data) {
            await this.$axios.post('/titleinfo.php/', data)
                .then(data => data.data)
                .then(response => commit('updateTitle', response))
                .catch(error => console.error(error));
        },

        async setVideoRecently(_, data) {
            await this.$axios.post('/setData.php/', data)
                .then(data => data.data)
                .then(response => response)
                .catch(error => console.error(error));
        },
        async buyVideo({ getters, dispatch }, data) {
            await this.$axios.post('/setData.php/', data)
                .then(data => data.data)
                .then(response => response)
                .catch(error => console.error(error))
                .finally(setTimeout(() => {
                    dispatch('fetchUser');
                    setTimeout(() => {
                        dispatch('fetchVideos', { userId: getters.user.id });
                    }, 2000);
                }, 100));
        },

        isShowNextVideo({ commit }, value) {
            commit('updateShowingNextVideo', value);
        }
    }
})