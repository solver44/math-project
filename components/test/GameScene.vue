<template>
  <div class="game-scene">
    <ScreenGame />
  </div>
</template>

<script>
import ScreenGame from './blocks/ScreenGame.vue'

export default {
  components: { ScreenGame },
}
</script>

<style lang="scss">
.game-scene{
  padding: 8px;
  height: 100%;
}
</style>