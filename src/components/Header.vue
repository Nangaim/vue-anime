<template>
    <header>
        <router-link :to="{name: 'home',}">

            <h1>Find your favorite anime!</h1>
        </router-link>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 5em;
    justify-content: center;
    top: 0;
    background: #333;
    a{
        text-decoration: none;
        color: #ddd;
        h1 {
            font-size: 2rem;
        }
    }
    
}

@media (max-width: 560px){
    header{
        padding: 0 2em;
        a{
            h1{
                font-size: 1.5rem;
            }
        }
    }

}
@media (max-width: 320px){
    header{
        padding: 0 1.5em;
        a{
            h1{
                font-size: 1.2rem;
            }
        }
    }

}


</style>