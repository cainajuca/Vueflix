import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../components/MovieList.vue'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import Home from '../components/Home.vue'
// import Nav from '../Nav.vue'

Vue.use(VueRouter);

export default 
	new VueRouter({
		mode: 'history',
		routes: [
			{ path: '/', component: Home },
			{ path: '/login', component: Login },
			{ path: '/register', name: 'register', component: Register },
			{ path: '/list', name: 'movie-list', component: MovieList }
		]
	})