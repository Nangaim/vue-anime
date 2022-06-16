<template>
    <div v-if="anime" class="anime">
        <div class="buttons">
            <button @click="handleGoBack">Go back</button>
            <a :href="anime.url">More infos</a>
        </div>
        <div class="anime-details">
            <div v-if="anime.trailer.embed_url" class="picture">
                <iframe width="100%" height="100%" :src="anime.trailer.embed_url" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="anime-info">
                <h2>{{anime.title}}</h2>
                <ul>
                    <li class="score"><img src="/icons/gold-star.svg" alt=""> <strong>{{anime.score}}</strong></li>
                    <li>{{anime.type}}</li>
                    <li>Aired : <strong>{{anime.aired.string}}</strong></li>
                    <ul>
                        <li v-for="studio in anime.studios" :key="studio">
                            Studio {{studio.name}}
                        </li>
                    </ul>
                </ul>

                <div class="synopsis">
                    <h3>Synopsis</h3>
                    <p>{{anime.synopsis}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
    props: {
        id: String,
    },
    setup({id}){
        const anime = ref(null)
        const error = ref(null)
        const router = useRouter()

        const  getAnime = () => {
            try{
                axios.get(`https://api.jikan.moe/v4/anime/${id}`)
                .then((res) =>  anime.value = res.data.data)
            }
            catch (err) {
                error.value = err.message
            }
        }

        getAnime()
        
        const handleGoBack = () => {
            router.go(-1)
        }

        return{
            id: parseInt(id),
            anime,
            handleGoBack
        }

    }
}
</script>

<style lang="scss">

.anime{
    padding: 4em;
    .buttons{
        display: flex;
        justify-content: space-between;
        button, a {
            background: #333;
            padding: 0.5em 1.7em;
            border-radius: 0.4em;
            cursor: pointer;
            color: #ddd;
            font-size: 1rem;
            margin-bottom: 40px;
            text-decoration: none;
            border: none;
            transition: 0.3s ease;
    
            &:hover {
                background: #ddd;
                color: #333;
            }
        }
    }
    
    .anime-details{
        display: flex;
        align-items: center;
        justify-content: center;
        .picture{
            width: 50em;
            height: 500px;

        }
        .anime-info{
            width: 40%;
            margin-left: 6rem;
            ul{
                list-style: none;
                padding: 0;
                li{
                    margin-bottom: 0.5rem;
                }
                .score{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    img{
                        width: 1.5rem;
                    }
                }
            }
        }
    }
}

@media (max-width: 1280px){
    .anime{
        .anime-details{
            flex-direction: column;
            .picture{
                width: 100%;
            }

            .anime-info{
                margin-top: 3rem;
                width: 100%;
                margin-left: 0;
            }
        }
    }
}

@media (max-width: 425px){
    .anime{
        padding: 2em;
        .anime-details{
            .picture{
                height: 300px;
            }
        }
    }
}
</style>