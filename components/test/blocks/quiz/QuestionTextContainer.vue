<template>
  <div class="question-container">
    <div class="question-text">
      <p v-katex="parsedQuestion" ></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    question: String
  },
  computed:{
    parsedQuestion(){
      let question = this.question;
      if(question[0] == '\\'){
        question = question.slice(1);
        question = question.slice(0, question.length - 2) + question.slice(question.length - 1);
      }
      return question;
    }
  },
}
</script>

<style lang="scss">
  .question-container{
    display: flex;
    align-items: center;
    width: 100%;
    height: 45%;
  }
  .question-text{
    font-size: 40px;
    text-align: center;
    color: var(--text-color);
    width: 100%;
    user-select: none;
  }
  @media screen and (max-width: 600px) {
  .question-text{
    font-size: 30px;
  }
}
</style>