const axios = require('axios');

function getCompany(args) {
    const {
        api_key,
        company_id
    } = args;

    let url = `https://api.themoviedb.org/3/company/${company_id}?api_key=${api_key}`;

    return axios.get(url).then(res => res.data);
}

module.exports = {
    getCompany
}
