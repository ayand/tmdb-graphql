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

module.exports = { getTVShow, getTVShowCredits };
