<template>
  <div  ref="horizontal" :class="`quiz-items ${shop ? '' : 'user-quiz-items'}`">
    <div 
    @mousedown="onMouseDown" 
    @mouseleave="onMouseUp" 
    @mousemove="onMouseMove" 
    @mouseup="onMouseUp" 
    @touchstart="onMouseDown"
    @touchmove="onMouseMove" 
    @touchend="onMouseUp" 
    class="items-viewer">

      <Items :shop="shop" />
    </div>
  </div>
</template>

<script>
import Items from './items/Items.vue';

export default {
  components: { Items },
  props:{
    shop: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      isDown: false,
      startX: 0,
      scrollLeft: 0
    }
  },
  computed:{
    hor(){
      return this.$refs.horizontal;
    }
  },
  methods: {
    onMouseDown(e) {
      this.isDown = true;
      this.hor.classList.add('active');
      this.startX = e.pageX - this.hor.offsetLeft;
      this.scrollLeft = this.hor.scrollLeft;
    },
    onMouseUp() {
      this.isDown = false;
      this.hor.classList.remove('active');
    },
    onMouseMove(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.hor.offsetLeft;
      const walk = (x - this.startX) * 1.1;
      this.hor.scrollLeft = this.scrollLeft - walk;
    }
  },

}
</script>

<style lang="scss">

.quiz-items{
  width: 100%;
  overflow: hidden;
  // grid-area: main;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  will-change: transform;
  user-select: none;
}
.items-viewer{
  width: fit-content !important;
}

</style>