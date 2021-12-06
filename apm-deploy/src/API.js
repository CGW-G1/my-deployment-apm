import axios from 'axios';

const API = axios.create({
    baseURL: "https://api.lyrics.ovh/v1/",
});


export default API;








/* Ignore----------------------------------------- */

// const API = axios.create({
//     baseURL: "https://covid-193.p.rapidapi.com",
//     headers: {
//         'x-rapidapi-host': 'covid-193.p.rapidapi.com',
//         'x-rapidapi-key': '66f75eb6ebmshb919ecdbb43a32ep1f9ed5jsnd03f0d01f882'
//     }

// });

// const API = axios.create({
//     baseURL: 'https://montanaflynn-spellcheck.p.rapidapi.com/',
//     params: { text: 'This sentnce has some probblems.' },
//     headers: {
//         'x-rapidapi-host': 'montanaflynn-spellcheck.p.rapidapi.com',
//         'x-rapidapi-key': '66f75eb6ebmshb919ecdbb43a32ep1f9ed5jsnd03f0d01f882'
//     }
// });

//perfect tense
// const API2 = axios.create({
//     baseURL: 'https://api.perfecttense.com',
//     headers: {
//         'content-type': 'application/json',
//         'authorization': '61a78d868090163393aa4c3a',
//         'appauthorization': '66523apm69',
//         // 'x-rapidapi-host': 'perfecttense.p.rapidapi.com',
//         // 'x-rapidapi-key': '66f75eb6ebmshb919ecdbb43a32ep1f9ed5jsnd03f0d01f882'
//     },
// })

// const ptClient = require('perfecttense')

// ptClient.generateAppKey(
//     "61a78d868090163393aa4c3a",
//     "Test App",
//     "This is a brief description of the use of this application",
//     "za7196@gmail.com",
//     "auntpyonemaung.github.io"
// ).then(function (result) {
//     const appKey = result.data.key
// })
