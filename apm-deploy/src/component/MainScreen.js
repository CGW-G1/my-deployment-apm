import React from "react";
import API from "../API";

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
        console.log("This is my first render");
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
        const { stats } = this.state;
        const xyz = Object.values(stats);
        const xycArr = Object.values(xyz);

        const { deaths } = this.state;
        const abc = Object.values(deaths);
        const abcArr = Object.values(abc);

        console.log("In obj: ", stats);
        console.log("In array cases: ", xycArr);
        console.log("In array deaths: ", abcArr);


        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h2>
                        <u> Singapore COVID-19 Cases Update : {this.state.date}</u>
                    </h2>
                </div>

                <div className="container" style={{ padding: "25px 50px", textAlign: "center" }}>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '0% 20%' }}>
                        <div>
                            New cases today:
                            <p style={{ color: "green", fontWeight: "bold", fontSize: "30px" }}>
                                {xyz[0]}
                            </p>
                        </div>
                        <hr />
                        <div>
                            New deaths today:
                            <p style={{ color: "red", fontWeight: "bold", fontSize: "30px" }}>
                                {abc[0]}
                            </p>
                        </div>
                    </div>

                    <div>
                        Current number of active cases:
                        <p style={{ color: "purple", fontWeight: "bold", fontSize: "22px" }}>
                            {xyz[1]}
                        </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', padding: '0% 20%' }}>
                        <div>
                            Total cases to date:
                            <p style={{ color: "purple", fontWeight: "bold", fontSize: "22px" }}>
                                {xyz[5]}
                            </p>
                        </div>
                        <hr />
                        <div>
                            Total deaths to date:
                            <p style={{ color: "black", fontWeight: "bold", fontSize: "22px" }}>
                                {abc[2]}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CovidStats;
