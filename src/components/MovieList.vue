<template>
  
    <div id="list">

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
import Movie from './Movie';
import MoviesTMDB from '../api/tmdb/index.js'
export default {
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

                MoviesTMDB.get(this.searchField)
                .then((res) => {

                // a API retorna no maximo 20 resultados
                // console.log(res.data.results)

                this.movies = res.data.results;
                })
            } else {
                alert("You must search for something to get results.");
            }
        }
    }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap'); */

#list {
  margin: 0;
  min-height: 500px;
  height: 100%;
  background-color: rgb(90, 247, 194);
}

#pre-list {
  /* font-family: 'Mandali', sans-serif; */
  margin-left: 10px;
  font-size: 20px;
  color: blue;
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