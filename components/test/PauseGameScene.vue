<template>
  <div class="pause-game-scene">
    <div class="pause-panel game-panel">
      <div class="info-game-box">
        <div :style="`background: linear-gradient(90deg, var(--bs-gray-500) ${getPercent}%, white ${getPercent}%, white ${100 - getPercent}%);`" class="progress-bar-quiz">
          <i :style="`left: ${getPercent}%;`" class="me-icon fas fa-running"></i>
          <i class="finish-icon fas fa-flag-checkered"></i>
        </div>
        <p class="info-text">{{quizInfo.indexes.length - Math.abs(oldResults.length)}} ta savol qoldi</p>
      </div>
      <div class="pause-block">
        <button @click="$emit('proceedClick')" class="game-btn primary-game-btn">Davom etish</button>
        <button @click="$router.push('/')" class="game-btn secondary-game-btn">Chiqish</button>
      </div>
    </div>
    <div class="settings-card game-panel">
      <p class="panel-text">Sozlash</p>
      <ul class="settings-wrap">
        <li class="setting">
          <div class="setting-description"><i class="fas fa-music fa-lg"></i>Ovoz</div>
          <input checked type="checkbox" class="switch" id="switch3"><label class="switch-label" for="switch3"></label>
        </li> 
        <li class="setting">
          <div class="setting-description"><i class="fas fa-gift fa-lg"></i>Bonuslar</div>
          <input checked type="checkbox" class="switch" id="switch4"><label class="switch-label" for="switch4"></label>
        </li>
        <li class="setting">
          <div class="setting-description"><i class="fas fa-adjust fa-lg"></i>Rejim</div>
          <input @change="theme" :checked="themeMode == 'dark'" type="checkbox" class="switch" id="switch5"><label class="switch-label" for="switch5"></label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  methods: {
    theme(event){
      if(event.target.checked){
        document.documentElement.classList.add('dark');
        this.$store.dispatch('setThemeMode', 'dark');
      }
      else{
        document.documentElement.classList.remove('dark');
        this.$store.dispatch('setThemeMode', 'light');
      }
    },
  },
  computed:{
    ...mapGetters(['quizInfo', 'quizInfo', 'oldResults', 'themeMode']),
    getPercent(){
      return this.quizInfo.currentIndex * 100 / this.quizInfo.indexes.length;
    }
  }
}
</script>

<style lang="scss">
.pause-block{
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: stretch !important;
}
.pause-game-scene{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--app-container);
  padding-top: 80px;
  z-index: 1;
  top: 0;
  left: 0;
}
.pause-panel{
  flex-direction: column;
}
.info-game-box{
  width: 100%;
}
.progress-bar-quiz{
  border-radius: 18px;
  width: 100%;
  height: 18px;
  position: relative;
  margin-top: 15px;
  border: 1px solid var(--main-color);
}
.me-icon{
  position: absolute;
  color: var(--main-color);
  top: -130%;
  transform: translateX(-50%);
  font-size: 20px;
}
.finish-icon{
  position: absolute;
  color: var(--main-color);
  left: 100%;
  top: -130%;
  transform: translateX(-50%);
  font-size: 20px;
}

.info-text{
  font-size: 22px;
  color: var(--text-color);
  text-align: center;
  margin-top: 15px;
}

@media screen and (max-width: 576px) {
  .pause-block{
    flex-direction: column;
  }

}
</style>