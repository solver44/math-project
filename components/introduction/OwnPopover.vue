<template>
  
    <div class="introduction-popover">
      <div v-if="isClickable" class="clickable-placeholder"
            @click="clickedPlaceholder"
            :style="`will-change: transform; 
            top: ${getPosPlaceholder().top}px;
            left: ${getPosPlaceholder().left}px;
            transform: translate(-50%, -50%);`">
        <LottieAnim
            :animationData="require('@/assets/animations/hand-click.json')"
            :loop="true"
            :autoPlay="true"
        />
      </div>
      <div v-if="isBorder" class="border-placeholder"
            :style="`will-change: transform; 
            width: ${position.width}px;
            height: ${position.height}px;
            top: ${positionGlobal.top + position.height/2}px;
            left: ${positionGlobal.left + position.width / 2}px;
            transform: translate(-50%, -50%);`">
      </div>


        <div id="popover_nlztgnlsoi" aria-hidden="false" 
        ref="popover"
        class="tooltip popover vue-popover-theme open" 
        :style="`visibility: visible; 
        position: absolute; 
        will-change: transform; 
        top: ${getPos().top}px;
        left: ${getPos().left}px; 
        transform: translateX(-50%);
        opacity: 0; transition: opacity .5s;
        `"

        :x-placement="place">

          <div class="wrapper">
            <div class="tooltip-inner popover-inner" style="position: relative;">
              <div>
                <p>{{text}}</p> 
                <div class="flex-view popover-btns">
                  <button v-if="!isClickable" @click="nextStep" class="popover-primary">Chunarli</button>
                  <button @click="prevStep" style="width: 100%;" class="popover-secondary">Ortga</button>
                </div>
              </div>
            </div>
            <div class="tooltip-arrow popover-arrow" :style="isUpAndDown"></div>
          </div>
        </div>

    </div>

</template>

<script>
import LottieAnim from 'lottie-web-vue';

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  components:{LottieAnim},
  props:{
    target: String,
    text: String,
    placement: {
      type: String,
      default: 'bottom'
    },
    placeholder: {
      type: String,
      default: 'border'
    },
    minPos: String,
  },
  data() {
    return {
      place: 'bottom',
      position: {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
      },
      positionGlobal:{
        left: 0,
        top: 0
      },
      offset: 0,
      w: 0,
      h: 0,
      offsetWidthOwn: 0,
      offsetHeightOwn: 0,

      
    }
  },
  updated() {
    this.$refs.popover.style.opacity = '1';
  },
  mounted: async function () {
    if(this.target == '#video-1' || this.target == '#video-2'){
      this.currenttarget.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
      await timeout(500);
    }
      
    const that = this;
    window.addEventListener('resize', function(event){
      that.changePos();
    });
    this.offsetWidthOwn = this.$refs.popover.offsetWidth;
    this.offsetHeightOwn = this.$refs.popover.offsetHeight;
    
    this.changePos();
  },
  methods: {
    clickedPlaceholder(){
      this.nextStep();
      this.currenttarget.click();
    },
    changePos(){
      this.w = window.innerWidth;
      this.place = this.w <= 880 ? this.minPos : this.placement;
      this.h = window.innerHeight;
      
      this.position = this.currenttarget.getBoundingClientRect();
      this.positionGlobal = getOffset(this.currenttarget);
      
      if(this.w < this.getPos().left + this.offsetWidthOwn / 2)
      {
        this.offset = (this.getPos().left + this.offsetWidthOwn/2) - this.w;
        this.position.x -= (this.offset);
      }
      else if(0 > this.getPos().left - this.offsetWidthOwn/2)
      {
        this.offset = (this.getPos().left - this.offsetWidthOwn/2);
        this.position.x += Math.abs(this.offset);
      }
    },
    nextStep(){
      switch (this.$store.getters.currentStep) {
        case 4: !this.giftTaken ? this.$store.dispatch('nextStep', 1000) 
        : this.$store.dispatch('nextStep'); break;
        case 10:
          this.w <= 880 ? this.$store.dispatch('nextStep') : this.$store.dispatch('nextStep', 2);
          break;
        case 11:
          this.w <= 880 ? this.$store.dispatch('nextStep', 1) : this.$store.dispatch('nextStep');
        default:
          this.$store.dispatch('nextStep');
          break;
      }
    },
    prevStep(){
      switch (this.$store.getters.currentStep) {
        case 12:
          this.w <= 880 ? this.$store.dispatch('prevStep') : this.$store.dispatch('prevStep', 2);
          break;
        default:
          this.$store.dispatch('prevStep');
          break;
      }
    },
    getBottomPos(){
      return {
        top: this.position.y + this.position.height + 5,
        left: this.position.x + this.position.width/2,
      }
    },
    getTopPos(){
      return {
        top: this.position.y - this.offsetHeightOwn - 5,
        left: this.position.x + this.position.width/2,
      }
    },
    getLeftPos(){
      return {
        top: this.position.y + this.position.height / 2 - this.offsetHeightOwn / 2,
        left: this.position.x - this.offsetWidthOwn / 2 - 5,
      }
    },
    getRightPos(){
      return {
        top: this.position.y + this.position.height / 2 - this.offsetHeightOwn / 2,
        left: this.position.x + this.offsetWidthOwn / 2 + 5 + this.position.width,
      }
    },
    getPos(){
      if(this.place == 'bottom')
        return this.getBottomPos();
      else if(this.place == 'top')
        return this.getTopPos();
      else if(this.place == 'right')
        return this.getRightPos();
      else
        return this.getLeftPos();
    },
    getPosPlaceholder(){
      if(this.target != '#popover-buy-btn')
        return {
          left: this.positionGlobal.left + this.position.width / 2,
          top: this.positionGlobal.top + this.position.height / 2
        }
      else
        return {
          left: this.position.left + this.position.width / 2,
          top: this.position.top + this.position.height / 2
        }
    }
  },
  computed:{
    currenttarget(){
      return document.querySelector(this.target);
    }, 
    isUpAndDown(){
      if(this.place == 'top' || this.place == 'bottom')
        return `left: ${90 + this.offset}px`;
      else if(this.place == 'left')
        return `right: ${-5 + this.offset}px`;
      else
        return `left: ${-5 + this.offset}px`;
    },
    giftTaken(){
      return this.$store.getters.userIntroduction.giftTaken == '1';
    },
    isClickable(){
      return this.placeholder == 'clickable';
    },
    isBorder(){
      return this.placeholder == 'border';
    }
  }
}
</script>

<style lang="scss" scoped>
  .border-placeholder{
      z-index: 1001;
      position: absolute;
      border: 2px dashed rgb(17, 160, 255);
  }

  .clickable-placeholder
  {
    z-index: 100000;
    position: absolute; 
    width: 200px; 
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>