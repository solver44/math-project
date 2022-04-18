<template>
  <div class="dropdown-body">
    <button class="dropdown-btn" v-for="(item, index) in items" :key="item" @click="clicked(index)">{{item}}</button>
  </div>
</template>

<script>
export default {
  props:{
    items: Array,
    parent: String 
  },
  data() {
    return {
      parentD: null,
    }
  },
  mounted() {
    this.parentD = document.querySelector(this.parent);
  },
  methods: {
    clicked(index){
      this.$emit('clicked', index);
    },
    hide(e){
      if (!this.$el.contains(e.target) && !this.parentD.contains(e.target)){
          this.$emit('hide');
      }
    }
  },
  created() {
      window.addEventListener('click', this.hide)
  },
  destroyed() {
      window.removeEventListener('click', this.hide);
  },
}
</script>

<style lang="scss" scoped>
.scale-enter,
.scale-leave-to {
 transform: scale(0) translate(-50%, 110%) !important;
 opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
 transition: all 0.3s ease-in-out !important;
}

.scale-enter-to,
.scale-leave {
 transform: scale(1) translate(-50%, 110%) !important;
 opacity: 1;
}
@media screen and(max-width: 600px) {
  .dropdown-body{
    left: -10% !important;
  }
}
.dropdown-body{
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  padding: 10px 10px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: scale(1) translate(-50%, 110%);
  background-color: var(--projects-section);
  z-index: 101;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
}
.dropdown-btn{
  border: none;
  color: var(--text-color);
  background: transparent;
  margin: 0;
  padding: 5px 15px;
  &:active{
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
}
</style>