import themes from "@/mocks/themes";

export default ({
 state: () => ({
  themes: [],
  searchText: '',
  currentThemeCount: 0,
  allIndex: ''
 }),
 getters: {
  allThemes(state) {
   return state.themes;
  },
  getSearch(state) {
   return state.searchText;
  },
  getThemeCount(state) {
   return state.currentThemeCount;
  },
  allIndex(state) {
   return state.allIndex;
  }
 },
 mutations: {
  updateThemes(state, themes) {
   state.themes = themes;
  },
  updateInput(state, value) {
   state.searchText = value;
  },
  updateThemeCount(state, value) {
   state.currentThemeCount = value;
  },
  updateAllIndex(state, value) {
   state.allIndex = value;
  }
 },
 actions: {
  async fetchThemes({ commit }) {
   await commit('updateThemes', themes)
  },
  async searchInput({ commit }, payload) {
   await commit('updateInput', payload)
  },
  async countTheme({ commit }, payload) {
   await commit('updateThemeCount', payload)
  },
  async setAllIndex({ commit }, payload) {
   await commit('updateAllIndex', payload)
  }
 }
})