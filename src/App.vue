<template>
  <div id="app">
    <Header />
    <AddTask />
  </div>
</template>

<script>
import AddTask from './components/AddTask/index.vue'
import Header from './components/Header'

export default {
  name: "App",
  components: {
    AddTask,
    Header
  },
};
</script>

<style lang="scss">
body {
  background-color: #d5dbb3;
  #app {
    height: 100%;
  }
}
</style>
