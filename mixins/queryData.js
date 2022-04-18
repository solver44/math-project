import { mapGetters, mapActions } from 'vuex'

export default {
 methods: {
  ...mapActions(['countTheme', 'setAllIndex']),
  getVideoInfoFromId(ind) {
   return this.allVideos.filter(video => { return video.id == ind })[0];
  }
 },
 computed: {
  ...mapGetters(['allThemes', 'getSearch', 'allIndex', 'allVideos']),
  getThemeFromIndex() {
   return this.allThemes.filter((item) => { return item.parentId == this.indexMenu && item.uz.toLowerCase().includes(this.getSearch.toLowerCase()) })
  },
  checkChildren() {
   return this.allThemes.filter((item) => { return item.id == this.currentIndex && item.children != undefined }).length > 0
  },
  checkGrandChildren() {
   return this.allThemes[this.currentIndex - 1].children.filter((item) => { return item.id == this.currentChildrenIndex && item.children != undefined }).length > 0
  },
  getChildrenFromIndex() {
   if (this.currentIndex > -1)
    return this.allThemes[this.currentIndex - 1].children.filter(child => { return child.uz.toLowerCase().includes(this.getSearch.toLowerCase()) });
   else
    return []
  },
  getGrandChildrenFromIndex() {
   if (this.currentChildrenIndex > -1)
    return this.allThemes[this.currentIndex - 1].children[this.currentChildrenIndex - 1].children.filter(child => { return child.uz.toLowerCase().includes(this.getSearch.toLowerCase()) });
   else
    return []
  },
  getVideosFromIndex() {
   return this.allVideos.filter(video => { return video.parentId == this.allIndex && video.title.toLowerCase().includes(this.getSearch.toLowerCase()) });
  },

  getRecentlyVideos() {
   return this.allVideos.filter(video => { return (video.status == 'completed' || video.status == 'recently') && video.title.toLowerCase().includes(this.getSearch.toLowerCase()) });
  }
 },
}