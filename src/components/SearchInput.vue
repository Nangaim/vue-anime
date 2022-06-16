<template>
    <form @submit.prevent="handleSubmit" class="search">
        <!-- <img src="/icons/search.svg" class="search-icon" alt="search"> -->
        <input v-model="searchText" type="text" class="search-input" placeholder="Find your favorite anime" required>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
<<<<<<< HEAD
    setup(context){
=======
    setup(props, context){
>>>>>>> fd65727cdfe4b44e373d2f192317b4d9575b6ee2
        const searchText = ref('')
        
        const handleSubmit = () => {
            context.emit('searchText', searchText.value)
        }

        return {
            searchText,
            handleSubmit
        }
    }
}
</script>

<style lang="scss">


.search{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 150px;

    .search-input{
        width: 100%;
        max-width: 500px;
        padding: 1rem;
        border-radius: 5px;
        outline: none;
        appearance: none;
        background: none;
        border: none;
        background-color: #333;
        transition: 0.3s ease;
        &:focus{
            background-color: #ddd;
            color: #333;
        }
    }

}
@media (max-width: 560px) {
    .search{
        .search-input{
            width: 80%;
        }
    }
}


</style>