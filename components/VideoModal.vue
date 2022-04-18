<template>
  <div :style="isIntro ? 'z-index: 1000;' : ''" @click.self="close" class="modal">
      <div ref="vid" class="modal-cnt not-loaded">
        <button @click="close" type="button" class="close-btn"><i class="fas fa-times fa-xl"></i></button> 
        <video oncontextmenu="return false;" class="video-modal" controls controlsList="nodownload" :src="pathVideo == '' ? '' : require('@/assets/' + pathVideo)"></video>
        <div v-if="!isRestart" class="btn-group">
          <button class="training-btn prim">Mashq qilish</button>
          <nuxt-link :to="{name: 'quiz', query: {id: index, gameType: 'solo', shop: true, quizItems: true}}" class="exams-btn prim">Test bajarish</nuxt-link>
        </div>
      </div>
  </div> 
</template>

<script>
import queryData from '../mixins/queryData';

export default {
  mixins:[queryData],
  data() {
    return {
      videoInfo: null,
      pathVideo: ''
    }
  },
  props:{
    index: Number,
    isRestart: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    isIntro(){
      return (this.$store.getters.currentStep >=39 && this.$store.getters.currentStep <= 41);
    },
  },
  mounted() { 
    this.videoInfo = this.getVideoInfoFromId(this.index);
    this.pathVideo = this.isRestart ? this.videoInfo.restartPath : this.videoInfo.path;
    setTimeout(()=>{
      this.$refs.vid.classList.remove('not-loaded');
    },200);

    this.$store.dispatch('isShowNextVideo', {show: false, videoId: -1,});
  },
  methods: {
    close(){
      this.$refs.vid.classList.add('not-loaded');
      setTimeout(()=>{
        if(!this.isRestart)
          this.$store.dispatch('showVideoContent', {show:false, index: -1});
        else
          this.$emit('closeRestart');
      },300);
    }
  },
}
</script>

<style lang="scss">
  .modal{
    z-index: 998;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: rgba(0, 0, 0, 0.877);
    background-color: rgba(17, 17, 19, 0.8);
    backdrop-filter: blur(20px);
  }
.close-btn {
  z-index:999;
  color:var(--main-color);
  border: none;
  background: transparent;
  width: 95%;
  text-align: right;
    width: 90px;
    height: 90px;
    position: absolute;
    top: -25px;
    right: -25px;
    border-radius: 50%;
    i{
      position: absolute;
      top: 60%;
      left: 40%;
      transform: translate(-50%, -50%);
    }
}
.video-modal{
    max-width: 1000px;
    border-radius: 10px;
    width: 95%;
}
.modal-cnt{
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all .2s ease-in !important;
  opacity: 1;
  width: 100%;

    background: var(--projects-section);
    padding-bottom: 20px;
    padding-top: 50px;
    border-radius: var(--global-radius);
    width: 90%;
    overflow: hidden;

  &.not-loaded{
    opacity: 0;
    transform: translateY(-50px);
  }
  .prim{
    border-radius: 8px;
    padding: 10px 50px;
    font-size: 20px;
    margin: 20px 40px;
    border: 1px solid var(--bs-gray-500);
    box-shadow: 0px 4px 0px -1px var(--bs-gray-300);
    &:active{
      transform: translateY(4px);
      box-shadow: none;
    }
  }
  .training-btn{
    background: white;
    color: black;
    transition: all .2s;
  }
  .exams-btn{
    background: #1f1c2e;
    box-shadow: 0px 4px 0px -1px var(--bs-gray-500);
    color: white;
    transition: all .2s;
  }

  @media screen and (max-width: 720px) {
    .btn-group{
      display: contents;
    }
    .prim{
      margin: 10px 0px;
    }
  }
}

</style>