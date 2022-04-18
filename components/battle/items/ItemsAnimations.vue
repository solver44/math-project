<template>
  <div v-if="item.name == 'Freezer'" class="freeze-bg quiz-item-animation">
    <LottieAnim class="freeze-animation item-animation"
      :animationData="require('@/assets/animations/items/thermometer-cold.json')"
      :loop="false"
      :autoPlay="true"
      @complete="complete"
    />
  </div>
  <div v-else-if="item.name == 'Correct answer'" class="correct-answer-bg quiz-item-animation">
    <LottieAnim class="correct-answer-animation item-animation"
      :animationData="require('@/assets/animations/items/correct-answer.json')"
      :loop="false"
      :autoPlay="true"
      @complete="complete"
    />
  </div>
  <div v-else-if="item.name == 'Time kill'" class="time-kill-bg quiz-item-animation">
    <LottieAnim class="time-kill-animation item-animation"
      :animationData="require('@/assets/animations/items/time-up.json')"
      :loop="false"
      :autoPlay="true"
      @complete="complete"
    />
  </div>
</template>

<script>
import LottieAnim from 'lottie-web-vue';

export default {
components:{LottieAnim},
  props:['item'],
  methods: {
    async complete(){
      await this.$store.dispatch('setCurrentItems', this.item.name);     
      await this.$store.dispatch('setIsPausedTime', false);
      this.$emit('end');
    }
  },
}
</script>

<style lang="scss" scoped>
.quiz-item-animation{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.333);
}
.item-animation{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%; 
}
.freeze-bg{
  background-color: rgba(98, 184, 255, 0.333);
}
.correct-answer-animation{
  width: 80%;
  height: 80%; 
}
</style>