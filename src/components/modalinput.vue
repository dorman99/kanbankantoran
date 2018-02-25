<template>
  <div :class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Input New Task</p>
      <button class="delete" aria-label="close"></button>
    </header>
 <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
  </header>
    <div class="card-content">
        <div class="content">
            <div class="field">
    <label class="label">Task</label>
    <div class="control">
        <input v-model="newTask.task" class="input" type="text" >
    </div>
    </div>

    <div class="field">
    <label class="label">Point</label>
    <div class="control">
        <input v-model="newTask.point" class="input" min="0" type="Number" >
    </div>
    </div>

    <div class="field">
    <label class="label">To Who?</label>
    <div class="control">
        <input v-model="newTask.to" class="input" type="text" >
    </div>
    </div>
        </div>
    </div>
    </div>

    <footer class="modal-card-foot">
      <button @click="newkanban" class="button is-success">Create New Task</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
import { kanban } from '../firebase'
export default {
  props: ['modal'],
  name: 'modal',
  data () {
    return {
      newTask: {
        task: '',
        point: 0,
        to: '',
        status: 0
      }
    }
  },
  methods: {
    newkanban () {
      kanban.push(this.newTask)
      this.$emit('done')
    }
  }
}
</script>

<style>

</style>
