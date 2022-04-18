export default ({
 state: () => ({
  stepNumber: 0,
  currentStep: 0,
  userIntroduction: null,
  giftTake: false,

  currentProps: {
   stepNumber: 3,
   target: '.search-wrapper',
   text: 'Mavzu yoki video nomi bo\'yicha qidirish',
   position: 'bottom'
  }
 }),
 getters: {
  currentStep(state) {
   return state.currentStep;
  },
  giftTake(state) {
   return state.giftTake;
  },

  currentProps(state) {
   return state.currentProps;
  },
  userIntroduction(state) {
   return state.userIntroduction;
  }
 },
 mutations: {
  updateCurrentProps(state, value) {
   state.currentProps = value;
  },
  updateGiftTake(state, value) {
   state.giftTake = value;
  },

  updateCurrentStep(state, value) {
   state.currentStep += value;

  },
  updateUserIntroduction(state, value) {
   state.userIntroduction = value;
  }
 },
 actions: {
  async setGiftTake({ commit }, value) {
   await commit('updateGiftTake', value);
  },

  async setCurrentProps({ commit }, data) {
   await commit('updateCurrentProps', data);
  },
  async nextStep({ commit }, value = 1) {
   await commit('updateCurrentStep', value);
  },
  async prevStep({ commit }, value = 1) {
   await commit('updateCurrentStep', -value);
  },
  fetchUserIntroduction({ commit, getters }) {
   return new Promise((resolve, reject) => {
    this.$axios.post('/user.php/', {
      mode: 'get',
      userId: getters.user.id
     })
     .then(data => data.data)
     .then(response => {
      commit('updateUserIntroduction', response);
      resolve(response);
     })
     .catch(error => reject(error));
   });
  },

  setUserIntroduction({ dispatch }, data) {
   return this.$axios.post('/user.php/', data)
    .then(data => data.data)
    .then(response => {
     if (!data.reload)
      dispatch('fetchUserIntroduction');
    })
    .catch(error => console.error(error))
    .finally(() => {
     if (data.reload)
      setTimeout(() => {
       location.reload();
      }, 400);
    });
  },

  async resetUser({ getters }) {
   await this.$axios.post('/reset.php/', {
     userId: getters.user.id
    })
    .then(data => data.data)
    .then(response => location.reload())
    .catch(error => console.error(error));
  }
 }
})