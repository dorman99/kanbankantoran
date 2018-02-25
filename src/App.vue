<template>
  <div id="app">
      <navbarvue/>
      <div class="container">
      <kanbanvue/>
      </div>
      <bulter/>
  </div>
</template>

<script>
import navbarvue from './components/navbar.vue'
import kanbanvue from './components/kanban.vue'
import bulter from './components/bulter.vue'
export default {
  components: {
    navbarvue,
    kanbanvue,
    bulter
  },
  methods: {
    test () {
      window.alert('wadaw')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: whitesmoke
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
