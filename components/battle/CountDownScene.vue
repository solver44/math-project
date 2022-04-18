<template>
<div class="countdown-scene">
  <LottieAnim class="svg-animation"
      :animationData="require('@/assets/animations/countdown.json')"
      :loop="false"
      :autoPlay="true"
  />
</div>
</template>

<script>
import LottieAnim from 'lottie-web-vue';

export default {
components:{LottieAnim},
}
</script>

<style lang="scss">
.countdown-scene{
  width: 100%;
  height: 100%;
  position: absolute;
  background: var(--app-container);
  z-index: 999;
}
.svg-animation{
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>