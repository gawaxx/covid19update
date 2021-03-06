import React, { Component } from 'react'
import { API, APILINK } from '../adapters/API.js'

export default class Stats extends Component {

    state = {
        deaths: "--",
        cases: "--",
        recovered: "--",
        currently_infected: "--",
        latest_report: "--" 
    }

    componentDidMount() {
        API.GetAPI(APILINK + "Allreports").then( data => this.setState( {
            deaths: data.reports[0].deaths, 
            cases: data.reports[0].cases,
            recovered: data.reports[0].recovered, 
            currently_infected: data.reports[0].active_cases[0].currently_infected_patients ,
        } ) )
        API.GetAPI(APILINK + "SituationReports").then( data => this.setState( {
            latest_report: data.reports[0]
        }))

        // API.GetAPI(APILINK + "Allreports").then( data => console.log(data.reports[0].cases))

    }

    transformNumber = (nStr) => {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2; 
    }

    render() {
        const { deaths, cases, recovered, currently_infected } = this.state
        return (
            <div>
                <h1> Here is the latest global data regarding the COVID-19 pandemic: </h1>
                <h2 style={{ color: 'white' }} > {this.transformNumber(currently_infected)} active cases </h2>
                <h2 style={{ color: 'white' }}> {this.transformNumber(cases)} total cases  </h2>
                <h2 style={{ color: 'red' }}> {this.transformNumber(deaths)} deaths </h2>
                <h2 style={{ color: 'green' }} > {this.transformNumber(recovered)} recovery</h2>
                <a href={`${this.state.latest_report.pdf}`} target="_blank" rel="noopener noreferrer" > Click here for the latest situational report by the WHO </a>
            </div>
        )
    }
}
