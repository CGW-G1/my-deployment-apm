import axios from 'axios';





const API = axios.create({
    baseURL: "https://covid-193.p.rapidapi.com",
    headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '66f75eb6ebmshb919ecdbb43a32ep1f9ed5jsnd03f0d01f882'
    }

});





export default API;