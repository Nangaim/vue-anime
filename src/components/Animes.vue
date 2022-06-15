<template>
  <SearchInput/>
  <div class="animes-cards">
    <AnimeCard v-for="anime in animes" :key="anime.mal_id" :title="anime.title" :image="anime.images.webp.large_image_url" :year="anime.aired.from"/>
  </div>
  <p v-for="anime in animes" :key="anime.mal_id">
    {{anime.year}}
  </p>
</template>

<script>
import axios from "axios"
import { ref } from "@vue/reactivity"
import SearchInput from "./SearchInput.vue"
import AnimeCard from "./AnimeCard.vue"

export default {
    name: 'Animes',
    components: {SearchInput, AnimeCard},
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
.animes-cards{
    padding: 0 5em 3em 5em;
    display: flex;
    justify-content: center;
    grid-gap: 50px;
    flex-wrap: wrap;
    align-items: baseline;
}

</style>