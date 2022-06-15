<template>
    <form class="search">
        <!-- <img src="/icons/search.svg" class="search-icon" alt="search"> -->
        <input type="text" class="search-input" placeholder="Find your favorite anime">
    </form>
</template>

<script>
export default {

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


</style>