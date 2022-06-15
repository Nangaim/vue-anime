<template>
    <SearchInput @searchText="value => searchText = value" />
    <div class="animes-cards">
        <AnimeCard v-for="anime in animes" :key="anime.mal_id" :id="anime.mal_id" :title="anime.title"
            :image="anime.images.webp.large_image_url" :type="anime.type" :status="anime.status" :score="anime.score"
            :popularity="anime.popularity" />
        <h2 v-if="animes.length === 0">Type the name of an anime</h2>
    </div>
    <!-- <p v-for="anime in animes" :key="anime.mal_id">
        {{ anime.title}}
    </p> -->
</template>

<script>
import axios from "axios"
import { ref } from "@vue/reactivity"
import SearchInput from "./SearchInput.vue"
import AnimeCard from "./AnimeCard.vue"
import { watch, watchEffect } from '@vue/runtime-core'

export default {
    name: 'Animes',
    components: {SearchInput, AnimeCard},
    setup(){
        const animes = ref([])
        const error = ref(null)
        const searchText = ref('')


        watch(searchText,() => {
            try{
                console.log('salut')
                console.log(searchText.value)
                axios.get(`https://api.jikan.moe/v4/anime?q=${searchText.value}"`).then((res) =>  animes.value = res.data.data)
                console.log(animes.value)
                
            }
            catch (err) {
                error.value = err.message
            }
        })
        // const getAnimes = async () => {
        // }
        

       
    
        
        return {
            animes,
            searchText
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