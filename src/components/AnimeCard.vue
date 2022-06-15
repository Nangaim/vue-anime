<template>
  <div class="card">
    <a href="">
      <div class="cover-container">
        <img :src="image" alt="" class="cover">
      </div>
      <h4>{{title}}</h4>
      <p>{{year.slice(0, 4)}} - 48 épisodes</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    year: Number,
  }, 
  setup() {
    
  }

}
// const {anime} = defineProps(['anime'])
// console.log(anime.title)
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