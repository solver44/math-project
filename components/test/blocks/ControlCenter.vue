<template>
  <div class="control-center">
    <div class="tool-bar">
      <div class="btn-wrap">
        <button @click="setvolume" class="navigator-btn"><i :class="`fas fa-volume-${volume ? 'up' : 'mute'}`"></i></button>
        <span>Fon</span>
      </div>

      <QuizItems v-if="isBattleQuiz || $route.query.quizItems" :shop="false" />
      
    </div>
      <transition name="slideUp">
        <vue-star v-if="showVueStar" color="#ecc235" animate="rotate-in-2-br-ccw">
          <i slot="icon" class="fa-solid fa-thumbs-up fa-flip-horizontal"></i>
        </vue-star>
      </transition>
    <div v-if="!showEndBlock && !isBattleQuiz" class="navigators">


      <div class="btn-wrap">
        <button @click="prevSlide" :disabled="isPresentation || quizInfo.currentIndex == 0 || currentItems.length > 1" class="navigator-btn"><i class="fas fa-angle-left"></i></button>
        <span>Oldingisi</span>
      </div>
      <div class="btn-wrap">
        <button @click="nextSlide" :disabled="currentItems.length > 1 || quizInfo.currentIndex >= quizInfo.indexes.length - 1 || (oldResults.length <= quizInfo.currentIndex && !isPresentation)" class="navigator-btn"><i class="fas fa-angle-right"></i></button>
        <span>Keyingisi</span>
      </div>
    </div>
    <div ref="statusbar" :style="styleStatus" class="status-bar">
      <div class="status-text">
        <p>{{statusText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueStar from '~/components/effects/vuestar/VueStar.vue';
import {mapGetters, mapActions} from 'vuex'
import QuizItems from '~/components/battle/QuizItems.vue';

export default {
  components:{VueStar, QuizItems},
  props:{
    showEndBlock: Boolean
  },
  data() {
    return {
      volume: false,
      statusText: '',
      styleStatus: '',
    }
  },
  watch:{
    statusBar(val){
      if(val.status == 'correct'){
        this.statusText = 'To\'g\'ri javob';
        this.styleStatus = 'background-color: #32c05d'
      }
      else{
        this.statusText = 'Noto\'g\'ri javob';
        this.styleStatus = 'background-color: #be3232'
      }
      
      this.setOldResults({
        id: val.id,
        answer: val.answer,
        answerId: val.answerId,
        anotherAnswer: val.anotherAnswer,
        incorrectId: val.incorrectId
      });

      setTimeout(() => {
        this.$refs.statusbar.classList.toggle('show-bar');
        setTimeout(() => {
        this.$refs.statusbar.classList.toggle('show-bar');
          this.nextSlide();
        }, 1500);
      }, 400);
    },
  },
  mounted() {
  },
  methods: {
    ...mapActions(['setQuizInfo', 'setOldResults']),
    hideVueStar(){
      this.$store.dispatch('setVueStar', false);
    },
    setvolume(){
      this.volume = !this.volume;
    },
    prevSlide(){
      this.$store.dispatch('reported', true);
      this.setQuizInfo({currentIndex: (this.quizInfo.currentIndex - 1), indexes: this.quizInfo.indexes, reverse: true})
      // this.$store.dispatch('setPresentation', true);
    },
    nextSlide(){
      if(this.quizInfo.currentIndex >= this.quizInfo.indexes.length - 1){
        this.$refs.statusbar.classList.remove('show-bar');
        this.$emit('gameover');
        return;
      }

      if(this.isPresentation){
        this.$store.dispatch('setPresentation', false);
        this.$store.dispatch('startTimer');
        return;
      }

      this.$store.dispatch('resetCurrentItems');
      this.setQuizInfo({currentIndex: (this.quizInfo.currentIndex + 1), indexes: this.quizInfo.indexes, reverse: false})
    }
  },
  computed:{...mapGetters(['isPresentation', 'quizInfo', 'statusBar', 'oldResults', 'showVueStar', 'isBattleQuiz', 'currentItems']),}
}
</script>

<style lang="scss">
.tool-bar{
  display: flex;
  gap: 20px;
}
.status-bar{
  position: absolute;
  bottom: -100%;
  left: 0%;
  width: 100%;
  height: 100%;
  transition: bottom .3s ease;
  z-index: 10;
}
.status-text{
  color: white;
  font-size: 28px;
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
  font-family: 'Dm Sans';
  p{
    width: 100%;
    margin: 0;
  }
}
.show-bar{
  bottom: 0%;
}
  button:disabled,
  button[disabled]{
    filter: brightness(.8) !important;
    cursor: default !important;
    pointer-events:none;
    user-select: none;
  }
  .control-center{
    padding: 16px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 88px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .navigators{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 16px;
    position: relative;
    gap: 20px;
    user-select: none;
  }
  .navigator-btn{
    width: 80px;
    height: 44px;

    border: none;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--header-btn);
    color: var(--link-color);
    -webkit-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
    font-size: 20px;
    cursor: pointer;
    &:hover{
      opacity: .5;
    }
  }
  .btn-wrap{
    text-align: center;
    display: flex;
    flex-direction: column;
    flex: 0;
    span{
      color: var(--text-color);
      font-size: 12px;
      opacity: .8;
    }
  }

  @media screen and (max-width: 600px) {
    .tool-bar{
      width: 100%;
      padding: 0px 20px 0px 0px;
    }
  }
</style>