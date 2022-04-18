export default ({
 state: () => ({
  isAvailableBattle: false,

  isBattleQuiz: false,
 }),
 getters: {
  isAvailableBattle(state) {
   return state.isAvailableBattle;
  },
  isBattleQuiz(state) {
   return state.isBattleQuiz;
  },
 },
 mutations: {
  updateAvailableBattle(state, payload) {
   state.isAvailableBattle = payload;
  },
  updateBattleQuiz(state, payload) {
   state.isBattleQuiz = payload;
  },

 },
 actions: {
  async setAvailableBattle({ commit }, payload) {
   await commit('updateAvailableBattle', payload)
  },
  async setBattleQuiz({ commit }, payload) {
   await commit('updateBattleQuiz', payload)
  },

 }
})