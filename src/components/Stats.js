import React, { Component } from 'react'
import { API, APILINK } from '../adapters/API.js'

export default class Stats extends Component {

    state = {
        deaths: []
    }

    componentDidMount() {
        API.GetAPI(APILINK + "Allreports").then( data => this.setState( {deaths: data.reports[0].deaths} ) )
        // API.GetAPI(APILINK + "Allreports").then( data => console.log(data.reports[0].cases))

    }

    render() {
        return (
            <div>
                <h1> Here are the latest statistics regarding CoVid-19</h1>
                <h2 style={{color: 'red'}}> {this.state.deaths} total deaths </h2>
            </div>
        )
    }
}
