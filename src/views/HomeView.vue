<template>
  <Header/>
  <Animes/>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue"
import Animes from "../components/Animes.vue"

export default {
  name: 'HomeView',
  components: { Header, Animes }
}
</script>

