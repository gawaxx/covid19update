import React, { Component } from 'react'
import { API, APILINK } from '../adapters/API.js'

export default class Stats extends Component {

    state = {
        deaths: [],
        cases: []
    }

    componentDidMount() {
        API.GetAPI(APILINK + "Allreports").then( data => this.setState( {deaths: data.reports[0].deaths, cases: data.reports[0].cases} ) )
        // API.GetAPI(APILINK + "Allreports").then( data => console.log(data.reports[0].cases))

    }

    render() {
        const { deaths, cases } = this.state
        return (
            <div>
                <h1> Here are the latest statistics regarding CoVid-19</h1>
                <h2 style={{color: 'white'}}> {cases} total cases  </h2>
                <h2 style={{color: 'red'}}> {deaths} total deaths </h2>
            </div>
        )
    }
}
