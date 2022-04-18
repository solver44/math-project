<template>
  <div class="pre-game-scene">
    <transition appear name="fadeUp">
    <StartBlock/>
    </transition>
  </div>
</template>

<script>
import StartBlock from './blocks/StartBlock.vue'

export default {
  components:{StartBlock}
}
</script>

<style lang="scss">
.pre-game-scene{
  background: var(--app-container);
  width: 100%;
  height: 100%;
}
</style>