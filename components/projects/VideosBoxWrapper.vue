<template>
  <div :id="`video-${cnt}`" class="project-box-wrapper">
      <div class="project-box video" style="background-color: var(--project-box-video)">
        <div class="project-box-content-header video">
          <div v-if="bought" class="bought-status">
            Sotilgan
          </div>

          <img src="@/assets/images/background-video.jpg" ref="vid" oncontextmenu="return false;" :id="`video${pkey}`" class="video-wrap" />
          
          <p v-if="!isLock" class="box-content-header video" :style="`color: var(--app-container);`">{{title}}</p>
          <div v-else class="both-value">
            <div class="locked-video">
              <LottieAnim class="svg-animation-unlocked"
                ref="lock"
                :animationData="require('@/assets/animations/unlocked.json')"
                :loop="false"
                :autoPlay="false"
                @complete="unlock"
              />
            </div>
            <p class="box-content-header video" 
            style="font-size: 14px;text-align:center;position:initial;width:auto;transform:none;color:var(--app-container);">{{title}}</p>
          </div>

        </div>
        <div v-if="!isLock" class="project-box-footer video">
          <button @click="watch" class="days-left watch-video-btn">
            <i class="fa-solid fa-eye"></i> Ko'rish
            <i v-if="status == 'completed'" class="far fa-check-circle checkmark"></i>
          </button>
        </div>
        <div v-else class="project-box-footer video">

          <v-popover :disabled="!isShowPopover" placement="top" class="buy-button-wrapper">
            <button class="days-left buy-video-btn">
              <div class="price-tag"><img src="/_nuxt/assets/images/coin.png" alt="coin"> {{price}}</div>
              <p>Ochish</p>
            </button>

            <template slot="popover">
              <p>Xaridni tasdiqlash</p>
              <div class="flex-view popover-btns">
                <button @click="buyVideo" id="popover-buy-btn" class="popover-primary">Tasdiqlayman</button>
                <button class="popover-secondary" v-close-popover>Yopish</button>
              </div>
            </template>
          </v-popover>
          

        </div>
      </div>
    </div> 
</template>

<script>
import Vue from 'vue';
import {mapActions} from 'vuex';
import LottieAnim from 'lottie-web-vue';

export default {
  components:{LottieAnim},
  props:{
    cnt: Number,
    pkey: String,
    title: String,
    src: String,
    isCurrent: Boolean,
    request: {
      type: Boolean,
      default: false
    },

    status: String,
    userId: String,

    price: String,
    bought: Boolean
  },
  data() {
    return {
      isLock: true,
      isShowPopover: true,
    }
  },
  mounted() {
    if(this.bought || (parseInt(this.userId) == parseInt(this.$store.getters.user.id) && this.status == 'completed') || this.isCurrent){
      this.isLock = false;
      if(this.$store.getters.showNextVideo.show)
        this.watch();
    }
    if(this.request){
      setTimeout(() => {
        this.snapshotCreated();
      }, 500);
    }
  },
  methods: {
    ...mapActions(['showVideoContent']),
    watch(){
      if(this.isLock)
        return;
        
      this.showVideoContent({show:true, index: parseInt(this.pkey)});
    },
    snapshotCreated(){
      this.$emit('snapshotCreated');
    },
    buyVideo(){
      if(parseInt(this.$store.getters.user.point) < parseInt(this.price))
      {
        Vue.$toast.open({
          message: 'Point yetarli emas!',
          type: 'error',
          position: 'top',
        });
        return;
      }
      this.$store.dispatch('buyVideo',
      {
        mode: 'buy',
        userId: this.$store.getters.user.id,
        videoId: parseInt(this.pkey),
        price: parseInt(this.price),
      });
      this.$refs.lock.play();
      this.isShowPopover = false;
    },
    unlock(){
      this.isLock = false;
    }
  },
}
</script>

<style lang="scss">
@font-face {
   font-family: 'mv-boli';
   src: url('@/assets/webfonts/mvboli.ttf');
}
.bought-status{
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: var(--global-radius);
  background-color: rgba(255, 255, 255, 0.342);
  color: white;
}
.popover-btns{
  gap: 10px;
}
.popover-primary{
  color: white;
  padding: 5px 10px;
  border: none;
  background-color: rgb(71, 179, 241);
  border-radius: 8px;
  box-shadow: 0px 3px 0px 0px rgb(31, 111, 158);
  transition: all .2s;
  &:active{
    transform: translateY(3px);
    box-shadow: none;
  }
}
.popover-secondary{
  color: black;
  padding: 5px 10px;
  border: none;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(167, 167, 167);
  border-radius: 8px;
  box-shadow: 0px 3px 0px 0px var(--shadow);
  transition: all .2s;
  &:active{
    transform: translateY(3px);
    box-shadow: none;
  }
}

.both-value{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.452);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.locked-video{
  pointer-events: none;
  width: 100%;
  height: 70%;
  position: relative;
  // background-color: rgba(0, 0, 0, 0.452);
  // position: absolute;
  // pointer-events: none;
  // width: 100%;
  // height: 100%;
  // user-select: none;
  // z-index: 100;
  // font-size: 70px;
  .svg-animation-unlocked{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgb(0, 0, 0);
  }
}
.buy-video-btn{
  position: relative;
  padding: 6px 8px;
  cursor: pointer;
  color: var(--text-color);
  p{
    position: absolute;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.price-tag{
  float: left;
  color: white;
  padding: 2px 8px;
  font-size: 12px;
  background-color: #2200ff80;
  border-radius: var(--global-radius);
  margin-right: 10px;
  img{
    width: 15px;
    
  }
}
.buy-button-wrapper{
  width: 100%;
  .trigger{
    width: 100%;  
  }
}

.video-wrap{
  width: 100%;
  height: 100%;
  // border-radius: 30px 30px 0px 0px;
  overflow: hidden;
  img{
    // max-height: 132px;
    width: inherit;
    // height: inherit;
  }
}
.watch-video-btn{
  position: relative;
  color: var(--text-color);
}
.checkmark{
  float: right;
  position: absolute;
  right: 10px;
  font-size: 20px;
  top: 2px;
  // transform: translateY(50%);
  // color: var(--main-color);
}
.project-box.video{
  position: relative;
  user-select: none;
  padding: 0px;
  overflow: hidden;
}
.project-box-content-header.video{
  margin: 0;
  position: relative;
  z-index: 0;
  font-family: 'mv-boli';

}
.project-box-footer.video{
  padding: 16px;
  &::after{
    width: 100%;
    background-color: var(--app-container);
    left: 0;
  }
}
.box-content-header.video
{
  position: absolute;
  top: 55%;
  font-size: 18px;
  font-weight: 100;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 1;
  width: 92%;
  text-overflow: ellipsis;
}
@media screen and (max-width: 520px) {
  .buy-video-btn{
    p{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.project-boxes.jsListView{
  .project-box-footer.video{
    justify-content: center !important;
    align-items: center;
    padding: 0px 16px;
    margin-right: 0;
    flex: 2;
    width: 100%;
    button{
      height: 50%;
    }
  }
  .project-box.video{
    justify-content: space-between;
  }
  .project-box{
    height: 100px;
  }
  .project-box-content-header.video{
    max-width: inherit !important;
    // margin-right: 25px;
    .video-wrap{
      height: 99%;
      border-radius: 14px;
    }
  }
  .box-content-header.video{
    text-overflow: auto;
  }
}
</style>