<template>
  <div class="slider">
      <transition tag="div" name="qFadeScaleLeft"> 
        <div v-if="isPresentation" class="slide-container presentation">
          <div class="title-wrapper">
            <h2 class="title">{{subject}}</h2>
            <p class="subtitle">{{allDataQuiz.title}}</p>
          </div>
          <div class="image">
            <!-- <img src="@/assets/images/math-title.png" alt=""> -->
          </div>
        </div>

        <transition-group tag="div" class="in-game" :name="quizInfo.reverse ? 'qFadeScaleRight' : 'qFadeScaleLeft'" v-if="!isPresentation">
          <QuizContainer key="old" v-if="!isNew" :completed="completed" :idObject="quizInfo.currentIndex" :question="questions[indexes[quizInfo.currentIndex]]" :answer="answers[indexes[quizInfo.currentIndex]]" />
          <QuizContainer key="new" v-if="isNew" :completed="completed" :idObject="quizInfo.currentIndex" :question="questions[indexes[quizInfo.currentIndex]]" :answer="answers[indexes[quizInfo.currentIndex]]" />
        </transition-group>
      </transition>
  </div>
</template>

<script>
function makeRandomIndexes(length, count) {
    var result = [];
    for (let i = 0; i < length; i++) {
        result.push(getRndInteger(i * 10, (i + 1) * 10));
    }
    if(result.length < count){
      let tempNum = result[0];
      while(result.length < count){
        while(result.includes(tempNum)){
          tempNum = getRndInteger(0, length*10);
        }
        result.push(tempNum);
      }
    }

    return result;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

import {mapGetters, mapActions} from 'vuex'
import QuizContainer from './QuizContainer.vue'

export default {
  components: { QuizContainer },  
  props:{
    subject:{
      type: String,
      default: 'Mavzu'
    },
  },
  data() {
    return {
      questions: null,
      answers: null,

      isNew: false,

      indexes: null,
      oldIndex: 0,

      completed: false,
    }
  },
  watch:{
    // oldResults(val){
    // },
    // isPresentation(val){
    //   if(val)
    //     return;
    // },
    quizInfo(val){
      if(val.currentIndex < this.indexes.length)
      {
        if(this.oldResults.length > val.currentIndex)
          this.completed = true;
        else{
          this.completed = false;
          }

        // console.log(this.oldResults.length, val.currentIndex, this.isNew, this.completed)
        this.isNew = !this.isNew;

        setTimeout(() => {
          this.oldIndex = val.currentIndex;
        }, 0);
      }
    }
  },
  beforeMount() {
    let data = this.allDataQuiz.questions;
    data = data.split('\r\n');
    let indexes = [];
    if(this.isBattleQuiz)
      indexes = makeRandomIndexes(8, 30);
    else
      indexes = makeRandomIndexes(10, 10);
    data = data.filter(item => {return item});
    this.setQuizInfo({currentIndex: 0, indexes: indexes, reverse: false});
    this.questions = data;
  
    data = this.allDataQuiz.answer;
    data = data.split('\r\n');
    data = data.filter(item => {return item});
    this.answers = data;  

    this.indexes = indexes;
  },
  computed:{
    ...mapGetters(['allDataQuiz', 'isPresentation', 'quizInfo', 'oldResults', 'isBattleQuiz']),
  },
  methods: {
    ...mapActions(['setQuizInfo'])
  },
}
</script>

<style lang="scss">
.qFadeScaleLeft-enter{
  right: -10% !important;
  opacity: 0;
  transform: scale(0.88);
}
.qFadeScaleLeft-leave-to{
  left: -10%;
  opacity: 0;
  transform: scale(0.88);
}
.qFadeScaleLeft-enter-active{
  transition: all .4s ease-in;
}
.qFadeScaleLeft-leave-active{
  transition: all .4s ease-out;
}
.qFadeScaleLeft-leave{
  transform: scale(1);
  left: 0%;
  opacity: 1;
}
.qFadeScaleLeft-enter-to{
  transform: scale(1);
  right: 0%;
  transition-delay: .3s;
  opacity: 1;
}

.qFadeScaleRight-enter{
  left: -10% !important;
  opacity: 0;
  transform: scale(0.88);
  // transition-delay: 1s;
}
.qFadeScaleRight-leave-to{
  right: -10%;
  opacity: 0;
  transform: scale(0.88);
}
.qFadeScaleRight-enter-active{
  transition: all .4s ease-in;
}
.qFadeScaleRight-leave-active{
  transition: all .4s ease-out;
}
.qFadeScaleRight-leave{
  transform: scale(1);
  right: 0%;
  opacity: 1;
}
.qFadeScaleRight-enter-to{
  transform: scale(1);
  left: 0%;
  transition-delay: .3s;
  opacity: 1;
}

.in-game{
  width: 100%;
  height: 100%;
}
.image{
  background-image: url('@/assets/images/math-title.png');
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.title-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 80%;
}
.title{
  color: var(--text-color);
  font-size: 60px;
  font-weight: 700;
}
.subtitle{
  color: rgb(171, 171, 171);
  font-size: 38px;
  font-weight: 500;
}
.slider{
  height: 100%;
  position: relative;
}
.slide-container{
    width: 100%;
    height: 100%;
    background: var(--projects-section);
    overflow: hidden;
    border-radius: 32px;
    padding: 8px;
    position: absolute;
    box-shadow: 0 2px 6px 0 rgb(136 148 171 / 20%), 0 24px 20px -24px rgb(71 82 107 / 10%);
}
.presentation{
  padding: 64px;
  display: flex;
  border: 3px solid var(--message-box-border);
}

@media screen and (max-width: 578px) {
  .presentation{
    padding: 20px;
  }
  .presentation{
    display: flex;
    flex-direction: column-reverse;
  }
  .title-wrapper{
    align-items: center;
    height: 80%;
    width: 100%;
  }
  .title{
    font-size: 40px;
  }
  .subtitle{
    font-size: 22px;
  }
  .image{
    background-size: cover;
  }
}
</style>