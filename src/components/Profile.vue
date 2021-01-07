<template>
  
    <Movie :movie="movies[0]"/>


</template>

<script>

import Movie from './components/Movie'

export default {

    data() {
        return {
            moviesProfile: []
        }
    },

    components: {
        Movie
    },

    props: {
        profile: Object
    }

}
</script>

<style>

</style>