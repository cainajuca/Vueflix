import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3/';
const APIKEY = '7831c72bff377af6c56119a4568f8216';

const MoviesTMDB = {
    get(search) {
        return axios.get(baseURL+"search/movie?api_key="+APIKEY+`&query=${search}`)
    }
}

export default MoviesTMDB;