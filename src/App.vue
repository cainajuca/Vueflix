/*
Vueflix
https://vueflix.com

TMDB API

1. To get the config data like image base urls


*/

<template>
  <div id="app">

    Olá, Mundo!
    
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',
  created: function() {
    
    axios.get("https://api.themoviedb.org/3/movie/550?api_key=7831c72bff377af6c56119a4568f8216")
    .then(res => {
      console.log(res.data);
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
