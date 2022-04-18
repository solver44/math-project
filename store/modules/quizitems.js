import Vue from 'vue';

export default ({
 state: () => ({
  quizItems: null,
  userItems: null,

  currentItems: [],
  currentItem: null
 }),
 getters: {
  allQuizItems(state) {
   return state.quizItems;
  },
  userItems(state) {
   return state.userItems;
  },


  currentItem(state) {
   return state.currentItem;
  },
  currentItems(state) {
   return state.currentItems;
  }
 },
 mutations: {
  updateQuizItems(state, payload) {
   state.quizItems = payload;
  },
  updateUserItems(state, payload) {
   state.userItems = payload;
  },
  updateCurrentItem(state, value) {
   state.currentItem = value;
  },

  updateCurrentItems(state, value) {
   state.currentItems.push(value);
  },
  removeCurrentItems(state, value) {
   var index = state.currentItems.indexOf(value);
   if (index !== -1) {
    state.currentItems.splice(index, 1);
   }
  },
  resetCurrentItems(state) {
   const items = ['Double score', 'Time kill']
   for (let i = 0; i < items.length; i++) {
    if (!state.currentItems.includes(items[i]))
     items.shift();
   }
   state.currentItems = items;
  }
 },
 actions: {
  async setCurrentItem({ commit }, value) {
   await commit('updateCurrentItem', value);
  },

  async setCurrentItems({ commit }, value) {
   await commit('updateCurrentItems', value);
  },
  async removeCurrentItems({ commit }, value) {
   await commit('removeCurrentItems', value);
  },
  async resetCurrentItems({ commit }) {
   await commit('resetCurrentItems');
  },

  async fetchQuizItems({ commit }) {
   await this.$axios.post('/shop.php/', { mode: 'allItems' })
    .then(data => data.data)
    .then(response => commit('updateQuizItems', response))
    .catch(error => console.error(error));
  },
  async fetchUserItems({ commit }, data) {
   await this.$axios.post('/shop.php/', data)
    .then(data => data.data)
    .then(response => commit('updateUserItems', response))
    .catch(error => console.error(error));
  },
  async dataQuizItem({ dispatch }, data) {
   await this.$axios.post('/setData.php/', data)
    .then(data => data.data)
    .then(response => response)
    .catch(error => console.error(error))
    .finally(
     setTimeout(() => {
      dispatch('fetchUser');
     }, 200)
    );
  },
 }
})