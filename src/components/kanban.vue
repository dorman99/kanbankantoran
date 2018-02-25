<template>
  <div class="columns">
      <div class="column" id="backlog" >
         <cardsection :cards=backlog title="Back-Log"/>
      </div>
      <div class="column" id="todo">
         <cardsection :cards=todo title="To-Do"/>
      </div>
      <div class="column" id="doing">
         <cardsection :cards=doing title="Doing"/>
      </div>
      <div class="column" id="done">
         <cardsection :cards=done title="Done"/>
      </div>
  </div>
</template>

<script>
import cardsection from './cardsection.vue'
import { kanban } from '../firebase'
export default {
  components: {
    cardsection
  },
  firebase () {
    return {
      kanbans: kanban
    }
  },
  computed: {
    backlog () {
      return this.kanbans.filter(kanban => kanban.status === 0)
    },
    todo () {
      return this.kanbans.filter(kanban => kanban.status === 1)
    },
    doing () {
      return this.kanbans.filter(kanban => kanban.status === 2)
    },
    done () {
      return this.kanbans.filter(kanban => kanban.status === 3)
    }
  },
  created () {
    this.$db.ref('kanban').once('value')
      .then(data => {
        console.log(data.val(), 'ini data')
      })
    console.log(this.kanbans, 'ini kanbans')
  }
}
</script>

<style>
</style>
