<template>
 <div class="menu">
  <!-- <div class="menu-header">
   <div class="header-menu">
     <input type="text" class="search-input" placeholder="Mavzu nomini kiriting" />
   </div>
  </div> -->
  <div class="menu-panel">
    <transition name="fade">
      <div key="1" class="top-menu">
        <button id="first-sub-menu" :class="`menu-sub-button ${toggle == 0 ? 'active' : ''}`" @click="showSub(0)" type="button">Algebra</button>
        <button id="second-sub-menu" :class="`menu-sub-button ${toggle == 1 ? 'active' : ''}`" @click="showSub(1)" type="button">Geometriya</button>
      </div>
      <!-- <Submenu @showMenu="isTopMenu = true" v-else key="2" :index="index" /> -->
    </transition>
  </div>
 </div>
</template>

<script>
// import Submenu from './submenu.vue';
import {mapActions} from 'vuex'

export default {
  components: { 
    // Submenu 
  },
  data() {
    return {
      toggle: -1,
    }
  },
  mounted() {
    setTimeout(() => {
      if(this.$store.getters.showNextVideo.show)
        this.showSub(0);
    }, 1000);
  },
  methods: {
    ...mapActions(['showMenu']),
    showSub(index){
      this.toggle = index;
      this.$emit('menuClick', index);
      setTimeout(()=>{
        this.showMenu(false);
      },200);
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/menuStyle.scss';

</style>