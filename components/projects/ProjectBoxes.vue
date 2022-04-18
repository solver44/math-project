<template>
  <div ref="mainBox" class="main-boxes">
    <ContentLoader width="100%" key="loader" v-if="loader && mode == 3" />
    <button v-if="mode > 0" @click="back" key="back-btn" class="back-btn"><i class="fas fa-arrow-left"></i></button>
    <Steps :setClass="`project-boxes ${gridName}`" :delay="delayAnim" v-if="mode == 0" tag="section">
      <ProjectBoxWrapper 
      @showSecondBox="showSecondBox" 
      v-for="(theme) in firstMenus" 
      :key="theme.id" 
      :pkey="theme.id" 
      :title="theme.uz" 
      :colorIndex="getColorFromIndex(theme.id-1)" 
      :theme="theme.parentId == 0 ? 'Algebra' : 'Geometriya'" />
    </Steps>
    <Steps :setClass="`project-boxes ${gridName}`" :delay="delayAnim" v-else-if="mode == 1" tag="section">
      <SecondBoxWrapper @showNextNode="showNextNode" v-for="(theme) in getChildrenFromIndex" 
      :key="theme.id" 
      :pkey="theme.id" 
      :title="theme.uz" 
      :colorIndex="currentColor" />
    </Steps>
    <Steps :setClass="`project-boxes ${gridName}`" :delay="delayAnim" v-else-if="mode == 2" tag="section">
      <ThirdBoxWrapper @showVideos="showVideos" v-for="(theme) in getGrandChildrenFromIndex" 
      :key="theme.id" 
      :pkey="theme.id" 
      :title="theme.uz" 
      :colorIndex="currentColor" />
    </Steps>
    <Steps :setClass="`project-boxes ${gridName}`" :delay="delayAnim" v-show="!loader" v-else-if="mode == 3" tag="section">
      <VideosBoxWrapper v-for="(video, index) in getVideosFromIndex" 
      :bought="video.bought == '1'" 
      :userId="video.userId" 
      @snapshotCreated="snapshotCreated" 
      :isCurrent="index == 0 || getVideosFromIndex[Math.abs(index - 1)].status == 'completed'" 
      :status="video.status" 
      :request="index == getVideosFromIndex.length - 1" 
      :key="index + 1"
      :cnt="index + 1"
      :pkey="video.id" 
      :title="video.title" 
      :src="video.path" 
      :price="video.price" />
    </Steps>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ThirdBoxWrapper from './ThirdBoxWrapper'
import ProjectBoxWrapper from './ProjectBoxWrapper'
import SecondBoxWrapper from './SecondBoxWrapper'
import VideosBoxWrapper from './VideosBoxWrapper'
import queryData from '../../mixins/queryData'
import ContentLoader from '../ContentLoader'
import Steps from '../introduction/steps.vue'

export default {
  mixins:[queryData],
  components: { ProjectBoxWrapper, SecondBoxWrapper, ThirdBoxWrapper, VideosBoxWrapper, ContentLoader, Steps },
  props:{
    indexMenu:{
      type: Number,
      default: -1,
    },
    gridMode:{
      type: Number
    }
  },
  watch:{
    indexMenu(){
      this.firstMenus = this.getThemeFromIndex;
      this.mode = 0;
      this.countTheme(this.firstMenus.length);
    },
    mode(val){
      this.setVideoBox(false)
      if(val == 0)
        this.countTheme(this.firstMenus.length)
      else if(val == 1)
        this.countTheme(this.getChildrenFromIndex.length)
      else if(val == 2)
        this.countTheme(this.getGrandChildrenFromIndex.length)
      else if(val == 3){
        this.countTheme(this.getVideosFromIndex.length); this.setVideoBox(true);}
    },
  },
  beforeMount(){
    this.setColors();
  },
  data() {
    return {
      delayAnim: 80,
      mode: 0,
      currentIndex: -1,
      currentChildrenIndex: -1,

      currentColor: 0,

      hasChild: true,
      loader: true,
      
      firstMenus: [],
    }
  },
  methods: {
    ...mapActions(['countTheme', 'setAllIndex', 'setVideoBox', 'setColors']),
    getColorFromIndex(index){
      return index - (Math.floor(index / this.colors.length) * this.colors.length);
    },

    showSecondBox(value){
      this.currentIndex = value[0];
      this.currentColor = value[1];
      if(this.checkChildren)
        this.mode = 1;
      else{
        this.mode = 3;
        this.hasChild = false;
        }
    },
    showNextNode(index){
      this.currentChildrenIndex = index;
      if(this.checkGrandChildren)
        this.mode = 2;
      else{
        this.hasChild = false;
        this.mode = 3;
        }
    },
    back(){
      this.loader = true;
      let allInd = this.allIndex.split('.').slice(0, -1).join('.');
      if(this.mode < 3)
        this.setAllIndex( allInd );

      if(!this.hasChild){
        this.hasChild = true;
        this.mode -= 2;
      }
      else
        this.mode--;

    },
    showVideos(){
      this.mode = 3;
    },
    snapshotCreated(){
      this.loader = false
    }
  },
  computed:{
    ...mapGetters(['allIndex', 'showNextVideo', 'colors']),
    gridName(){
      return this.gridMode == 1 ? 'jsGridView' : 'jsListView';
    },
    
  },
}
</script>

<style lang="scss">
.bounce-enter-active {
  animation: bounce-in .25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.bounce-leave-active {
  display: none;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.back-btn{
  animation: none !important;
  width: 100%;
  border: 1px solid var(--main-color);
  background: var(--projects-section);
  padding: 8px 0px;
  color: var(--main-color);
  box-shadow: 0px 4px 0px -1px var(--main-color);
  margin-bottom: 10px;
  border-radius: 8px;
  transition: all 0.2s;
  &:active{
    transform: translateY(4px);
    box-shadow: none;
  }
}
</style>