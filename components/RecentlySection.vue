<template>
  <div class="recently-section projects-section">
    <ContentLoader color="var(--projects-section)" key="loader" v-if="loader" />
    <div class="main-boxes history-boxes">
      <transition-group v-show="!loader" name="fade" class="project-boxes jsGridView" tag="div">
        <VideosBoxWrapper v-for="(video, index) in getRecentlyVideos" :userId="video.userId" @snapshotCreated="snapshotCreated" :status="video.status" :request="index == getRecentlyVideos.length - 1" :isCurrent="true" :key="video.id" :pkey="video.id" :title="video.title" :src="video.path" />
      </transition-group>
  </div>
  </div>
</template>

<script>
import VideosBoxWrapper from './projects/VideosBoxWrapper.vue'
import queryData from '../mixins/queryData'

export default {
  components: { VideosBoxWrapper },
  mixins:[queryData],
  data() {
    return {
      loader: true,
    }
  },
  methods:{
    snapshotCreated(){
      this.loader = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.history-boxes{
  height: 100%;
  padding: 32px;
}
</style>