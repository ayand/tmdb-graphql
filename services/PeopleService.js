const axios = require('axios');

function getPerson(args) {
    const {
        api_key,
        person_id,
        language
    } = args;

    let url = `https://api.themoviedb.org/3/person/${person_id}?api_key=${api_key}`;

    if (language) {
        url += `&language=${language}`;
    }

    return axios.get(url).then(res => res.data);
}

module.exports = {
    getPerson
};
