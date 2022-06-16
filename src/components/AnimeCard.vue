<template>
  <div class="card">
    <router-link :to="{ name: 'anime', params: {id}}">
      <div class="cover-container">
        <img :src="image" alt="" class="cover">
      </div>
      <h4>{{title}}</h4>
      <p>{{type}} - <strong :style="{ 'color': isAiring}">{{status}}</strong></p>
      <p><strong>{{ score ? score : 'N/A' }}</strong>/10 - Popularity <strong>#{{ popularity ? popularity : 'N/A'
      }}</strong>
      </p>
    </router-link>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: {
    id: Number,
    title: String,
    image: String,
    type: String,
    status: String,
    score: Number,
    popularity: Number
  }, 
  setup({status}) {
    const isAiring = ref("")

    switch (status){
      case "Currently Airing":
        isAiring.value = "#115B19"
        break
      case "Finished Airing":
        isAiring.value = "#972425"
        break
      default:
        isAiring.value = "#ddd"
        break
    }

    return{
      isAiring
    }
  }
}
</script>

<style lang="scss">

.card{
  width: 250px;
  background-color: #333;
  border-radius: 5px;
  padding: 20px;
  a { 
    text-decoration: none;
    color: #ddd;
    min-height: 434px;
    h4 {
      margin: 0;
      padding-top: 10px;
      padding-bottom: 10px;
      
    }
    p{
      margin: 0;
      padding-bottom: 10px;
      
    }
    
    .cover-container{
      overflow: hidden;
      height: 350px;

      .cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  transition: 0.3s ease;

  &:hover{
    transform: scale(1.03);
  }
    
}
</style>