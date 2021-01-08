/*
Vueflix
https://vueflix.com




*/

<template>
  <div id="app">

    <div id="search">
      <input type="text" placeholder="search" v-model="searchField">
      <button @click="procurarFilme">Procurar</button>
    </div>

    <p id="pre-list">Lista de filmes relacionados:</p>

    <div id="movies-list" v-for="(movie, index) in movies" :key="movie.id">
      
      <Movie :movie="movies[index]"/>

    </div>

  </div>
</template>

<script>

import axios from 'axios';
import Movie from './components/Movie'

export default {
  name: 'App',

  data() {
    return {

      searchField: "",
      baseURL: 'https://api.themoviedb.org/3/',
      APIKEY: '7831c72bff377af6c56119a4568f8216',

      movies: []
    }
  },

  components: {
    Movie
  },

  methods: {


    procurarFilme: function() {

      if(this.searchField != "") {
        // esvaziar movies
        this.movies = null;
      }
    
      axios.get(this.baseURL+"search/movie?api_key="+this.APIKEY+"&query="+this.searchField)
      .then((res) => {

        // a API retorna no maximo 20 resultados
        // console.log(res.data.results)

        this.movies = res.data.results;

        console.log(res.data);
      })
    }
  },

  created: function() {

    axios.get(this.baseURL+"configuration?api_key="+this.APIKEY)
    .then((res) => {

      this.posterBaseUrl = res.data.images.base_url
      console.log(this.posterBaseUrl);

      this.posterSize = res.data.images.poster_sizes[1]
      console.log(this.posterSize);
    })

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







