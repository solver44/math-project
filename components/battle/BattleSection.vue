<template>
  <div class="battle-section projects-section">
    <div class="battle-section-content">
      <div v-if="!isAvailableBattle" class="available">
        <div class="battle-img disabled">
          <i class="fa-solid fa-swords fa-lg"></i>
        </div>
        <nuxt-link :to="{name: 'exam', query: {battleId: 1, gameType: 'battle'}}" class="game-btn secondary-game-btn start-battle-btn">Hoziroq boshlash</nuxt-link>
      </div>
      <div v-else class="not available">
        <div class="battle-img disabled">
          <i class="fa-solid fa-swords fa-lg"></i>
        </div>
        <p>Sizda hozir jang qilish imkoni mavjud emas</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
export default {
  computed:{...mapGetters(['isAvailableBattle']),}
}
</script>

<style lang="scss">
.battle-section{
  position: relative;
}
.battle-section-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.available{
  color: var(--secondary-color);
  text-align: center;
  font-weight: 100 !important;
  line-height: 2 !important;
  width: 100%;
}
.battle-img{
  font-size: 4rem;
  color: var(--text-color);
}
.start-battle-btn{
  width: max-content;
}
</style>