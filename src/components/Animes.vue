<template>
  <SearchInput/>
  <p v-for="anime in animes" :key="anime.mal_id">
    {{anime.title}}
  </p>
</template>

<script>
import axios from "axios"
import { ref } from "@vue/reactivity"
import SearchInput from "./SearchInput.vue"

export default {
    name: 'Animes',
    components: {SearchInput},
    setup(){
        const animes = ref([])
        const error = ref(null)

        const getAnimes = async () => {
            try{
                axios.get("https://api.jikan.moe/v4/anime").then((res) => animes.value = res.data.data)
                if(!data.ok){
                    throw Error('Data not found')
                }
                
            }
            catch (err) {
                error.value = err.message
            }
        }

        getAnimes()
        console.log(animes)
        
        return {
            animes
        }
    }
}
</script>

<style>

</style>