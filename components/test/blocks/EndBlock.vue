<template>
   <div class="end-block">
    <VideoModal @closeRestart="closeRestart" v-if="showRestart" :index="parseInt($route.query.id)" :isRestart="true" />

    <div class="game-panel" :style="panelColor">

      <div v-if="isItCorrect" class="congratulations top-status">
        <i class="fa-solid fa-check"></i>
      </div>
      <div v-else class="unfortunately top-status">
        <i class="fa-solid fa-xmark"></i>
      </div>

      <transition appear name="fade">
        <div class="main-section"><p>Natija</p></div>
      </transition>
      <div class="accuracy-info-section">
        <transition-group appear name="fadeUp">
          <div key="f1" class="accuracy-bar-wrapper">
            <label class="accuracy-label">Aniqlik</label>
            <div class="accuracy-bar">
              <div class="accuracy-success-fill" :style="`width: calc(${correctLengthPercent}% - 2px);`">
              </div>
              <div class="accuracy-danger-fill" :style="`width: calc(${incorrectLengthPercent}% - 2px);`">
              </div>
              <div class="accuracy-label-tooltip fadeInUp anim-400-duration" :style="`left: calc(${correctLengthPercent}% - 18px);`">
                <div class="tooltip-text">{{correctLengthPercent}}%</div>
              </div>
            </div>
          </div>
          <div key="f2" class="accuracy-info-second-row flex-view delay-100">
            <div class="top-section info-container flex-view">
            <div class="value-and-title-container flex-view flex-column">
              <span class="info-title accuracy-label">Point</span>
              <span class="player-score">{{resultPoint}}</span>
            </div>
            <div class="icon-wrapper score flex-view all-center"><i class="fas fa-coins"></i>
            </div>
            </div>
          </div>
        </transition-group>
      </div>
      <transition appear name="fade">
        <div v-if="!isItCorrect" class="accuracy-label"><p style="color: #ef3c69">Qayta urinib ko'ring :(</p></div>
      </transition>
      <div v-if="!isBattleQuiz" class="button-section">
        <transition appear name="fadeUp">
          <button @click="restart" class="primary-game-btn game-btn delay-200 restart-btn"><i class="fa-solid fa-rotate-left"></i></button>
        </transition>
        <transition appear name="fadeUp">
          <button v-if="isItCorrect && !isCompleted" @click="toNextVideo" class="third-game-btn game-btn delay-200 restart-video-btn"><i class="fa-solid fa-forward"></i></button>
          <button v-else @click="showRestartVideo" class="secondary-game-btn game-btn delay-200 restart-video-btn"><i class="fa-solid fa-play"></i></button>
        </transition>
      </div>
      <div v-else class="button-section">
        <transition appear name="fadeUp">
          <button @click="restart" class="primary-game-btn game-btn delay-200 restart-btn"><i class="fa-solid fa-rotate-left"></i></button>
        </transition>
        <transition appear name="fadeUp">
          <button @click="$router.push('/')" class="primary-game-btn game-btn delay-200 restart-btn"><i class="fa-solid fa-house"></i></button>
        </transition>
      </div>
    </div>
    <div class="settings-card game-panel" :style="panelColor">
      <div class="main-section"><p>Statistika</p></div>
      <transition-group tag="div" appear name="bounce" class="stats-container flex-view delay-300">
          <div key="box1" class="correct-answers stat-box"><i class="fas fa-check-circle"></i><p class="value">{{correctLength}}</p><div class="label">To'g'ri javob</div></div>
          <div key="box2" class="incorrect-answers stat-box"><i class="fas fa-times-circle"></i><p class="value">{{incorrectLength}}</p><div class="label">Noto'g'ri javob</div></div>
          <div key="box3" class="spent-time stat-box"><i class="fas fa-stopwatch"></i><p class="value">{{Math.abs(timeSec - quizInfo.indexes.length * 1.4)}} s</p><div class="label">Sarflangan vaqt</div></div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import VideoModal from '~/components/VideoModal.vue';

export default {
  components: { VideoModal },
  data() {
    return {
      showRestart: false,
      greenColor: 'background: linear-gradient(180deg, #00c985 9%, var(--game-panel) 9%, var(--game-panel) 100%);',
      redColor: 'background: linear-gradient(180deg, #ef3c69 9%, var(--game-panel) 9%, var(--game-panel) 100%);',
      timeSec: 0,
    }
  },
  methods: {
    restart(){
      // this.$store.dispatch('startGame', {loader:false, start: false});
      this.$store.dispatch('restartQuiz');
    },
    showRestartVideo(){
      this.showRestart = true;
    },
    closeRestart(){
      this.showRestart = false;
    },
    toNextVideo(){
      this.$store.dispatch('isShowNextVideo', {show: true, videoId: this.$route.query.id,});
      this.$router.push('/');
    },
  },
  beforeMount() {
    this.timeSec = this.timerSeconds;
  },
  computed:{
    ...mapGetters(['resultPoint', 'isBattleQuiz', 'oldResults', 'timerSeconds', 'user', 'getTitle', 'quizInfo']),
    correctLength(){
      return this.oldResults.filter((item, _) => {
        return item.incorrectId < 0;
      }).length;
    },
    correctLengthPercent(){
      return Math.round(this.correctLength * 100 / this.quizInfo.indexes.length);
    },
    incorrectLength(){
      return this.oldResults.filter((item, _) => {
        return item.incorrectId > -1;
      }).length;
    },
    incorrectLengthPercent(){
      return Math.round(this.incorrectLength * 100 / this.quizInfo.indexes.length);
    },
    isItCorrect(){
      if(this.isBattleQuiz)
        return true;
      else
        return this.correctLength >= Math.round(this.quizInfo.indexes.length * .8);
    },
    panelColor(){
      return this.isItCorrect ? this.greenColor : this.redColor;
    },
    isCompleted(){
      if(this.isBattleQuiz)
        return false;
      else
        return this.getTitle.status == 'completed';
    }
  },
  async mounted() {
    if(!this.isBattleQuiz && this.isCompleted){
      await this.$store.dispatch('resetPoint');
      return;
    }
    
    if(this.isBattleQuiz)
    {
      this.$store.dispatch('setVideoData', {
          mode: 'setPointOnly',
          userId: this.user.id,
          point: this.resultPoint,
        });
    }
    else if(this.isItCorrect)
    {
        this.$store.dispatch('setVideoData', {
          mode: 'setPoint',
          userId: this.user.id,
          videoId: this.$route.query.id,
          point: this.resultPoint,
          status: 'completed',
        });
    }
    else
      this.$store.dispatch('resetPoint');
  },
}

</script>

<style lang="scss" scoped>
.top-status{
  border-radius: 50%;
  background-color: #ffffff;
  width: 60px;
  height: 60px;
  line-height: 57px;
  text-align: center;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
}
.congratulations{
  color:#00c985;
  border: 3px solid #00c985;
}
.unfortunately{
  color:#ef3c69;
  border: 3px solid #ef3c69;
}
.button-section{
  display: flex;
  gap: 24px;
  width: 100%;
}
.stats-container{
  width: 100%;
  color: var(--text-color);
  text-align: center;
  justify-content: space-between;
  .value{
    font-size: 28px;
    margin: 0;
    height: 38px;
    z-index: 10;
  }
  .label{
    opacity: .8;
    font-size: 15px;
    font-variant-caps: all-small-caps;
    font-weight: 700;
    line-height: 13px;
  }
}
.stat-box{
  width: calc(33% - 16px);
  background-color: var(--app-container);
  border-radius: 8px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  i{
    font-size: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-10%, 20%);
    opacity: .4;
  }
}
.restart-video-btn{
  flex: 1;
  i{
    animation: fadeInOut 1s linear;
  animation-iteration-count: infinite;
  }
  
}
@keyframes fadeInOut{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
.restart-btn{
  flex: 3;
  line-height: 1;
}
.correct-answers i{
  color: #00c985;
}
.incorrect-answers i{
  color: #ef3c69;
}
.spent-time i{
  color: rgb(139, 23, 139);
}
.accuracy-info-second-row .info-container {
    width: 154px;
    height: 72px;
    padding: 12px 16px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin-bottom: 4px;
}
.accuracy-info-section{
  width: 100%;
}
.icon-wrapper{
  background: linear-gradient(135deg,#f5a623,rgba(245,166,35,.69));
  width: 32px;
  height: 32px;
  border-radius: 11px;
  i{
    color: white;
    margin: 0 auto;
    margin-top: 25%;
  }
}
.accuracy-info-second-row {
    color: var(--text-color);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 18px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.accuracy-label{
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: rgb(150, 150, 150);
  }
.accuracy-bar-wrapper{
  padding: 12px 16px;
  .accuracy-bar{
    height: 12px;
    margin-bottom: 2px;
    position: relative;
    margin-top: 8px;
  }
  .accuracy-success-fill{
    left: 0;
    border-radius: 8px 0 0 8px;
    background-color: #00c985;
    position: absolute;
    top: 0;
    width: 0;
    height: 16px;
    -webkit-transition: width .2s ease-in-out;
    transition: width .2s ease-in-out;
  }
  .accuracy-danger-fill{
    right: 0;
    border-radius: 0 8px 8px 0;
    background-color: #ef3c69;
    position: absolute;
    top: 0;
    width: 0;
    height: 16px;
    -webkit-transition: width .2s ease-in-out;
    transition: width .2s ease-in-out;
  }
  .accuracy-label-tooltip{
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px 3px;
    position: absolute;
    width: 36px;
    height: 25px;
    top: -5px;
    background: var(--main-color);
    border-radius: 8px;
    z-index: 1;
  }
  .tooltip-text{
    position: relative;
    margin: 0 auto;
    margin-left: 1px;
    width: 24px;
    height: 15px;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: var(--app-container)
  }
}
.main-section{
  margin-top: 30px;
  p{
    padding: 0;
    margin: 0;
    font-size: 18px;
    color: var(--text-color);
  }
}
  .end-block{
    height: 100%;
    padding-top: 40px;
  }
  .game-panel{
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    overflow: visible;
  }
</style>