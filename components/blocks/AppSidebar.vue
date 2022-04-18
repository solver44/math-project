<template>
  <div :style="isIntro ? 'z-index: 1000;' : ''" class="app-sidebar">
      <a id="home-sidebar" href="" @click.prevent="mode = 'home'" :class="`app-sidebar-link ${isHome ? 'active' : ''}`" data-tooltip="Asosiy bo'lim">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" /></svg>
      </a>
      <a id="battle-sidebar" href="" @click.prevent="mode = 'battle'" :class="`app-sidebar-link ${isBattle ? 'active' : isAvailable ? 'blob-white' : ''}`" data-tooltip="Jang">
        <i :class="`fa-solid fa-swords fa-lg ${isBattle ? '' : isAvailable ? 'pulse' : ''}`"></i>
      </a>
      <a id="history-sidebar" href="" @click.prevent="mode = 'history'" :class="`app-sidebar-link ${isHistory ? 'active' : ''}`" data-tooltip="Ko'rilganlar">
         <i class="fa-solid fa-clock-rotate-left fa-lg"></i>
      </a>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      mode: 'home',
      isAvailable: false,
    }
  },
  watch:{
    mode(val){
      this.$emit('changedMode', val);
    }
  },
  async mounted() {
    this.isAvailable = this.isBattleAvailable;
    this.$store.dispatch('setAvailableBattle', this.isAvailable);
  },
  computed:{
    ...mapGetters(['isAvailableBattle', 'allVideos', 'currentStep']),
    isIntro(){
      return (this.currentStep >=7 && this.currentStep <= 10);
    },
    isHome(){
      return this.mode === 'home'
    },
    isHistory(){
      return this.mode === 'history'
    },
    getLengthVideos(){
      return this.allVideos.filter(item => { return item.parentId.substring(0, 3) == '1.1' }).length;
    },
    isBattleAvailable(){
      var leng = this.getLengthVideos;
      return this.allVideos.filter(item => {
        if(item.parentId.substring(0, 3) == '1.1' && item.status == 'completed')
          return true;
        else
          return false;
        }).length >= leng;
    },
    isBattle(){
      return this.mode === 'battle'
    }
  }
}
</script>