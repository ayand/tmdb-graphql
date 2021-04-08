const axios = require('axios');

function getGenres(args) {
    const {
        api_key,
        language
    } = args;

    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`
    }

    return axios.get(url).then(res => res.data.genres);
}

module.exports = { getGenres };
