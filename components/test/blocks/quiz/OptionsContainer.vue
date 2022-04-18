<template>
  <div class="options-container">
    <div ref="options" class="options-grid">
      <div @click="clickedOption" :value="getCorrectOrIncorrectAnswer(0)" class="option option-1">
        <div class="option-text">
          <p v-katex="getCorrectOrIncorrectAnswer(0)" ></p>
        </div>
      </div>
      <div @click="clickedOption" :value="getCorrectOrIncorrectAnswer(1)" class="option option-2">
        <div class="option-text">
          <p v-katex="getCorrectOrIncorrectAnswer(1)" ></p>
        </div>
      </div>
      <div @click="clickedOption" :value="getCorrectOrIncorrectAnswer(2)" class="option option-3">
        <div class="option-text">
          <p v-katex="getCorrectOrIncorrectAnswer(2)" ></p>
        </div>
      </div>
      <div @click="clickedOption" :value="getCorrectOrIncorrectAnswer(3)" class="option option-4">
        <div class="option-text">
          <p v-katex="getCorrectOrIncorrectAnswer(3)" ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function getRoundNumbers(targetNum, count, aroundNum) {
  var loopCount = 0;
    var result = [];

    var tempNum = 0;
    var isMinus = Math.floor((Math.random() * 1)) == 0;
    if (isMinus)
        tempNum = targetNum - Math.floor((Math.random() * aroundNum) + 1);
    else
        tempNum = targetNum + Math.floor((Math.random() * aroundNum) + 1);

    for (let i = 0; i < count; i++) {
        while (result.includes(tempNum) || tempNum < 0) {
            if (isMinus)
                tempNum = targetNum - Math.floor((Math.random() * aroundNum) + 1);
            else
                tempNum = targetNum + Math.floor((Math.random() * aroundNum) + 1);

            loopCount++;
            if (loopCount > 2000)
                break;
            if (loopCount > 1000) {
                isMinus = Math.floor((Math.random() * 1)) == 0;
            }
        }
        isMinus = Math.floor((Math.random() * 1)) == 0;
        result.push(tempNum);
    }
    return result;
}
import {mapActions, mapGetters} from 'vuex';

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export default {
  props:{
    idObject: Number,
    answer: String,

    completed: Boolean,
  },
  data() {
    return {
      anotherAnswers: null,
      randomIndex: -1,
      correctAnswer: false,
      symbol: ';',
      currentAnswer: 0,
    }
  },
  watch:{
    currentItems(val){
      if(val.includes('Correct answer')){
        this.correctAnswer = true;
        let options = this.$refs.options;
        for (let index = 0; index < options.children.length; index++) {
          if(options.children[index].getAttribute('value') == this.answer)
          {
            options.children[index].classList.add('correct-answer-place');
          }
       
        }
      }
      else
        this.correctAnswer = false;
    }
  },
  methods:{
    getCorrectOrIncorrectAnswer(index){
      let anotherIndex = index == 0 ? this.randomIndex : index;
      let answer = this.randomIndex == index ? this.currentAnswer : this.anotherAnswers[anotherIndex];
      if(answer.includes('$') || answer.includes('\\'))
      {
        answer = replaceAll(answer, '$', '');
        answer = replaceAll(answer, '\\[', '');
        answer = replaceAll(answer, '\\]', '');
      }
      return answer;
    },
    ...mapActions(['setStatusBar']),

    clickedOption(event){
      let options = this.$refs.options;
      let trueAnsIndex = -1;
      let incorrectId = -1;

      for (let index = 0; index < options.children.length; index++) {
        if(event.target != options.children[index]){
           if(options.children[index].getAttribute('value') == this.currentAnswer)
              trueAnsIndex = index;
            else
              options.children[index].classList.toggle('hide');
          }else
            incorrectId = index;
       
      }

      if(event.target.getAttribute('value') == this.currentAnswer){
        event.target.classList.add('clicked-option', 'correct');
        
        this.$store.dispatch('setTempCorrectAnswers', this.tempCorrectAnswers + 1);
        if(this.tempCorrectAnswers >= 3)
          this.$store.dispatch('setVueStar', true);

        this.$store.dispatch('fetchResultPoint');
        
        this.setStatusBar({
            status: 'correct',
            id: this.idObject,
            answer: this.currentAnswer,
            answerId: this.randomIndex,
            anotherAnswer: this.anotherAnswers,
            incorrectId: -1
          });
      }
      else{
        event.target.classList.add('clicked-option', 'incorrect');
        this.$store.dispatch('setTempCorrectAnswers', 0);
        this.setStatusBar(
          {
            status: 'incorrect',
            id: this.idObject,
            answer: this.currentAnswer,
            answerId: this.randomIndex,
            anotherAnswer: this.anotherAnswers,
            incorrectId: incorrectId
          });
        setTimeout(() => {
          options.children[trueAnsIndex].classList.add('correct-answer');
        }, 200);
      }
      // this.setQuizInfo({currentIndex: this.quizInfo.currentIndex, indexes: this.quizInfo.indexes})      
    }
  },
  beforeMount() {
    this.currentAnswer = this.answer;

    if(this.completed){
      const old = this.oldResults[this.idObject];

      this.randomIndex = old.answerId;
      this.anotherAnswers = old.anotherAnswer;
      return;
    }

    let anotherAnswers;
    if(this.answer.includes(this.symbol)){
      anotherAnswers = this.answer.split(this.symbol);
      this.currentAnswer = anotherAnswers[0];
    }
    else{
      anotherAnswers = getRoundNumbers(this.currentAnswer, 4, 15);
    }

    let rand = Math.floor((Math.random() * 4 - 1) + 1);
    this.randomIndex = rand;

    this.anotherAnswers = anotherAnswers;
  },
  computed:{
    ...mapGetters(['oldResults', 'tempCorrectAnswers', 'currentItems']),
    
  },
  mounted() {
    if(!this.completed)
      return;   
    const old = this.oldResults[this.idObject];
    const options = this.$refs.options;

    if(old.incorrectId > -1)
      options.children[old.incorrectId].classList.add('incorrect-answer');
    options.children[old.answerId].classList.add('correct-answer');

    for (let index = 0; index < options.children.length; index++) {
      if(index != old.answerId && index != old.incorrectId)
        options.children[index].classList.add('hide');
    }
  },
}
</script>

<style lang="scss">
.katex{
  font-family: inherit !important;
}
.correct-answer-place{
  animation-name: blink-white;
  animation-duration: .5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.options-container{
  width: 100%;
  height: 55%;
  text-align: center;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  padding-top: 4px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px 10px;

  flex: 2;
}
.options-grid{
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 12px;
}
.option-text{
  text-align: center;
  color: black;
  font-size: 40px;
  width: 100%;
  pointer-events: none;
  user-select: none;
}
.option{
  width: 33.33%;
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-transition: all .3s ease-out;
  transition: all .3s ease-out;
  &:hover{
    filter: brightness(0.85);
  }
  border-radius: 8px;

  background-color: var(--option-color);
  border: 3px solid var(--main-color);
  -webkit-box-shadow: 0 6px 0 0 #c4c4c4;
  box-shadow: 0 6px 0 0 #c4c4c4;
}
@media screen and (max-width: 600px){
  .options-container{
    height: auto;
    padding: 10px 2px;
  }
  .options-grid{
    display: flex;
    flex-direction: column;
  }
  .option{
    width: 100%;
    padding: 20px 0px;
  }
  .option-text{
    font-size: 25px;
    font-weight: bold;
    p{
      margin: 0;
    }
  }
}

.hide{
  transition: none;
  opacity: 0;
  pointer-events: none;
}
.clicked-option{
  transform: translateY(6px);
  box-shadow: none;
  pointer-events: none;
  p{
    transition-delay: .1s;
    color: white;
  }    
}
.correct-answer{
  background-color: #35da67;
  border: 3px solid #35da67;
  box-shadow: 0px 6px 0px 0px #177232;
  pointer-events: none;
  p{
    color: white;
  }
}
.correct{
  animation-duration: 200ms;
  animation-name: correct-answer;
  animation-delay: 100ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes correct-answer {
  100%{
    border: 3px solid white;
    background-color: #35da67;
  }
}

.incorrect-answer{
  background-color: #d83030;
  border: 3px solid #d83030;
  box-shadow: 0px 6px 0px 0px #741d1d;
  pointer-events: none;
  p{
    color: white;
  }
}
.incorrect{
  animation-duration: 200ms;
  animation-name: incorrect-answer;
  animation-delay: 200ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes incorrect-answer {
  100%{
    border: 3px solid white;
    background-color: #d83030
  }
}
</style>