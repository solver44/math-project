<template>
  <div :style="isIntro ? 'z-index: 1000;' : ''" :class="`menu-section ${isShowMenu ? 'show' : ''}`">
    <button @click="close" class="menu-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" /></svg>
    </button>
    <div class="projects-section-header">
      <p>Bo'limlar</p>
    </div>
    <Menu @menuClick="clickMenu"/>
  </div>
</template>

<script>
import Menu from '../Menu'
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  components: { Menu },
  methods: {
    ...mapActions(['showMenu']),
    clickMenu(index){
      this.$emit('clickMenu', index);
      if(this.isIntro && this.currentStep == 13)
        this.$store.dispatch('nextStep');
    },
    close(){
      this.showMenu(false);
    }
  },
  computed:{
    ...mapGetters(['isShowMenu', 'currentStep']),
    isIntro(){
      return this.currentStep >=12 && this.currentStep <14;
    },
  },
}
</script>

<style>

</style>