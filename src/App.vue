<template>
  <div id="app">

    <button id="show-movies" @click="showMovies" v-if="!showMoviesList">Procurar Filmes</button>

    <div id="show-movies-list" v-if="showMoviesList">
      <MovieList/>
    </div>

  </div>
</template>

<script>

// import axios from 'axios';
import MovieList from './components/MovieList';

export default {
  name: 'App',

  data() {
    return {
      showMoviesList: false
    }
  },

  props: {
    
  },

  components: {
    MovieList
  },

  methods: {

    showMovies: function() {
      this.showMoviesList = true;
    },

  },

  created: function() {

    // faz-se uma vez ao inicio

  }
}
</script>

<style>
#app {
  margin: 0;
  min-height: 500px;
  height: 100%;
  background-color: rgb(90, 247, 194);
}

#pre-list {
  margin-left: 10px;
  font-size: 20px;
  color: red;
}

#search {
  height: 30px;
  padding: 2% 0 2% 2%;
  margin: 2%;
  align-items: center;
}

#search button {
  height: 30px;
}

#search input {
  height: 30px;
}

#movies-list {
  margin-left: 10px;
  color: black;

  display: inline-block;
}

#show-movies {
  margin: 2%;
}

</style>


API version 3 documentation

TMDB API

1. To get the config data like image base urls
https://api.themoviedb.org/3/configuration?api_key=<APIKEY>

2. To fetch a list of movies based on a keywork
https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>
https://api.themoviedb.org/3/search/movie?api_key=7831c72bff377af6c56119a4568f8216&query=Jack+Reacher

3. To fetch more details about a movie
https://api.themoviedb.org/3/movie/<movie-id>?api_key=<APIKEY>


/*
Vueflix
https://vueflix.com
*/


