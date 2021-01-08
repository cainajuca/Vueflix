import Vue from 'vue'
import Vuex from 'vuex'
// import api?

Vue.use(vuex);

export default new Vuex.Store({

    state: {
        movies: [],
        watchedMovies: [],
        users: []
    },

    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        }
    },

    actions: {
        // async loadUsers((commit)) {

        // }
    }

})