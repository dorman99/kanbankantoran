<template>
  <div class="columns">
    <div class="column">
      <p class="title">{{title}}</p>
      <div class="row" v-for="card in cards" :key="card['.key']">
          <cards :card="card"/>
      </div>
    </div>
</div>
</template>

<script>
import cards from './card.vue'
export default {
  name: 'cardsection',
  props: ['title', 'cards'],
  components: {
    cards
  }
}
</script>

<style>

</style>
