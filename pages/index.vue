<template>
  <PageLoader v-if="isLoading"/>
  <div v-else class="app-container">
    <OwnPopover v-if="currentProps.stepNumber == currentStep" 
    :target="currentProps.target" 
    :text="currentProps.text"
    :placement="currentProps.position"
    :placeholder="currentProps.placeholder"
    :minPos="currentProps.minPos ? currentProps.minPos : currentProps.position"
     />
     
    <transition name="fade">
      <Introduction v-if="isHomeIntro" />
    </transition>

    <VideoModal :index="videoContent.index" :isRestart="false" v-if="videoContent.show" />
    <Header/>
    <AppContent/>
  </div>
</template>

<script>
import Header from '../components/blocks/Header.vue'
import AppContent from '../components/blocks/AppContent.vue'
import {mapGetters} from 'vuex'
import Introduction from '~/components/introduction/Introduction.vue'
import OwnPopover from '../components/introduction/OwnPopover.vue';

export default {
  name: 'index',
  // async fetch({store}) {
  //   // if(store.getters['user'] == null)
  //   // await store.dispatch('fetchUser').then((result) => {});
  //   await store.dispatch('fetchVideos', { userId: store.getters.user.id });
  //   // await store.dispatch('fetchUserIntroduction');
  // },
  components:{Header, AppContent, Introduction, OwnPopover},
  computed:{
    ...mapGetters(['videoContent', 'user', 'userIntroduction', 'currentProps', 'currentStep']),
    isHomeIntro(){
      return this.userIntroduction.home == '0';
    }
  },
  data() {
    return {
      isLoading: true,
    }
  },
  async beforeMount() {
    if(this.user == null)
      await this.$store.dispatch('fetchUser').then((result) => {});
    await this.$store.dispatch('fetchVideos', { userId: this.$store.getters.user.id });
    await this.$store.dispatch('fetchUserIntroduction');
    
    this.isLoading = false;
    
    this.$store.dispatch('fetchThemes');
    this.$store.dispatch('showVideoContent', {show:false, index: -1});
  },
}
</script>

<style>

</style>