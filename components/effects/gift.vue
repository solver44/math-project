<template>
  
    <div @click="playAnim" class="gift-main" :style="anim ? 'cursor: default;' : '' ">
      <div ref="gift" class="gift">
        <img src="@/assets/images/coin.png" alt="point">
      </div>
      <LottieAnim class="gift-animation"
        :animationData="require('@/assets/animations/gift.json')"
        ref="anim"
        :loop="false"
        :autoPlay="false"
        @complete="complete"
      />
    </div>

</template>

<script>
import LottieAnim from 'lottie-web-vue';

export default {
  components:{LottieAnim},
  data() {
    return {
      anim: false,
    }
  },
  methods: {
    complete(){
      this.$store.dispatch('setUserIntroduction', {
        mode: 'giftTaken',
        userId: this.$store.getters.user.id,
        value: true,
      });
      this.$store.dispatch('setPoint', {
        mode: 'setPointOnly',
        userId: this.$store.getters.user.id,
        point: 5000,
      });
      this.$emit('complete');
    },
    playAnim(){
      if(this.anim)
        return;

      this.$refs.gift.classList.add('gift-animate');
      this.$refs.anim.play();
      this.anim = true;
    }
  },
}
</script>

<style lang="scss" scoped>
.gift-animation{
  width: 692px;
  height: 390px;
  z-index: 100;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
.gift-main{
  cursor: pointer;
}
.gift{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  img{
    width: 50px;
    height: 50px;
  }
}
.gift-animate{
  animation-name: gift-anim;
  animation-duration: 1.6s;
  animation-fill-mode: forwards;
}
.gift-move{
  animation-name: gift-move-anim;
  animation-duration: 1.6s;
  animation-fill-mode: forwards;
}

@keyframes gift-anim{
  0%{
    transform: translate(-50%, -70%);
  }
  90%{
    transform: translate(-50%, -70%);
  }
  100%{
    transform: translate(-50%, -230%);
  }
}
@media screen and(max-width: 600px) {
  @keyframes gift-anim{
  0%{
    transform: translate(-50%, -70%);
  }
  90%{
    transform: translate(-50%, -70%);
  }
  100%{
    transform: translate(-50%, -195%);
  }
}
}

@keyframes gift-move-anim {
  0%{
    left: 50%;
    top: 50%;
  }
  100%{
    left: var(--my-end-left);
    top: var(--my-end-top);
    width: 25px;
  }
}
</style>