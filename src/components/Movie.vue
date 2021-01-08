<template>
    <div id="movie">

        <!-- usar cards do bulma -->
        <!-- https://www.youtube.com/watch?v=FijGmbJzPSM -->

        <h4>{{movie.title}}</h4>

        <img
            v-if="movie.poster_path != null"
            id="poster"
            :src="posterBaseUrl+posterSize+movie.poster_path"
        >
        <img src="logo.png" id="no-poster" alt="n veio" v-else>

    </div>
</template>

<script>
export default {

    data() {
        return {
            posterBaseUrl: "https://image.tmdb.org/t/p/",
            posterSize: "w154"
        }
    },

    props: {
        movie: Object
    }
}
</script>

<style>

#movie {
    text-align: center;
    margin: 10px;
}

#no-poster {
    color: red;
}

</style>