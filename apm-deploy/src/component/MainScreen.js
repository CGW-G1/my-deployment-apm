import React from "react";
import API from "../API";
import '../index.css';

class CovidStats extends React.Component {
    constructor() {
        super();
        this.fetchStats = this.fetchStats.bind(this);
        this.state = {
            stats: [],
            deaths: [],
            date: new Date().toDateString()
        };
    }

    componentDidMount() {
        console.log("^This above is my first render");
        this.fetchStats();
    }

    async fetchStats() {
        const response = await API.get("/statistics?country=singapore");
        console.log("checking data: ", response);
        let stats = [];
        let fullStats = [];
        let deaths = [];
        if (response.status === 200) {
            fullStats = response.data.response;
            stats = response.data.response[0].cases;
            deaths = response.data.response[0].deaths;
        }
        // console.log("Full Statistics: ", fullStats);
        // console.log("Cases Statistics: ", stats);
        // console.log("Deaths Statistics: ", deaths);

        this.setState({
            ...this.state,
            stats,
            deaths,
        });
    }

    render() {
        const { stats } = this.state; //cases
        const { deaths } = this.state;

        console.log("In cases: ", stats);
        console.log("In deaths: ", deaths);



        return (
            <>
                <div className='header'>
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





                </div>
            </>
        );
    }
}

export default CovidStats;
