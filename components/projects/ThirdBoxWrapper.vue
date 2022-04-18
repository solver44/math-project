<template>
  <div :id="`sub-theme-${pkey}`" class="project-box-wrapper">
      <div class="project-box" :style="`background-color: ${colors[colorIndex].first};`">
        <div class="project-box-header">
            <span>{{pkey}}</span>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">{{title}}</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header">Jarayon</p>
          <div class="box-progress-bar">
            <span ref="progress" class="box-progress" :style="`background-color: ${colors[colorIndex].second};`"></span>
          </div>
          <p class="box-progress-percentage">{{percent}}%</p>
        </div>
        <div class="project-box-footer">
          <button @click="sign" class="days-left" :style="`color: ${colors[colorIndex].second};`">
            Ochish
          </button>
        </div>
      </div>
    </div> 
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters(['allIndex', 'allVideos', 'showNextVideo', 'colors']),
    getPercentage(){
      const result = this.allVideos.filter(item => { return item.parentId == this.result && item.status == 'completed' }).length * 100 / this.allVideos.filter(item => { return item.parentId == this.result }).length;
      if(!result)
        return 0;
      else
        return Math.round(result);
    }
  },
  props:{
    pkey:{
      type: Number
    },
    title:{
      type: String
    },
    colorIndex:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      percent: null,
      result: ''
    }
  },
  methods: {
    sign(){
      this.$store.dispatch('setAllIndex',  this.result);
      this.$emit('showVideos', this.pkey)
    },
    signAuto(){
      this.$emit('showVideos', this.pkey)
    }
  },
  mounted() {
    this.result = this.allIndex.split('.')[0] + '.' + this.allIndex.split('.')[1] + '.' + this.pkey;
    
    if(this.showNextVideo.show && this.allIndex.slice(-1) == this.pkey)
      this.signAuto();
    else{
      this.percent = this.getPercentage;
      const that = this;
      setTimeout(() => {
        that.$refs.progress.style.width = this.percent + "%";
      }, 0);
    }
  },
}
</script>