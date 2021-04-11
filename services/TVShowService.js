const axios = require('axios');

function getTVShow(args) {
    const {
        api_key,
        tv_id,
        language
    } = args;

    let url = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }

    return axios.get(url).then(res => res.data);
}

function getTVShowCredits(args) {
    const {
        api_key,
        tv_id,
        language
    } = args;

    let url = `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }

    return axios.get(url).then(res => res.data);
}

function getShowsAiringToday(args) {
    const {
        api_key,
        language,
        page
    } = args;

    let url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (page) {
        url += `&page=${page}`
    }

    return axios.get(url).then(res => res.data);
}

function getShowsOnAir(args) {
    console.log(args);
    const {
        api_key,
        language,
        page
    } = args;

    let url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (page) {
        url += `&page=${page}`
    }

    return axios.get(url).then(res => res.data);
}

function getPopularShows(args) {
    const {
        api_key,
        language,
        page
    } = args;

    let url = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (page) {
        url += `&page=${page}`
    }

    return axios.get(url).then(res => res.data);
}

function getTopRatedShows(args) {
    const {
        api_key,
        language,
        page
    } = args;

    let url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (page) {
        url += `&page=${page}`
    }

    return axios.get(url).then(res => res.data);
}

function getTVSeason(args) {
    const {
        api_key,
        tv_id,
        season_number,
        language
    } = args;
    let url = `https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }

    return axios.get(url).then(res => res.data);
}

module.exports = {
  getTVShow,
  getTVShowCredits,
  getShowsAiringToday,
  getShowsOnAir,
  getPopularShows,
  getTopRatedShows,
  getTVSeason
};
