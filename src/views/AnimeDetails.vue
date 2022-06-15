<template>
  <h1>{{id}}</h1>
  <h1>{{anime.title}}</h1>
</template>

<script>
import axios from "axios"
import { ref } from '@vue/reactivity'
export default {
    props: {
        id: String,
    },
    setup({id}){

        const anime = ref(null)
        const error = ref(null)

        const getCountry = () => {
            try{

                axios.get(`https://api.jikan.moe/v4/anime/${id}`)
                .then((res) =>  anime.value = res.data.data)
            }
            catch (err) {
                error.value = err.message
            }
        }
        getCountry()

        return{
            id: parseInt(id),
            anime
        }

    }
}
</script>

<style>

</style>