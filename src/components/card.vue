<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{card.task}}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <p>To: {{card.to}}</p>
      <p>Point: {{card.point}}</p>
    </div>
  </div>
  <footer class="card-footer">
    <a v-if="card.status !== 0" @click.prevent="prev(card['.key'])" class="card-footer-item">prev</a>
    <a @click.prevent="destroy(card['.key'])" class="card-footer-item">delete</a>
    <a v-if="card.status !== 3"  @click.prevent="done(card['.key'])" class="card-footer-item">done</a>
    <a v-if="card.status !== 3" @click.prevent="next(card['.key'])"  href="#" class="card-footer-item">next</a>
  </footer>
   <hr>
</div>
</template>

<script>
import { kanban } from '../firebase'
export default {
  name: 'cards',
  data () {
    return {
      kanbanD: {
        task: this.card.task,
        status: this.card.status,
        point: this.card.point,
        to: this.card.to
      }
    }
  },
  props: ['card'],
  methods: {
    next (key) {
      if (this.kanbanD.status === 3) {
        this.kanbanD.status = 3
        kanban.child(key).update(this.kanbanD)
      } else {
        this.kanbanD.status += 1
        kanban.child(key).update(this.kanbanD)
      }
    },
    done (key) {
      this.kanbanD.status = 3
      kanban.child(key).update(this.kanbanD)
    },
    prev (key) {
      if (this.kanbanD.status === 0) {
        this.kanbanD.status = 0
        kanban.child(key).update(this.kanbanD)
      } else {
        this.kanbanD.status -= 1
        kanban.child(key).update(this.kanbanD)
        console.log('masuk sini', key)
      }
    },
    destroy (key) {
      console.log('masuk')
      kanban.child(key).set(null)
    }
  }
}
</script>

<style>
 a {
   color: black
 }
</style>
