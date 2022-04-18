<template>
  <div class="start-block">

    <div v-if="isBattleQuiz" class="battle-img in-quiz">
      <i class="fa-solid fa-swords fa-lg"></i>
    </div>

    <div class="game-panel">
        <button @click="start" class="start-btn game-btn"><i class="fas fa-play"></i> {{isFirstTime ? 'Boshlash' : 'Qayta urinib ko\'rish'}}</button>
    </div>
    
    <div v-if="!isBattleQuiz" class="info game-panel">
      <div class="info-box">
        <h2 class="panel-title">{{getTitle.subject}}</h2>
        <p class="panel-text"><i class="fas fa-question-circle"></i> 10 ta savol</p>
      </div>
    </div>
    <div v-if="isBattleQuiz || $route.query.shop" class="shop game-panel">
      <div class="shop-box">
        <div class="panel-text">
          <h2>Do'kon</h2>

          <div class="user-point">
              <animated-number
                :value="currentUserPoint"
                :formatValue="formatToPoint"
              />
              <img src="@/assets/images/coin.png" alt="coin">
          </div>
          
        </div>
        <QuizItems />
        <p class="panel-text"><i class="fas fa-question-circle"></i> {{ isBattleQuiz ? '30' : '10' }} ta savol</p>
      </div>
    </div>
    
    <div class="settings-card game-panel">
      <p class="panel-text">Sozlash</p>
      <ul class="settings-wrap">
        <li class="setting">
          <div class="setting-description"><i class="fas fa-music fa-lg"></i>Ovoz</div>
          <input checked type="checkbox" class="switch" id="switch"><label class="switch-label" for="switch"></label>
        </li> 
        <li class="setting">
          <div class="setting-description"><i class="fas fa-gift fa-lg"></i>Bonuslar</div>
          <input checked type="checkbox" class="switch" id="switch1"><label class="switch-label" for="switch1"></label>
        </li>
        <li class="setting">
          <div class="setting-description"><i class="fas fa-adjust fa-lg"></i>Rejim</div>
          <input @change="theme" :checked="themeMode == 'dark'" type="checkbox" class="switch" id="switch2"><label class="switch-label" for="switch2"></label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import QuizItems from '~/components/battle/QuizItems.vue';
import AnimatedNumber from '~/components/effects/animated-number.vue';

export default {
  components: { QuizItems, AnimatedNumber },
  data() {
    return {
      isFirstTime: true,
    }
  },
  beforeMount() {
    if(this.isBattleQuiz)
      return;

    if(this.getTitle.status == 'completed')
      this.isFirstTime = false
    else if(this.getTitle.status != 'recently'){
      this.$store.dispatch('setVideoRecently', {
      mode: 'makeRecently',
      userId: this.user.id,
      videoId: this.$route.query.id
      });
    }
  },
  methods: {
    formatToPoint(value) {
        return `<p>${Math.round(value)}</p>`;
    },
    theme(event){
      if(event.target.checked){
        this.$store.dispatch('setThemeMode', 'dark');
      }
      else{
        this.$store.dispatch('setThemeMode', 'light');
      }
    },
    async start(){
      if(!this.isBattleQuiz)
        this.$store.dispatch('startGame', {loader:true, start: false, countdown: false});
      else{
        this.$store.dispatch('startGame', {loader:true, start: false, countdown: false});
      }
    }
  },
  computed:{
    ...mapGetters(['getTitle', 'themeMode', 'user', 'isBattleQuiz', 'currentUserPoint']),
  }
}

</script>

<style lang="scss">

.panel-text{
  display: flex;
  margin-top: 10px;
  gap: 5px;
  color: var(--dark-shadow);
  h2{
    color: var(--text-color);
    text-align: left;
    width: 100%;
    margin: 10px;
    font-size: 15px;
    opacity: .66;
  }
}
.in-quiz{
  text-align: center;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px 0px;
}
.start-block{
    position: absolute;
    padding-top: 40px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  @media screen and (max-width: 576px){
    .game-panel{
      width: 90% !important;
    }
    .settings-wrap{
      margin-top: 10px !important;
      margin: 0;
    }
    .setting{
      width: 100%;
      margin-bottom: 20px;
    }
  }

.info-box{
  text-align: center;
  width: 100%;
}
.panel-title{
  color: var(--text-color);
  margin: 0;
}
.panel-subtitle{
  color: var(--text-color);
  opacity: .8;
  font-size: 20px;
  padding: 0;
  margin: 0;
}
.settings-wrap{
    justify-content: space-between;
    display: flex;
    list-style: none;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    padding: 0;
    gap: 20px;
    li{
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
    }
    .setting-description{
      color: var(--text-color);
      margin-right: 40px;
      i{
        margin-right: 10px;
      }
    }
}
.settings-card{
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px !important;
}
  
.game-panel{
    width: 500px;
    background-color: var(--game-panel);
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 24px;
    box-shadow: 0 2px 6px 0 rgb(136 148 171 / 20%), 0 24px 20px -24px rgb(71 82 107 / 10%);
}

.switch{
	height: 0;
	width: 0;
	visibility: hidden;
}
.switch-label {
	cursor: pointer;
	text-indent: -9999px;
	width: 50px;
	height: 30px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
  &::after{
    content: '';
    position: absolute;
    top: 3px;
    left: 2px;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 90%;
	  transition: 0.3s;
  }
}
.switch:checked + .switch-label {
	background: #bada55;
}
.switch:checked + .switch-label:after {
	left: calc(100% - 2px);
	transform: translateX(-100%);
}
.switch-label:active:after {
	width: 40px;
}
</style>