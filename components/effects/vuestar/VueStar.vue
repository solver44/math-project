<template>
  <div class="VueStar"> 
    <div class="VueStar__ground">
      <div class="VueStar__icon" :class="AnimateClass" :style='`color: var(--main-color); font-size: ${size};`'>
        <slot name="icon"></slot>
      </div>
      <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active':active}"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VueStar',
  props: {
    animate: String,
    color: {
      type: String,
      default: 'var(--main-color)',
    },
    size:{
      type: String,
      default: '30px',
    },
    waitForSeconds: {
      type: Number,
      default: 2000,
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
      this.toggleAnimate = !this.toggleAnimate
      this.toggleColor = !this.toggleColor
    }
  },
  data () {
    return {
      active: false,
      toggleAnimate: false,
      toggleColor: false
    }
  },
  computed: {
    AnimateClass () {
      return this.toggleAnimate ? this.animate : ''
    },
    ColorValue () {
      return this.toggleColor ? this.color : ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.toggle();

      setTimeout(() => {
        this.$store.dispatch('setVueStar', false);
      }, this.waitForSeconds);

    }, 200);
  }
}
</script>

<style lang="scss" scoped>
 @import 'CoreBase64.scss';
.VueStar {
 position: absolute;
 right: 20px;
    top: -100%;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.233));
  z-index: 1;
}

.VueStar__ground {
 width: 100px;
 height: 100px;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
}

.VueStar__icon {
 z-index: 888;
 /*❤今年888大发*/
}

.VueStar__decoration {
 width: 100px;
 height: 100px;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 @include base64();
 background-position: 0 0;
 transition: background-position 1s steps(25);
 transition-duration: 0s;
 &--active {
  transition-duration: 1s;
  background-position: -2500px 0;
 }
}
</style>