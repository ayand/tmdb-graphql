const axios = require('axios');

function getMovie(args) {
    const {
        api_key,
        movie_id
    } = args;

    let url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`;

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

function getSimilarMovies(args) {
    const {
        api_key,
        movie_id,
        page,
        language
    } = args;

    let url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${api_key}`;

    if (page) {
        url += `&page=${page}`;
    }
    if (language) {
        url += `&language=${language}`
    }
    return axios.get(url).then(res => res.data);
}

function getLatestMovie(args) {
    const {
        api_key,
        language
    } = args;

    let url = `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }

    return axios.get(url).then(res => res.data);
}

function getMoviesPlayingNow(args) {
    const {
        api_key,
        language,
        page,
        region
    } = args;

    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (page) {
        url += `&page=${page}`;
    }
    if (region) {
        url += `&region=${region}`;
    }

    return axios.get(url).then(res => res.data);
}

function getUpcomingMovies(args) {
    const {
        api_key,
        language,
        page,
        region
    } = args;

    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (page) {
        url += `&page=${page}`;
    }
    if (region) {
        url += `&region=${region}`;
    }

    return axios.get(url).then(res => res.data);
}


function getPopularMovies(args) {
    const {
        api_key,
        language,
        page,
        region
    } = args;

    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (page) {
        url += `&page=${page}`;
    }
    if (region) {
        url += `&region=${region}`;
    }

    return axios.get(url).then(res => res.data);
}

function getTopRatedMovies(args) {
    const {
        api_key,
        language,
        page,
        region
    } = args;

    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (page) {
        url += `&page=${page}`;
    }
    if (region) {
        url += `&region=${region}`;
    }

    return axios.get(url).then(res => res.data);
}

module.exports = {
  getMovie,
  searchMovies,
  getSimilarMovies,
  getLatestMovie,
  getMoviesPlayingNow,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies
};
