<template>
  <div ref="main" v-if="type == 'home'" class="introduction-app">
    <transition name="fade">
      <Gift v-if="currentStep == 1004" @complete="$store.dispatch('prevStep', 999)" />
    </transition>
    
    <Steps v-if="currentStep == 0" wait setClass="intro-title" fromBottom tag="section">
      <h1 class="text-intro" :dly="500" hide>Xush kelibsiz!</h1>
      <h2 class="text-intro" :dly="1000" :drt="3000" hide>
        Matematika fanini ajoyib va qiziqarli tarzda o'rganishni xohlaysizmi?
      </h2>
      <h2 class="text-intro" :dly="500" :drt="2500" hide>Unda ushbu platforma aynan siz uchun</h2>
      <h2 class="text-intro" :dly="500" :drt="4000" hide>
        Platformada siz matematikani <strong>0</strong> dan boshlab o'rganishingiz mumkin!
      </h2>
      <div class="help-scene" :dly="2000">
        <h2 class="text-intro">Platformadan foydalanish bo'yicha yordam kerakmi?</h2>
        <div class="flex-view help-buttons">
          <button @click="no" class="game-btn secondary-game-btn no-help-btn">Yo'q</button>
          <button @click="yes" class="game-btn primary-game-btn">Ha</button>
        </div>
      </div>
    </Steps>
    <Steps key="1" :lastHide="nextStep" wait v-else-if="currentStep == 1" setClass="bottom-title">
      <h1 class="text-intro" :dly="500" :drt="3000" hide>Bosh oyna</h1>
    </Steps>
    <Steps key="2" :lastHide="nextStep" wait v-else-if="currentStep == 2" tag="section" setClass="top-title color-white">
      <h1 class="text-intro" :dly="500" :drt="2000" hide>Yuqori qism</h1>
    </Steps>
    <Steps key="3" :lastHide="nextStep" wait v-else-if="currentStep == 14" setClass="top-top-title color-white">
      <h1 class="text-intro" :dly="500" :drt="2000" hide>Bo'lim mavzulari</h1>
    </Steps>
    <Steps key="4" :lastHide="nextStep" wait v-else-if="currentStep == 25" tag="section">
      <h1 class="text-intro" :dly="100" :drt="1000" hide></h1>
    </Steps>
    <Steps key="5" :lastHide="nextStep" wait v-else-if="currentStep == 28">
      <h1 class="text-intro" :dly="100" :drt="1000" hide></h1>
    </Steps>
    <Steps key="6" :lastHide="nextStep" wait v-else-if="currentStep == 33" tag="section">
      <h1 class="text-intro" :dly="100" :drt="200" hide></h1>
    </Steps>
    <Steps key="7" :lastHide="nextStep" wait v-else-if="currentStep == 35">
      <h1 class="text-intro" :dly="100" :drt="2500" hide></h1>
    </Steps>
    <Steps key="8" :lastHide="nextStep" wait v-else-if="currentStep == 38" tag="section">
      <h1 class="text-intro" :dly="100" :drt="1000" hide></h1>
    </Steps>

    <Steps key="9" :lastHide="nextStep" wait v-else-if="currentStep == 42" setClass="intro-title">
      <h2 class="text-intro" :dly="1000" :drt="4000" hide>Tabriklaymiz platformaning bosh oynasi bilan tanishib chiqdingiz</h2>
    </Steps>
    <!-- <div class="step-buttons">
      <button class="step-button game-btn secondary-game-btn"><i class="fa-solid fa-left"></i></button>
      <button class="step-button game-btn secondary-game-btn"><i class="fa-solid fa-right"></i></button>
    </div> -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Steps from './steps.vue'
import Gift from '../effects/gift.vue'

export default {
  components:{Steps, Gift},
  props:{
    type: {
      type: String,
      default: 'home'
    }
  },
  watch:{
    currentStep(val){
      if(val == 1){
        this.$refs.main.classList.add('show-intro');
      }
      else
        this.$refs.main.classList.remove('show-intro');

      switch (val) {
        case 3:
          this.setCurrentProps({
            stepNumber: val,
            target: '.search-wrapper',
            text: 'Mavzu yoki video nomi bo\'yicha qidirish',
            position: 'bottom',
          });break;
        case 4:
          this.setCurrentProps({
            stepNumber: val,
            target: '.user-point',
            text: "Point - bu siz o'rganish davomida to'plab boradigan tangalar",
            position: 'bottom',
          });break;
        case 5:
          this.setCurrentProps({
            stepNumber: val,
            target: '.mode-switch',
            text: "Platformani tun yoki kun rejimiga o'tkazish",
            position: 'bottom'
          }); break;
        case 6:
          this.setCurrentProps({
            stepNumber: val,
            target: '.profile-btn',
            text: "Profil, sozlama va boshqalar",
            position: 'bottom'
          }); break;


        case 7:
          this.setCurrentProps({
            stepNumber: val,
            target: '.app-sidebar',
            text: "Platforma paneli",
            position: 'right',
            minPos: 'top',
            placeholder: 'none'
          }); break;
        case 8:
          this.setCurrentProps({
            stepNumber: val,
            target: '#home-sidebar',
            text: "Asosiy bo'lim",
            position: 'right',
            minPos: 'top',
            placeholder: 'none'
        }); break;
        case 9:
          this.setCurrentProps({
            stepNumber: val,
            target: '#battle-sidebar',
            text: "Jang (Battle). Jangni mavzu tugatilgandan keyin amalga oshirsa bo'ladi",
            position: 'right',
            minPos: 'top',
            placeholder: 'none'
        }); break;
        case 10:
          this.setCurrentProps({
            stepNumber: val,
            target: '#history-sidebar',
            text: "Ko'rilgan yoki bajarilgan videolar",
            position: 'right',
            minPos: 'top',
            placeholder: 'none'
        }); break;

        case 11:
          this.setCurrentProps({
            stepNumber: val,
            target: '.menu-btn',
            text: "Matematikaning bo'limlari",
            position: 'bottom',
            placeholder: 'clickable'
        }); break;
        case 12:
          this.setCurrentProps({
            stepNumber: val,
            target: '.menu-section',
            text: "Matematikaning bo'limlari",
            position: 'left'
          }); break;
        case 13:
          this.setCurrentProps({
            stepNumber: val,
            target: '#first-sub-menu',
            text: "Algebra bo'limini tanlang",
            position: 'left',
            placeholder: 'clickable'
        }); break;
        case 15:
          this.setCurrentProps({
            stepNumber: val,
            target: '.projects-status',
            text: "Quyidagi mavzular holati",
            position: 'bottom'
        }); break;
        case 16:
          this.setCurrentProps({
            stepNumber: val,
            target: '.view-actions',
            text: "Mavzular ko'rinish holatini o'zgartirish",
            position: 'bottom'
        }); break;
        case 17:
          this.setCurrentProps({
            stepNumber: val,
            target: '#theme-1',
            text: "Mavzu",
            position: 'top'
        }); break; 
        case 18:
          this.setCurrentProps({
            stepNumber: val,
            target: '.project-box-header>span:first-child',
            text: "Tartib raqami",
            position: 'top'
        }); break;
        case 19:
          this.setCurrentProps({
            stepNumber: val,
            target: '#theme-1 .project-box-content-header',
            text: "Mavzu va bo'lim nomi",
            position: 'top'
        }); break; 
        case 20:
          this.setCurrentProps({
            stepNumber: val,
            target: '#theme-1 .box-progress-wrapper',
            text: "Ushbu mavzuning bajarilganlik jarayoni",
            position: 'top'
        }); break;
        case 21:
          this.setCurrentProps({
            stepNumber: val,
            target: '#theme-1 .days-left',
            text: "Mavzuni ochish",
            position: 'bottom',
            placeholder: 'clickable'
        }); break; 
        case 22:
          this.setCurrentProps({
            stepNumber: val,
            target: '.project-boxes',
            text: "Ochilgan mavzuga tegishli mavzular",
            position: 'top'
        }); break;
        case 23:
          this.setCurrentProps({
            stepNumber: val,
            target: '.back-btn',
            text: "Ortga qaytish",
            position: 'bottom'
        }); break;
        case 24:
          this.setCurrentProps({
            stepNumber: val,
            target: '#theme-1 .days-left',
            text: "Mavzuni ochish",
            position: 'bottom',
            placeholder: 'clickable'
        }); break;
        case 26:
          this.setCurrentProps({
            stepNumber: val,
            target: '#sub-theme-1 .days-left',
            text: "Mavzuni ochish",
            position: 'bottom',
            placeholder: 'clickable'
        }); break;
        case 27:
          this.setCurrentProps({
            stepNumber: val,
            target: '.project-boxes',
            text: "Mavzuga tegishli videolar",
            position: 'top'
        }); break;
        case 29:
          this.setCurrentProps({
            stepNumber: val,
            target: '#video-1',
            text: "Ushbu video ko'rish uchun ochiq",
            position: 'top'
        }); break;
        case 30:
          this.setCurrentProps({
            stepNumber: val,
            target: '#video-2',
            text: "Bu video esa yopiq holatda. Yopiq holatdagi videoni ochish uchun undan avvalgi videoni ko'rib test bajarish kerak",
            position: 'top'
        }); break;
        case 31:
          this.setCurrentProps({
            stepNumber: val,
            target: '#video-2 .price-tag',
            text: "Videoni ochish uchun belgilangan narxi",
            position: 'bottom'
        }); break;
        case 32:
          this.setCurrentProps({
            stepNumber: val,
            target: '#video-2 .days-left',
            text: "Videoni ochish",
            position: 'bottom',
            placeholder: 'clickable'
        }); break;
        case 34:
          this.setCurrentProps({
            stepNumber: val,
            target: '#popover-buy-btn',
            text: "Videoni ochish uchun tasdiqlang",
            position: 'bottom',
            placeholder: 'clickable'
        }); break;
        case 36:
          this.setCurrentProps({
            stepNumber: val,
            target: '#video-2',
            text: "Ushbu video endi ko'rish uchun ochiq holatda",
            position: 'top'
        }); break;
        case 37:
          this.setCurrentProps({
            stepNumber: val,
            target: '#video-2 .days-left',
            text: "Videoni ko'rish",
            position: 'bottom',
            placeholder: 'clickable'
        }); break;
        case 39:
          this.setCurrentProps({
            stepNumber: val,
            target: '.video-modal',
            text: "Video",
            position: 'top',
        }); break;
        case 40:
          this.setCurrentProps({
            stepNumber: val,
            target: '.training-btn',
            text: "Mavzuga tegishli bo'lgan mashqlar bajarish (P.S. bunda foydalanuvchiga point berilmaydi)",
            position: 'top',
        }); break;
        case 41:
          this.setCurrentProps({
            stepNumber: val,
            target: '.exams-btn',
            text: "Mavzuga tegishli bo'lgan testlar bajarish",
            position: 'top',
        }); break;

        case 43:
          this.$store.dispatch('setUserIntroduction',{
            mode: 'set',
            userId: this.$store.getters.user.id,
            home: 1,
            quiz: 0,
            battle: 0,
            reload: true,
          });
        break;

        case 1004: break;
      }
    }
  },
  computed:{
    ...mapGetters(['currentStep']),

  },
  methods:{
    ...mapActions(['setCurrentProps']),
    no(){
      this.$store.dispatch('setUserIntroduction',{
        mode: 'set',
        userId: this.$store.getters.user.id,
        home: 1,
        quiz: 1,
        battle: 1,
      });
    },
    yes(){
      this.$store.dispatch('nextStep');
    },
    nextStep(){
      this.$store.dispatch('nextStep');
    },
  }
}
</script>

<style lang="scss">
.selecting-border{
  border: 2px dashed rgb(17, 160, 255);
}
.color-white{
  color: white;
}
.color-black{
  color: black;
}
.bottom-title{
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
}
.top-top-title{
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
}
.top-title{
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
}
@media screen and (max-width: 600px) {
}
.no-help-btn{
  box-shadow: 0 3px 0 0 var(--bs-gray-500);
}
.help-buttons{
  padding: 0px 40px;
  margin-top: 30px;
  gap: 40px;
}
.introduction-app{
  background-color: rgba(0, 0, 0, 0.766);
  position: fixed;
  width: 100%;
  height: 100%;
  max-height: -webkit-fill-available;
  z-index: 999;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 1s;
}
.show-intro{
  background-color: transparent;
  backdrop-filter: none;
}
.popover-wrapper{
   width: 100%;
  .trigger{
    width: 100%;  
  }
}
.show-block{
  z-index: 1000;
}
.intro-title{
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.step-buttons{
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 3%;
  right: 5%;
  width: auto;
}
.step-button{
  padding: 8px 30px;
  &:hover{
    filter: none;
  }
}
.text-intro{
  margin: 0;
}
</style>