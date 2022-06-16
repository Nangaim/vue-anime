<template>
  <Header/>
  <router-view/>
</template>


<script>
import Header from "./components/Header.vue"

export default {
  name: 'App',
  components: {Header},
}
</script>
<style>
body {
    background: #141414;
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ddd;
    margin: 0;
}
</style>
