<template>
  <div class="screen-gameover">
    <div class="shutter-wrapper">
      <div ref="up" class="shutter-half up">
      </div>
      <p ref="title">Yakunlandi</p>
      <div ref="down" class="shutter-half down">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('cancelTimer');

    setTimeout(() => {
      this.$refs.up.style.top = "0%";
      this.$refs.down.style.bottom = "0%";
    }, 100);
    setTimeout(() => {
      this.$refs.title.style.opacity = "1";
    }, 600);
    setTimeout(() => {
      this.$refs.title.style.opacity = "0";
      this.$refs.up.style.top = "-100%";
      this.$refs.down.style.bottom = "-100%";

      setTimeout(() => {
        this.$emit('closeOverScreen');
      }, 500);

    }, 1300);
  },
}
</script>

<style lang="scss" scoped>
.screen-gameover{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: var(--app-container);
  z-index: 999;

}
.shutter-wrapper{
  width: 100%;
  height: 100%;
}
.shutter-half{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: var(--shutter-half);

  transition: all .5s ease-in-out;
}
.up{
  top: -100%;
}
.down{
  bottom: -100%;
}
p{
  font-size: 50px;
  text-align: center;
  color: var(--text-color);
  font-family: sans-serif;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  opacity: 0;

  transition: opacity .2s ease;
}

</style>