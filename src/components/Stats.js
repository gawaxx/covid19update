import React, { Component } from 'react'
import { API, APILINK } from '../adapters/API.js'

export default class Stats extends Component {

    state = {
        deaths: [],
        cases: [],
        recovered: [],
        currently_infected: []
    }

    componentDidMount() {
        API.GetAPI(APILINK + "Allreports").then( data => this.setState( {
            deaths: data.reports[0].deaths, 
            cases: data.reports[0].cases,
            recovered: data.reports[0].recovered, 
            currently_infected: data.reports[0].active_cases[0].currently_infected_patients 
        } ) )
        
        // API.GetAPI(APILINK + "Allreports").then( data => console.log(data.reports[0].cases))

    }

    render() {
        const { deaths, cases, recovered, currently_infected } = this.state
        return (
            <div>
                <h1> Here are the latest worldwide statistics regarding COVID-19</h1>
                <h2 style={{ color: 'white' }}> {cases} total cases  </h2>
                <h2 style={{ color: 'red' }}> {deaths} total deaths </h2>
                <h2 style={{ color: 'green' }} > {recovered} total recovered </h2>
            </div>
        )
    }
}
