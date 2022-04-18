export default ({
 state: () => ({
  showMenuSection: false,
  videoContentInfo: {
   show: false,
   index: -1
  },
  isVideoBox: false,

  themeMode: 'light',
  showVueStar: false,

  colors: [],

  colorsLight: [{
    first: 'rgb(254, 228, 203)',
    second: 'rgb(255, 148, 46)',
    third: 'rgb(255, 148, 46)',
   },
   {
    first: 'rgb(233, 231, 253)',
    second: 'rgb(79, 63, 240)',
    third: 'rgb(79, 63, 240)',
   },
   {
    first: 'rgb(226, 249, 255)',
    second: 'rgb(9, 108, 134)',
    third: 'rgb(9, 108, 134)',
   },
   {
    first: 'rgb(255, 211, 226)',
    second: 'rgb(223, 54, 112)',
    third: 'rgb(223, 54, 112)'
   },
   {
    first: 'rgb(200, 247, 220)',
    second: 'rgb(52, 196, 113)',
    third: 'rgb(52, 196, 113)'
   },
   {
    first: 'rgb(213, 222, 255)',
    second: 'rgb(64, 103, 249)',
    third: 'rgb(64, 103, 249)'
   },
  ].reverse(),
  colorsDark: [{
    first: 'rgb(255 198 144 / 80%)',
    second: 'rgb(255, 148, 46)',
    third: 'white'
   },
   {
    first: 'rgb(185 178 255 / 80%)',
    second: 'rgb(79, 63, 240)',
    third: 'white'
   },
   {
    first: 'rgb(146 232 255 / 80%)',
    second: 'rgb(9, 108, 134)',
    third: 'white'
   },
   {
    first: 'rgb(255 138 178 / 80%)',
    second: 'rgb(223, 54, 112)',
    third: 'white'
   },
   {
    first: 'rgb(146 255 192 / 80%)',
    second: 'rgb(52, 196, 113)',
    third: 'white'
   },
   {
    first: 'rgb(113 143 255 / 80%)',
    second: 'rgb(64, 103, 249)',
    third: 'white'
   },
  ].reverse(),

 }),
 getters: {
  isShowMenu(state) {
   return state.showMenuSection;
  },
  videoContent(state) {
   return state.videoContentInfo;
  },
  isVideoBox(state) {
   return state.isVideoBox;
  },
  themeMode(state) {
   return state.themeMode;
  },
  showVueStar(state) {
   return state.showVueStar;
  },

  colors(state) {
   return state.colors;
  }

 },
 mutations: {
  updateMenu(state, payload) {
   state.showMenuSection = payload;
  },
  updateVideoContent(state, payload) {
   state.videoContentInfo = payload;
  },
  updateVideoBox(state, payload) {
   state.isVideoBox = payload;
  },
  updateThemeMode(state, payload) {
   if (payload == 'dark')
    document.documentElement.classList.add('dark');
   else
    document.documentElement.classList.remove('dark');

   state.themeMode = payload;
  },

  updateVueStar(state, payload) {
   state.showVueStar = payload;
  },

  updateColors(state) {
   if (state.themeMode == 'light')
    state.colors = state.colorsLight;
   else
    state.colors = state.colorsDark;
  },
 },
 actions: {
  async showMenu({ commit }, payload) {
   await commit('updateMenu', payload)
  },
  async showVideoContent({ commit }, payload) {
   await commit('updateVideoContent', payload)
  },
  async setVideoBox({ commit }, payload) {
   await commit('updateVideoBox', payload)
  },
  async setThemeMode({ commit }, payload) {
   await commit('updateThemeMode', payload);
   commit('updateColors');
  },

  async setVueStar({ commit }, value) {
   await commit('updateVueStar', value);
  },

  async setColors({ commit }) {
   await commit('updateColors');
  },
 }
})