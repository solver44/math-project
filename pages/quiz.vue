<template>
  <PageLoader v-once v-if="isLoading"/>
  <div v-else class="app-container">
    <transition appear name="slideDown">
      <Header :pauseIcon="isPause" :showEndBlock="showEndBlock" @pauseClick="pauseScene" @proceedClick="proceedScene" />
    </transition>
    
    <transition name="fade">
      <ItemsAnimations v-if="currentItem != null" :item="currentItem" @end="$store.dispatch('setCurrentItem', null);" />
    </transition>

    <PreGameScene v-if="!startGameInfo.start" />
    <GameScene v-else-if="!gameOver" />

    <transition name="fade">
      <CountDownScene v-if="startGameInfo.countdown" />
    </transition>
    
    <transition name="slideDown">
      <PauseScene v-if="isPause" @proceedClick="proceedScene" />
    </transition>

    <OverScreen @closeOverScreen="closeOverScreen" v-if="gameOver && !showEndBlock"/>
    <EndBlock v-else-if="showEndBlock" />
    
    <ContentLoader v-if="startGameInfo.loader" />
    <transition appear name="slideUp">
      <ControlCenter :showEndBlock="showEndBlock" @gameover="GameOver" v-if="startGameInfo.start" />
    </transition>
  </div>
</template>

<script>
import ContentLoader from '~/components/ContentLoader.vue';
import ControlCenter from '../components/test/blocks/ControlCenter.vue';
import Header from '../components/test/Header.vue'
import PreGameScene from '../components/test/PreGameScene.vue'
import GameScene from '~/components/test/GameScene.vue';
import OverScreen from '~/components/test/GameOverScreen.vue';
import EndBlock from '~/components/test/blocks/EndBlock.vue';
import PauseScene from '~/components/test/PauseGameScene.vue';
import CountDownScene from '~/components/battle/CountDownScene.vue'
import ItemsAnimations from '~/components/battle/items/ItemsAnimations.vue'

import {mapGetters} from 'vuex'

export default {
  components:{Header, PreGameScene, ContentLoader, GameScene, 
  ControlCenter, OverScreen, EndBlock, 
  PauseScene, CountDownScene, ItemsAnimations},

  mounted() {
    let mathJaxScript = document.createElement('script');
    // mathJaxScript.setAttribute('type', 'text/javascript');
    mathJaxScript.setAttribute('src', 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML');
    document.head.appendChild(mathJaxScript);
  },
  computed:{
    ...mapGetters(['startGameInfo', 'currentItem', 'showEndBlock', 'gameOver', 'user', 'allVideos', 'isBattleQuiz']),
  },
  watch:{
    startGameInfo(val){
      if(val.loader){
        this.start();
      }
    },
    gameOver(val){
      if(val)
        this.cancelTimer();
    },
  },
  data() {
    return {
      isPause: false,
      isLoading: true,
    }
  },
  methods:{
    async start(){
      if(this.isBattleQuiz){
        await this.$store.dispatch('fetchDataBattle', {battleId: this.$route.query.battleId});
        return;
      }

      if(this.allVideos == null)
        await this.$store.dispatch('fetchVideos', {userId: this.user.id});
      this.$store.dispatch('fetchDataQuiz', {videoId: this.$route.query.id});
    },
    GameOver(){
      this.$store.dispatch('setGameOver', true);
    },
    closeOverScreen(){
      this.$store.dispatch('setEndBlock', true);
    },

    startTimer(){
      this.$store.dispatch('startTimer');
    },
    cancelTimer(){
      this.$store.dispatch('cancelTimer');
    },
    pauseScene(){
      this.$store.dispatch('setIsPausedTime', true);
      this.isPause = true;
      this.cancelTimer();
    },
    proceedScene(){
      this.$store.dispatch('setIsPausedTime', false);
      this.isPause = false;
      this.$store.dispatch('continueTimer');
    },
  },
  async beforeMount(){
    if(this.user == null){
      await this.$store.dispatch('fetchUser');
      // this.$router.push('/');
      // return;
    }
    if(this.$route.query.gameType == 'battle')
      return;

    await this.$store.dispatch('fetchTitle', {videoId: this.$route.query.id, userId: this.user.id});

    await this.$store.dispatch('resetQuiz');

    if(this.$route.query.gameType == 'battle'){
      this.$store.dispatch('setBattleQuiz', true);
      this.$store.dispatch('setPresentation', false);
    }
    else{
      this.$store.dispatch('setBattleQuiz', false);
      this.$store.dispatch('setPresentation', true);
    }

    this.isLoading = false;
  },
}
</script>

<style lang="scss" scoped>
.app-container{
  max-width: inherit;
  transition: background .3s;
}
.content-loader{
  position: fixed;
  width: 100%;
  opacity: .9;
  z-index: 999;
}
</style>