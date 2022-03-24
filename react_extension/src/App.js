import React, { Component } from 'react'
import Demo from './components/8_error_boundary/Parent'

export default class App extends Component {
    render() {
        return (
            <div>
                <Demo x={2}></Demo>
            </div>
        )
    }
}
