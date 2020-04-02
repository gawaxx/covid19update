import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={{ fontSize: '20px'}}>

                <a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href="https://github.com/gawaxx/covid19update" > Github </a>
                <br></br>
                <a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/jules-blanc-29a36b179" > LinkedIn </a>

                <p style={{ color: 'white' }}>
                    COVID19Update | made with <span role="img" aria-label="baguette"> 🥖 </span> and ReactJS by Jules Blanc, 2020.
                </p>

            </div>
        )
    }
}
