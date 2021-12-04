import React from "react";
import API from "../API";
import '../index.css';
import ScriptTag from 'react-script-tag';
import { getLyrics, getSong } from 'genius-lyrics-api';


// getSong(options).then((song) =>
//     console.log(`
// 	${song.id}
// 	${song.title}
// 	${song.url}
// 	${song.albumArt}
// 	${song.lyrics}`)
// );
// ^^ CORS BLOCKED - security issue
// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

// var axios = require("axios").default;
// var options = {
//     method: 'POST',
//     url: 'https://perfecttense.p.rapidapi.com/correct',
//     headers: {
//         'content-type': 'application/json',
//         'authorization': '61a78d868090163393aa4c3a',
//         'appauthorization': '61a78d868090163393aa4c3a',
//         'x-rapidapi-host': 'perfecttense.p.rapidapi.com',
//         'x-rapidapi-key': '66f75eb6ebmshb919ecdbb43a32ep1f9ed5jsnd03f0d01f882'
//     },
//     data: {
//         responseType: '["corrected", "grammarScore", "rulesApplied", "offset", "summary"]',
//         text: 'This articl have some errors'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });
// const options = {
//     apiKey: 'ZkINFqzxDyripdjHHBYh4k7ejQojeNcQqBDsQ2UChzJ2MhgjysqbcKfSJ_uio9Fl',
//     title: 'Blinding Lights',
//     artist: 'The Weeknd',
//     optimizeQuery: true
// };
// getLyrics(options).then((lyrics) => console.log("this is the chunk: ", lyrics));

class CovidStats extends React.Component {
    constructor() {
        super();
        // this.fetchStats = this.fetchStats.bind(this);
        this.fetchOvhData = this.fetchOvhData.bind(this);
        // this.checkerSpeller = this.checkerSpeller.bind(this);

        this.state = {
            lyrics: [],
            lyricsAltFormat: [],
            // stats: [],
            // deaths: [],
            // date: new Date().toDateString()
        };
    }

    componentDidMount() {
        console.log("^This above is my first render");
        // this.fetchStats();
        this.fetchOvhData();
        // this.checkerSpeller();
    }

    // async checkerSpeller() {
    //     const spell = await API.get('/check');
    //     console.log("Check Spell: ", spell);
    // }

    async fetchOvhData() {
        const response = await API.get("/The Weeknd/Save Your Tears");
        let lyrics = [];
        let lyricsAltFormat = [];
        if (response.status === 200) {
            lyrics = response.data;
            lyricsAltFormat = response.request.response; //need to find a way to replace \n with </br> 

        }
        console.log("Full API data: ", response);
        console.log("is this the lyrics: ", lyrics);
        console.log("lyrics alternate format: ", lyricsAltFormat);
        this.setState({
            ...this.state,
            lyrics,
            lyricsAltFormat,
        });

    }

    // async fetchStats() {
    //     const response = await API.get("/statistics?country=singapore");
    //     // const response = await API.post("/correct");
    //     // console.log(response);
    //     console.log("checking data: ", response);
    //     let stats = [];
    //     let fullStats = [];
    //     let deaths = [];
    //     if (response.status === 200) {
    //         fullStats = response.data.response;
    //         stats = response.data.response[0].cases;
    //         deaths = response.data.response[0].deaths;
    //     }
    //     console.log("Full Statistics: ", fullStats);
    //     // console.log("Cases Statistics: ", stats);
    //     // console.log("Deaths Statistics: ", deaths);

    //     this.setState({
    //         ...this.state,
    //         stats,
    //         deaths,
    //     });
    // }


    render() {
        // const { stats } = this.state; //cases
        // const { deaths } = this.state;
        // console.log("In cases: ", stats);
        // console.log("In deaths: ", deaths);
        const { lyrics } = this.state;
        console.log('Hello printing lyric: ', lyrics.lyrics);

        return (

            <>

                <blockquote> <h3>{lyrics.lyrics}</h3></blockquote>
                {/* note: this API prints a watermark(?) "paroles de la chanson */}



                {/* <div className='header'>
                    <h2>
                        <u> Singapore COVID-19 Cases Update : {this.state.date}</u>
                    </h2>
                </div>
                <div className="container">
                    <div className="container e0">
                        <div className="titles">
                            New cases today:
                            <p id="testID" >
                                {stats.new}
                            </p>
                        </div>
                        <hr style={{ border: " solid 1px #56A4A8" }} />
                        <div style={{ color: "#d9ac9b" }}>
                            New deaths today:
                            <p style={{ color: "#712320", fontWeight: "bold", fontSize: "30px" }}>
                                {deaths.new}
                            </p>
                        </div>
                    </div>
                    <div style={{ color: "#d9ac9b" }}>
                        Current number of active cases:
                        <p style={{ color: "#D9AC9B", fontWeight: "bold", fontSize: "25px" }}>
                            {stats.active}
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '0% 30%' }}>
                        <div style={{ color: "#d9ac9b" }}>
                            Total cases to date:
                            <p style={{ color: "#F5C492", fontWeight: "bold", fontSize: "25px" }}>
                                {stats.total}
                            </p>
                        </div>
                        <hr style={{ border: " solid 1px #56A4A8" }} />
                        <div style={{ color: "#d9ac9b" }}>
                            Total deaths to date:
                            <p style={{ color: "#F5C492", fontWeight: "bold", fontSize: "25px" }}>
                                {deaths.total}
                            </p>
                        </div>
                    </div>




                </div> */}



            </>
        );
    }
}





export default CovidStats;
