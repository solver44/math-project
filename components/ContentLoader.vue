<template>
  <div class="content-loader" :style="`background-color: var(--projects-section); width: ${width};`">
    <!-- <div class="swapping-squares-spinner">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div> -->
    <LottieAnim 
      class="swapping-squares-spinner"
      :animationData="require('@/assets/animations/content-loader.json')"
      :loop="true"
      :autoPlay="true"
    />
  </div>
</template>

<script>
import LottieAnim from 'lottie-web-vue';

export default {
  components:{LottieAnim},
  props:{
    color: {
      type: String,
      default: 'var(--projects-section);'
    },
    width: {
      type: String,
      default: '100%',
    }
  }
}
</script>

<style lang="scss" scoped>
    .content-loader{
      animation: none !important;
      // position: absolute;
      height: 100%;
      z-index: 1;
    }
   .swapping-squares-spinner, .swapping-squares-spinner * {
      box-sizing: border-box;
    }

    .swapping-squares-spinner {
      height: 50%;
      width: 50%;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .swapping-squares-spinner .square {
      height: calc(65px * 0.25 / 1.3);
      width:  calc(65px * 0.25 / 1.3);
      animation-duration: 1000ms;
      border: calc(65px * 0.04 / 1.3) solid var(--main-color);
      margin-right: auto;
      margin-left: auto;
      position: absolute;
      animation-iteration-count: infinite;
    }

    .swapping-squares-spinner .square:nth-child(1) {
      animation-name: swapping-squares-animation-child-1;
      animation-delay: 500ms;
    }

    .swapping-squares-spinner .square:nth-child(2) {
      animation-name: swapping-squares-animation-child-2;
      animation-delay: 0ms;
    }

    .swapping-squares-spinner .square:nth-child(3) {
      animation-name: swapping-squares-animation-child-3;
      animation-delay: 500ms;
    }

    .swapping-squares-spinner .square:nth-child(4) {
      animation-name: swapping-squares-animation-child-4;
      animation-delay: 0ms;
    }

    @keyframes swapping-squares-animation-child-1 {
      50% {
        transform: translate(150%,150%) scale(2,2);
      }
    }

    @keyframes swapping-squares-animation-child-2 {
      50% {
        transform: translate(-150%,150%) scale(2,2);
      }
    }

    @keyframes swapping-squares-animation-child-3 {
      50% {
        transform: translate(-150%,-150%) scale(2,2);
      }
    }

    @keyframes swapping-squares-animation-child-4 {
      50% {
        transform: translate(150%,-150%) scale(2,2);
      }
    }
</style>