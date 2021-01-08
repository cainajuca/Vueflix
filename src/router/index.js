import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../components/MovieList.vue'
import Cadastro from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import AdminUserList from '../components/AdminUserList.vue'

Vue.use(VueRouter);

export default 

new VueRouter({
    routes: [        
        {
            path: '/',
            redirect: '/Login'
        },
        {
            path: '/Login',
            component: Login
        },


        // tentativa de criar cadastro dos piá
        {
            path: '/admin/users',
            name: 'admin-user-list',
            component: AdminUserList
        },




        {
            path: '/cadastro',
            name: 'cadastro',
            component: Cadastro
        },
        {
            path: '/list',
            // name: 'movie-list',
            component: MovieList
        }
    ]
})