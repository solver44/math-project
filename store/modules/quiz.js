let timer = null;

const getDefaultState = () => {
 return {
  startGame: {
   loader: false,
   start: false,
   countdown: false,
  },

  gameOver: false,
  showEndBlock: false,

  currentPoint: 120,
  resultPoint: 0,
  report: false,

  quizInfo: {
   currentIndex: 0,
   indexes: null,
   reverse: false
  },
  presentation: true,
  statusbar: {
   status: true,
   id: -1,
   answer: null,
   answerId: -1,
   anotherAnswer: null,
   incorrectId: -1
  },
  oldResults: [],
  seconds: 0,

  tempCorrectAnswers: 0,

  isPausedTime: false
 }
}

const state = getDefaultState();

export default ({
 state,
 getters: {
  startGameInfo(state) {
   return state.startGame;
  },
  currentPoint(state) {
   return state.currentPoint;
  },
  resultPoint(state) {
   return state.resultPoint;
  },
  isReport(state) {
   return state.report;
  },
  quizInfo(state) {
   return state.quizInfo;
  },
  isPresentation(state) {
   return state.presentation;
  },
  statusBar(state) {
   return state.statusbar;
  },
  oldResults(state) {
   return state.oldResults;
  },
  gameOver(state) {
   return state.gameOver;
  },
  showEndBlock(state) {
   return state.showEndBlock;
  },

  timerSeconds(state) {
   return state.seconds;
  },
  tempCorrectAnswers(state) {
   return state.tempCorrectAnswers;
  },
  isPausedTime(state) {
   return state.isPausedTime;
  }
 },
 mutations: {
  updateStartGame(state, value) {
   state.startGame = value;
  },
  updateCurrentPoint(state, value) {
   state.currentPoint = value;
  },
  updateResultPoint(state) {
   state.resultPoint += state.currentPoint;
  },
  updateReport(state, value) {
   state.report = value
  },
  updateQuizInfo(state, value) {
   state.quizInfo = value;
  },
  updatePresentation(state, value) {
   state.presentation = value
  },
  updateStatusBar(state, value) {
   state.statusbar = value;
  },
  updateOldResults(state, value) {
   state.oldResults.push(value);
  },
  updateGameOver(state, value) {
   state.gameOver = value;
  },
  updateEndBlock(state, value) {
   state.showEndBlock = value;
  },
  updateCorrectAnswers(state, value) {
   state.tempCorrectAnswers = value;
  },

  updateIsPausedTime(state, value) {
   state.isPausedTime = value;
  },


  SET_TIMER(state, value) {
   state.timer = value;
  },
  RESET_TIMER(state) {
   state.seconds = 0;
  },
  UPDATE_TIMER(state) {
   state.seconds++;
  },
  CANCEL_TIMER(state) {
   clearInterval(timer);
   timer = null;
  },
  RESTART_STATE(state) {
   Object.assign(state, getDefaultState());
   state.startGame = { loader: true, start: false };
  },
  RESET_STATE(state) {
   Object.assign(state, getDefaultState());
  },
  RESET_POINT(state) {
   state.resultPoint = 0;
  }
 },
 actions: {
  startGame({ commit }, value) {
   commit('updateStartGame', value);
  },
  async setCurrentPoint({ commit }, value) {
   await commit('updateCurrentPoint', value);
  },
  async fetchResultPoint({ commit }) {
   await commit('updateResultPoint');
  },
  async reported({ commit }, value) {
   await commit('updateReport', value);
  },
  setQuizInfo({ commit }, value) {
   commit('updateQuizInfo', value);
  },
  setPresentation({ commit }, value) {
   commit('updatePresentation', value);
  },
  setStatusBar({ commit }, payload) {
   commit('updateStatusBar', payload);
  },
  async setOldResults({ commit }, value) {
   await commit('updateOldResults', value);
  },
  setGameOver({ commit }, value) {
   commit('updateGameOver', value);
  },
  setEndBlock({ commit }, value) {
   commit('updateEndBlock', value);
  },
  async setTempCorrectAnswers({ commit }, value) {
   await commit('updateCorrectAnswers', value);
  },

  async setIsPausedTime({ commit }, value) {
   await commit('updateIsPausedTime', value);
  },

  startTimer({ commit, state }) {
   commit('RESET_TIMER');
   timer = setInterval(() => {
    commit('UPDATE_TIMER');
   }, 1000);
   commit('SET_TIMER', timer);
  },
  continueTimer({ commit }) {
   timer = setInterval(() => {
    commit('UPDATE_TIMER');
   }, 1000);
   commit('SET_TIMER', timer);
  },
  cancelTimer({ commit }) {
   commit('CANCEL_TIMER');
  },
  restartQuiz({ commit }) {
   commit('RESTART_STATE');
   commit('CANCEL_TIMER');
  },
  async resetQuiz({ commit }) {
   await commit('RESET_STATE');
   commit('CANCEL_TIMER');
  },
  async resetPoint({ commit }) {
   await commit('RESET_POINT');
  }

 }
})