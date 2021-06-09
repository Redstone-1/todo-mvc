<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: "App",
  components: {
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
