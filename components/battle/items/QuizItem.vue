<template>
  <div
    class="item-wrapper"
    :style="!shop ? 'position: relative;' : ''">
    <div ref="top" class="top-item circle-frame"
      :style="size"
      v-tooltip="{
        content: item.description,
        trigger: 'hover',
      }" 

      @mousedown="onMouseDown" 
      @mouseup="onMouseUp"
      @mouseleave="onMouseUp"
      @touchstart="onMouseDown" 
      @touchend="onMouseUp">
      <LottieAnim
        class="bought-animation"
        ref="succes"
        :animationData="require('@/assets/animations/succes.json')"
        :loop="false"
        :autoPlay="false"
        @complete="buyItem"
      />
      <svg class="progress-check" ref="progress" data-role="radial-progress" width="100%" height="100%" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle r="50%" cx="50%" cy="50%" fill="transparent"></circle></svg>
      <img :style="size" class="item-image" :src="require(`@/assets/images/items/${item.imagePath}`)">

    </div>

    <div v-if="shop" class="price-tag quiz-item-price"><img src="/_nuxt/assets/images/coin.png" alt="coin"> {{item.price}}</div>
    <div v-else class="count-items">{{count}}</div>
  </div>
</template>

<script>
import Vue from 'vue';
import LottieAnim from 'lottie-web-vue';

export default {
  components:{LottieAnim},
  props:['item', 'shop'],
  data() {
    return {
      hold: false,
      timer: null,
      bought: false,
      size: 'width: 80px; height: 80px;',
      count: 0,
    }
  },
  mounted(){
    this.count = parseInt(this.item.count);
    this.size = this.shop ? this.size : 'width: 55px; height: 55px; margin-bottom: 0;';
  },
  computed:{
    canBuy(){
      return parseInt(this.$store.getters.currentUserPoint) < parseInt(this.item.price);
    }
  },
  methods: {
    close () {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },

    boughtFunc(){
      if(this.canBuy){
          Vue.$toast.open({
            message: 'Point yetarli emas!',
            type: 'error',
            position: 'top',
          });
          this.bought = false;
          return;
      }
      this.$refs.succes.$el.style.zIndex = '10';
      this.$refs.succes.stop();
      this.$refs.succes.play();
    },
    useFunc(){
      if(this.$store.getters.quizInfo.reverse){
        Vue.$toast.open({
          message: 'Elementni bu yerda ishlatib bo\'lmaydi',
          type: 'warning',
          position: 'top',
        });
        this.bought = false;
        return;
      }
      if (this.$store.getters.currentItems.includes(this.item.name)) {
        Vue.$toast.open({
          message: 'Elementlarni har bir savolda bir marttadan ishlatishingiz mumkin!',
          type: 'warning',
          position: 'top',
        });
        this.bought = false;
        return;
      }
      this.$store.dispatch('setIsPausedTime', true);
      this.$refs.succes.$el.style.zIndex = '10';
      this.$refs.succes.stop();
      this.$refs.succes.play();
    },

    onMouseDown(){
      if(this.bought)
        return;

      this.$refs.top.classList.add('active');

      this.hold = true;
      this.$refs.progress.classList.add('progres-animation');
      this.timer = setTimeout(() => {
        this.bought = true;
        if(this.shop)
          this.boughtFunc();
        else
          this.useFunc();
        
      }, 1500);
    },
    onMouseUp(){
      this.isShowDesc = false;
      this.hold = false;
      clearTimeout(this.timer);
      if(this.bought)
        return;

      this.$refs.top.classList.remove('active');
      this.$refs.progress.classList.remove('progres-animation');
    },
    buyItem(){
      this.bought = false;
      this.$refs.progress.classList.remove('progres-animation');
      setTimeout(() => {
        this.$refs.succes.$el.style.zIndex = '-10';
        if(this.shop)
          this.boughtItem();
        else
          this.removeItem();
      }, 500);
    },

    boughtItem(){
       this.$store.dispatch('setCurrentUserPoint', -parseInt(this.item.price));
       this.$store.dispatch('dataQuizItem',{
          mode: 'buyItem',
          userId: this.$store.getters.user.id,
          itemId: this.item.id,
          price: this.item.price
        });
    },
    removeItem(){
      this.$emit('useItem', this.item);
      this.$store.dispatch('dataQuizItem',{
        mode: 'removeItem',
        userId: this.$store.getters.user.id,
        itemId: this.item.id
      });
      this.count -= 1;
      if(this.count <= 0)
        this.close();
    }
  },
}
</script>