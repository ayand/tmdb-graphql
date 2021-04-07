const axios = require('axios');

function getMovie(args) {
    const {
        api_key,
        movie_id
    } = args;

    let url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`

    return axios.get(url).then(res => res.data);
}

function searchMovies(args) {
    const {
        api_key,
        query,
        page,
        language
    } = args;

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
    if (page) {
        url += `&page=${page}`;
    }
    if (language) {
        url += `&language=${language}`
    }
    return axios.get(url).then(res => res.data);
}

module.exports = { getMovie, searchMovies };
