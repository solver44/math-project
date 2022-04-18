<template>
  <div class="slide-container quiz-container">
    <div :style="`width: ${widthValue}%; background-color: ${timerColor}; ${freeze ? 'background-color: #008eff;' : ''}`" class="quiz-timer"></div>
    <QuestionTextContainer :question="question" />
    <OptionsContainer :answer="answer" :completed="completed" :idObject="idObject" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import OptionsContainer from './quiz/OptionsContainer.vue'
import QuestionTextContainer from './quiz/QuestionTextContainer.vue'
export default {
  components: { QuestionTextContainer, OptionsContainer },
  props:{
    question: String,
    answer: String,

    completed: Boolean,
    idObject: Number,
  },
  data() {
    return {
      widthValue: 100,
      sec: 20,
      timerColor: 'var(--secondary-color)',
      intervalTimer: null,
      isPaused: false,
      freeze: false,
    }
  },
  watch:{
    isPausedTime(val){
      this.isPaused = val;
    },
    currentItems(val){
      if(val.includes('Freezer'))
        this.freeze = true;
      else
        this.freeze = false;
    }
  },
  mounted() {
    if(this.completed){
      this.widthValue = 0;
      this.$store.dispatch('setCurrentPoint', 0);
      return;
    }
    else if(this.isReport)
    {
      this.widthValue = 0;
      this.$store.dispatch('setCurrentPoint', 0);
      this.$store.dispatch('reported', false);
      return;
    }
    this.$store.dispatch('setCurrentPoint', 120);

    const that = this;
    let num = 100 / this.sec;
    this.intervalTimer = setInterval(() => {
      if(!that.isPaused && !that.freeze){
        that.widthValue -= num;
        
        if(that.widthValue < .7 * 100)
          this.$store.dispatch('setCurrentPoint', 100);

        if(that.widthValue < .6 * 100)
          this.$store.dispatch('setCurrentPoint', 80);

        if(that.widthValue < .4 * 100){
          this.$store.dispatch('setCurrentPoint', 60);
          that.timerColor = "orange";
          }
        if(that.widthValue < .2 * 100){
          this.$store.dispatch('setCurrentPoint', 40);
          that.timerColor = "red";
        }

        if(that.widthValue < 0){
          that.widthValue = 0;
          this.$store.dispatch('setCurrentPoint', 0);
          clearInterval(this.intervalTimer);
        }
      }
    }, 1000);
  },
  computed:{...mapGetters(['isReport', 'isPausedTime', 'currentItems'])},
  beforeDestroy(){
    clearInterval(this.intervalTimer);
  }
}
</script>

<style lang="scss">
.quiz-timer
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: var(--text-color);
  border-radius: 20px;

  transition: all 1s linear;
}
  .quiz-container{
    padding: 8px;
    background: var(--game-panel) !important;
    position: relative;
    // right: -100%;
  }
@media screen and (max-width: 600px) {
  .quiz-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
  }
}
</style>