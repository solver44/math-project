<template>
  <div v-if="items.length > 0" :class="`all-quiz-items ${shop ? '' : 'user-items'}`">
    <QuizItem v-for="(item) in items" :key="item.id" :item="item" :shop="shop" @useItem="useItem" />
  </div>
</template>

<script>
import QuizItem from './QuizItem.vue'
import {mapGetters} from 'vuex'

export default {
  components: { QuizItem },
  props:{
    shop: Boolean
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {
    useItem(item){
      this.$store.dispatch('setCurrentItem', item);
    },
  },
  async beforeMount() {
    if(this.shop){
      await this.$store.dispatch('fetchQuizItems');
      this.items = this.allQuizItems;
    }
    else{
      await this.$store.dispatch('fetchUserItems', {
        mode: 'userItems',
        userId: this.$store.getters.user.id
      });
      this.items = this.userItems.filter(item => parseInt(item.count) > 0);
    }
  },
  computed:{...mapGetters(['allQuizItems', 'userItems']),}
}
</script>

<style>

</style>