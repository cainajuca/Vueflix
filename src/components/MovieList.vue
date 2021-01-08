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
import axios from 'axios';
import Movie from './Movie';
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

                axios.get(this.baseURL+"search/movie?api_key="+this.APIKEY+"&query="+this.searchField)
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
#list {
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