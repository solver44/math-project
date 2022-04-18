<template>
  <!-- <PageLoader v-once v-if="isLoading"/> -->
  <nuxt/>
</template>

<script>
export default {
  data() {
      return {
        isLoading: true,
      }
  },
  head: {
    bodyAttrs: {
      'ontouchstart': " ",
      'class': "no-touch"
    }
  },
  methods: {
    hideLoading(){
      this.isLoading = false;
    }
  },
  // beforeCreate() {
    //  this.$store.dispatch('fetchUser').then((result) => { this.hideLoading();});
    // document.onreadystatechange =() =>{
    //   if(document.readyState == 'complete')
    //   {
    //     setTimeout(()=>{this.hideLoading()},500)
    //   }
    // }
  // },
}
</script>