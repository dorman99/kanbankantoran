<template>
<div class="section is-dark" style="background-color:grey">
  <div class="columns">
    <div class="column" style="display:flex;">
    <p class="title item">
     Kanban! Kantoran
    </p>
    </div>
    <div class="column" style="display:flex;justify-content:flex-end;">
      <button @click="createNew" class="button is-dark"> New Task </button>
  </div>
  <modalinput @done="update" :modal="modal" />
</div>
</div>
</template>

<script>
import modalinput from './modalinput.vue'
export default {
  name: 'navbar',
  data () {
    return {
      modal: 'modal'
    }
  },
  components: {
    modalinput
  },
  methods: {
    createNew () {
      this.modal += ' is-active'
    },
    update () {
      this.modal = 'modal'
    }
  }
}
</script>

<style>
 .column {
   justify-content: space-between;
   margin-top: 5px;
   padding-bottom: 5px;
 }
</style>
