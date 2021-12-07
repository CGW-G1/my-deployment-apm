import React from "react";
import API from "../API";
import '../index.css';
//external library
const reactStringReplace = require('react-string-replace');

function Ovh() {

}

class OvhLyric extends React.Component {
    constructor() {
        super();
        this.fetchOvhData = this.fetchOvhData.bind(this);

        this.state = {
            lyrics: [],
            lyricsAltFormat: [],
            replacedSlashR: [],
            // artist: '',
            // title: '',
        };
    }

    componentDidMount() {
        console.log("^This above is my first render");
        this.fetchOvhData();
    }


    async fetchOvhData() {
        const response = await API.get('/the weeknd/blinding lights');
        let lyrics = [];
        if (response.status === 200) {
            lyrics = response.data.lyrics;
        }
        console.log("Full API data: ", response);
        const replacedSlashR = lyrics.replace(/\r/g, ' ');
        console.log("lyrics  format: ", replacedSlashR);

        this.setState({
            ...this.state,
            lyrics,
            replacedSlashR,
        });
    }

    render() {

        const { lyrics } = this.state;
        const { replacedSlashR } = this.state;
        console.log('Hello printing lyric: ', lyrics); //this console logs formatted version but format disappears when rendered to HTML

        const content = replacedSlashR;
        let formattedLyrics;

        formattedLyrics = reactStringReplace(content, '\n', (match, i) => ( //replace \n
            <br />                    // with <br />
        ));

        formattedLyrics = reactStringReplace(formattedLyrics, 'Paroles de la chanson', (match, i) => (
            <p></p>
        ));

        formattedLyrics = reactStringReplace(formattedLyrics, 'par', (match, i) => (
            <i> by </i>
        ));

        return (

            <>
                {/* <form onSubmit={this.fetchOvhData}>
                    <input type='text' placeholder='artist' onChange={this.state.artist}>
                    </input>
                </form> */}
                <div>
                    <h4 style={{ textAlign: 'center', padding: '20px' }}>
                        {formattedLyrics}
                    </h4>
                </div>

            </>
        );
    }
}

export default OvhLyric;


































//
//
//
//
//
//
//
//
// 'use strict';

// var searchInput = $('#search-input');
// var results = $('#results');
// var apiUrl = 'https://api.lyrics.ovh';
// // var apiUrl = 'http://localhost:8080';
// var lyricsDiv = $('#lyrics');
// var timeoutSuggest;
// lyricsDiv.hide();
// searchInput.on('input', function () {
//     if (timeoutSuggest) {
//         clearTimeout(timeoutSuggest);
//     }
//     timeoutSuggest = setTimeout(suggestions, 300);
// });

// function removeResults() {
//     $('.result').remove();
// }

// function suggestions() {
//     var term = searchInput.val();
//     if (!term) {
//         removeResults();
//         return;
//     }
//     console.log("Search suggestions for", term);
//     $.getJSON(apiUrl + '/suggest/' + term, function (data) {
//         removeResults();
//         var finalResults = [];
//         var seenResults = [];
//         data.data.forEach(function (result) {
//             if (seenResults.length >= 5) {
//                 return;
//             }
//             var t = result.title + ' - ' + result.artist.name;
//             if (seenResults.indexOf(t) >= 0) {
//                 return;
//             }
//             seenResults.push(t);
//             finalResults.push({
//                 display: t,
//                 artist: result.artist.name,
//                 title: result.title
//             });
//         });

//         var l = finalResults.length;
//         finalResults.forEach(function (result, i) {
//             var c = 'result';
//             if (i == l - 1) {
//                 c += ' result-last'
//             }
//             var e = $('<li class="' + c + '">' + result.display + '</li>');
//             results.append(e);
//             e.click(function () {
//                 songLyrics(result);
//             });
//         });
//     });
// }
// function songLyrics(song) {
//     console.log("Search lyrics for", song);
//     removeResults();
//     lyricsDiv.slideUp();
//     $.getJSON(apiUrl + '/v1/' + song.artist + '/' + song.title, function (data) {
//         var html = '<h3 class="lyrics-title">' + song.display + '</h3>';
//         html += '<div class="copy-lyrics" id="copy-lyrics" data-clipboard-target="#thelyrics">Copy the lyrics <span id="copy-ok"></span></div>';
//         html += '<div id="thelyrics">' + data.lyrics.replace(/\n/g, '<br />') + '</div>';
//         lyricsDiv.html(html);
//         lyricsDiv.slideDown();
//         var copyl = new Clipboard('#copy-lyrics');
//         copyl.on('success', function (e) {
//             e.clearSelection();
//             $('#copy-ok').text(' - Done :-)');
//         });
//     });
// }

// // Hide the link for Chrome extension if not using Chrome
// var isChromium = window.chrome,
//     winNav = window.navigator,
//     vendorName = winNav.vendor,
//     isOpera = winNav.userAgent.indexOf("OPR") > -1,
//     isIEedge = winNav.userAgent.indexOf("Edge") > -1,
//     isIOSChrome = winNav.userAgent.match("CriOS");

// if (!isIOSChrome && !(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false)) {
//     $('#dl-chrome-ext').hide();
// }














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
