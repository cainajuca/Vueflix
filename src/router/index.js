import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../components/MovieList.vue'
import Cadastro from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import Nav from '../components/Nav.vue'

Vue.use(VueRouter);

export default 
	new VueRouter({
		routes: [
			{ path: '/', component: Nav },
			{ path: '/Login', component: Login },
			{ path: '/cadastro', name: 'cadastro', component: Cadastro },
			{ path: '/list', name: 'movie-list', component: MovieList }
		]
	})