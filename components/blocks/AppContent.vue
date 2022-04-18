<template>
  <div class="app-content">
    <AppSidebar @changedMode="changedMode" />

    <ProjectsSection v-show="mode == 'home'" :indexMenu="indexMenu" />
  <BattleSection v-if="mode == 'battle'" :indexMenu="indexMenu" />
    <RecentlySection v-else-if="mode == 'history'" :indexMenu="indexMenu" />

    <MenuSection @clickMenu="toggleMenu" />
</div>
</template>

<script>
import BattleSection from '../battle/BattleSection.vue'
import RecentlySection from '../RecentlySection.vue'
import AppSidebar from './AppSidebar'
import MenuSection from './MenuSection'
import ProjectsSection from './ProjectsSection'
export default {
  components: { AppSidebar, MenuSection, ProjectsSection, BattleSection, RecentlySection },
  methods: {
    toggleMenu(index){
      this.indexMenu = index
    },
    changedMode(val){
      this.mode = val;
    }
  },
  data() {
    return {
      indexMenu: - 1,
      mode: 'home',
    }
  },
}
</script>

<style>

</style>