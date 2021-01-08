<template>
    <div id="movie">

        <!-- usar cards do bulma -->
        <!-- https://www.youtube.com/watch?v=FijGmbJzPSM -->

        <h4>{{movie.title}}</h4>

        <img id="poster" :src="posterBaseUrl+posterSize+movie.poster_path" alt="poster not available">

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

#poster {
    color: red;
}

</style>