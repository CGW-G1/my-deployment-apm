import React from "react";
import API from "../API";
import '../index.css';
//external library
const reactStringReplace = require('react-string-replace');

class OvhLyric extends React.Component {
    constructor() {
        super();
        this.fetchOvhData = this.fetchOvhData.bind(this);

        this.state = {
            lyrics: [],
            lyricsAltFormat: [],
            // test: [],
        };
    }

    componentDidMount() {
        console.log("^This above is my first render");
        this.fetchOvhData();
    }


    async fetchOvhData() {
        const response = await API.get("/the weeknd/save your tears");
        let lyrics = [];
        let lyricsAltFormat = [];
        if (response.status === 200) {
            lyrics = response.data; //this can be response.data.lyrics then line 60 will be cleaner
            lyricsAltFormat = response.request.response;
        }

        console.log("Full API data: ", response);
        console.log("Lyric Object from API: ", lyrics); //this console logs lyrics object
        console.log("lyrics alternate format: ", lyricsAltFormat); //this console logs /n version

        /* This replacing method works but the wont reflect as html tag. Prints out <br/> as it is*/
        // let test = lyricsAltFormat.replace(/\n/g, '<br>');
        // console.log("lyrics  format: ", test);

        this.setState({
            ...this.state,
            lyrics,
            lyricsAltFormat,
            // test,
        });
    }


    render() {

        const { lyrics } = this.state;
        // const { test } = this.state;
        console.log('Hello printing lyric: ', lyrics.lyrics); //this console logs formatted version but format disappears when rendered to HTML


        const content = lyrics.lyrics;
        let formatText;

        formatText = reactStringReplace(content, '\n', (match, i) => ( //replace \n
            <div className="spacer"><br /></div>                       // with <br />
        ));

        formatText = reactStringReplace(formatText, 'Paroles de la chanson', (match, i) => (
            <div></div>
        ));

        //this replaces 'par' from title, i.e Save Your Tears par The Weeknd
        //but this also replaces every other instance of 'par'. i.e Apart -> A by t
        formatText = reactStringReplace(formatText, 'par', (match, i) => (
            <i> by </i>
        ));

        return (

            <>
                <blockquote style={{ textAlign: 'center' }}>
                    {formatText}
                </blockquote>

            </>
        );
    }
}

export default OvhLyric;














/* Ignore----------------------------------------- */


// import ScriptTag from 'react-script-tag';
// import { getLyrics, getSong } from 'genius-lyrics-api';
// import Genius from 'genius-lyrics';
//class OvhLyric extends React.Component {
    //     constructor() {
    //         super();
    //         // this.fetchStats = this.fetchStats.bind(this);
    //         this.fetchOvhData = this.fetchOvhData.bind(this);
    //         // this.checkerSpeller = this.checkerSpeller.bind(this);

    //         this.state = {
    //             lyrics: [],
    //             lyricsAltFormat: [],
    //             test: [],
    //             // stats: [],
    //             // deaths: [],
    //             // date: new Date().toDateString()
    //         };
    //     }

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
/* note: this API prints a watermark(?) "paroles de la chanson */

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

// const { stats } = this.state; //cases
        // const { deaths } = this.state;
        // console.log("In cases: ", stats);
        // console.log("In deaths: ", deaths);

/* <div className='header'>
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




</div> */
