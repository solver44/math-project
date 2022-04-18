<template>
  <div :id="`theme-${pkey}`" class="project-box-wrapper">
      <div class="project-box" :style="`background-color: ${colors[colorIndex].first};`">
        <div class="project-box-header">
          <span>{{pkey}}</span>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">{{title}}</p>
          <p class="box-content-subheader">{{theme}}</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header">Jarayon</p>
          <div class="box-progress-bar">
            <span ref="progress" class="box-progress" :style="`background-color: ${colors[colorIndex].second};`"></span>
          </div>
          <p class="box-progress-percentage">{{percent}}%</p>
        </div>
        <div class="project-box-footer">
          <button @click="sign(pkey)" class="days-left" :style="`color: ${colors[colorIndex].second};`">
            Ochish
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed:{
    ...mapGetters(['allVideos', 'allIndex', 'showNextVideo', 'colors']),
    getPercentage(){
      const result = this.allVideos.filter((item) => { return item.parentId[0] == this.pkey && item.status == 'completed' }).length * 100 / this.allVideos.filter(item => { return item.parentId[0] == this.pkey }).length;
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
    theme:{
      type: String
    },
    colorIndex:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      percent: 0
    }
  },
  methods: {
    sign(index){
      this.$store.dispatch('setAllIndex', this.pkey + '.')
      this.$emit('showSecondBox', [index, this.colorIndex]);  
    },
    signAuto(index){
      this.$emit('showSecondBox', [index, this.colorIndex]);
    }
  },
  mounted() {
    if(this.showNextVideo.show && this.allIndex[0] == this.pkey)
      this.signAuto(this.pkey);
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