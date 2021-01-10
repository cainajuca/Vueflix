<template>
  <div id="app">

    <Nav />


    <div class="auth-wrapper">
			<div class="auth-inner">
				<router-view/>
			</div>
		</div>
    

  </div>
</template>

<script>

  import Nav from './Nav.vue'

  export default {
    name: 'App',

    components: {
      Nav
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


Caso alguém tenha alguma erro relacionado ao router adicionar # nos seus links, adicione:
mode: 'history'
no seu const router = new VueRouter
Fica assim:
const router = new VueRouter({
	mode: 'history',
        routes: [ ROTAS AQUI ]