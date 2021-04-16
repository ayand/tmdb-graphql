const axios = require('axios');

function getCompanyLogos(args) {
    const {
        api_key,
        company_id
    } = args;

    let url = `https://api.themoviedb.org/3/company/${company_id}/images?api_key=${api_key}`

    return axios.get(url).then(res => res.data);
}

function getMovieImages(args) {
    const {
        api_key,
        movie_id,
        language,
        include_image_language
    } = args;

    let url = `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }
    if (include_image_language) {
        url += `&include_image_language=${include_image_language}`;
    }

    return axios.get(url).then(res => res.data);
}

function getPersonImages(args) {
    const {
        api_key,
        person_id
    } = args;

    let url = `https://api.themoviedb.org/3/person/${person_id}/images?api_key=${api_key}`;

    return axios.get(url).then(res => res.data);
}

module.exports = {
    getCompanyLogos,
    getMovieImages,
    getPersonImages
}
