<template>
  <div class="header-container">
    <div class="actions-wrapper">
      <div v-if="!startGameInfo.start || showEndBlock" class="actions-container">
        <nuxt-link to="/" class="pause-icon-container game-header-btn">
          <i class="fas fa-times"></i>
        </nuxt-link>
      </div>
      <div v-else class="actions-container">
        <button v-if="!isPause || !pauseIcon" @click="pause" class="pause-icon-container game-header-btn">
          <i class="fas fa-pause"></i>
        </button>
        <button v-else @click="proceed" class="pause-icon-container game-header-btn">
          <i class="fas fa-play"></i>
        </button>

        <transition tag="div" name="fade">
          <div key="question-board" v-if="!isPresentation" class="question-index-wrap">
            <p>{{(quizInfo.currentIndex+1) + ' / ' + quizInfo.indexes.length}}</p>
          </div>
        </transition>
        <transition name="fadeInLeft">
          <div v-if="showPoint" class="point-count">
            <p>+{{point}}</p>
          </div>
        </transition>
      </div>
      <div class="fullscreen-btn-container">
        <button @click="fullscreen" title="Fullscreen" class="fullscreen-btn game-header-btn">
          <i :class="`fas fa-${full ? 'compress' : 'expand'}`"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props:{
    showEndBlock: Boolean,
    pauseIcon: Boolean
  },
  watch:{
    resultPoint(){
      this.showPoint = true;
      this.point = this.currentPoint;
      setTimeout(() => {
        this.showPoint = false;
      }, 2000);
    }
  },
  data() {
    return {
      full: false,
      isPause: false,
      showPoint: false,
      point: 0,
    }
  },
  methods: {
    fullscreen() {
      this.full = !this.full;
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    },
    pause(){
      this.isPause = true;
      this.$emit('pauseClick');
    },
    proceed(){
      this.isPause = false;
      this.$emit('proceedClick');
    }
  },
  computed:{...mapGetters(['startGameInfo', 'isBattleQuiz', 'quizInfo', 'isPresentation', 'currentPoint', 'resultPoint'])}
}
</script>

<style lang="scss">
.point-count{
  position: absolute;
  right: 20px;
  font-size: 20px;
  color: var(--text-color);
  display: table;
  height: 100%;
  p{
    margin: 0;
    display: table-cell;
    vertical-align: middle;
  }
}
.question-index-wrap{
  border-radius: 8px;
  background: var(--more-list-bg);
  color: var(--text-color);
  padding: 0px 15px;
  display: flex;
  align-items: center;
  p{
    margin: 0;
  }
}
  .header-container{
    z-index: 101;
    padding: 8px;
    color: var(--main-color);
    background-color: var(--app-container);
    font-size: 16px;
    -webkit-transition: transform .5s ease-in-out;
    transition: transform .5s ease-in-out;
  }
  .actions-wrapper {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: margin .3s ease-in;
    transition: margin .3s ease-in;

  }
  .actions-container, .actions-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .actions-container {
    gap: 20px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
  }
  .game-header-btn {
    text-align: center;
    width: 45px;
    height: 45px;
    font-size: 20px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border: none;
    color: white;
    background-color: var(--header-btn);
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-transition: background-color .2s ease-out;
    transition: background-color .2s ease-out;
    &:hover{
      background-color: var(--link-color-hover);
    }
    i{
      color: var(--link-color);
    }
  }

  @media screen and (max-width: 576px){
    .header-container {
        padding: 12px 8px;
    }
  }
</style>