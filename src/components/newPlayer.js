import React, { Component } from 'react'

class NewPlayer extends Component {
    constructor(props) {
        super(props)



        this.state = {
            playerName: '',
            playerPosition: ''
        }
    }

    render() {
        return (
            <div>
                NewPlayer.js
            </div>
        )
    }
}

export default NewPlayer