<template>
  <header :style="isIntro ? 'z-index: 1000;' : ''" class="app-header">
    <div class="app-header-left">
      <p class="app-name">Math</p>

    <div class="search-wrapper">
      <input v-model="searchText" class="search-input" type="text" placeholder="Qidirish">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
        <defs></defs>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </div>

        
      
    </div>
    <div class="app-header-right">
      <div class="user-point">
        <animated-number
          :value="currentUserPoint"
          :formatValue="formatToPoint"
        />
        <img src="@/assets/images/coin.png" alt="coin">
      </div>
      
      <button @click="switchTheme" :class="`mode-switch ${!isLight ? 'active' : ''}`">
        <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>

      <button @click="showDropdownMenu = !showDropdownMenu" class="profile-btn" style="position: relative">
        <img src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_960_720.png" />
        <span>User</span>
        
        <transition name="scale">
          <dropdown @clicked="menuClick" @hide="showDropdownMenu = false" parent=".profile-btn" :items="items" v-if="showDropdownMenu" /> 
        </transition>
        
      </button>

      <button :style="isMenuIntro ? 'z-index: 1000;' : ''" @click="showMenus" class="menu-btn">
        <i class="fa-solid fa-book-arrow-right"></i>
      </button>
    </div>
  </header>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import AnimatedNumber from '../effects/animated-number.vue';
import Dropdown from './dropdown.vue';

export default {
  components: { AnimatedNumber, Dropdown },
  data() {
    return {
      searchText: '',
      showDropdownMenu: false,
      items: [
        'Reset'
      ]
    }
  },
  computed:{
    ...mapGetters(['user', 'themeMode', 'currentStep', 'currentUserPoint']),
    isIntro(){
      return (this.currentStep >=2 && this.currentStep <=6) || this.currentStep == 1004;
    },
    isMenuIntro(){
      return this.currentStep == 11;
    },
    isLight(){
      return this.themeMode === 'light'
    },
  },
  watch:{
    searchText(value){
      this.searchInput(value)
    }
  },
  methods: {
    ...mapActions(['showMenu', 'searchInput', 'setThemeMode']),
    menuClick(index){
      switch (index) {
        case 0:
          this.$store.dispatch('resetUser');
          break;
      }
    },
    formatToPoint(value) {
        return `<p>${Math.round(value)}</p>`;
    },
    switchTheme(){
      if(this.isLight){
        this.setThemeMode('dark');
      }else{
        this.setThemeMode('light');
      }
    },
    showMenus(){
      this.showMenu(true);
    }
  },
}
</script>

<style lang="scss">
  .user-point{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 10px;
    img{
      width: 25px;
      height: 25px;
    }
    p{
      margin: 0;
      font-weight: 500;
      margin-right: 10px;
    }
  }
</style>