import React, { Component } from 'react'

class NewPlayer extends Component {
    constructor(props) {
        super(props)



        this.state = {
            playerName: '',
            playerPosition: ''
        }
    }

    handlePlayerName = (event) => {
        this.setState({ playerName: event.target.value })
    }

    handlePlayerPosition = (event) => {
        this.setState({ playerPosition: event.target.value })
    }

    handleClick = () => {
        this.props.createPlayer(
            this.state.playerName,
            this.state.playerPosition
        )
    }







    render() {
        return (
            <div>
                <label>Player Name</label>
                <input onChange={this.handlePlayerName} />
                <label>Position</label>
                <input onChange={this.handlePlayerPosition} />
                <button onClick={this.handleClick}>submit</button>
            </div>
        )
    }
}

export default NewPlayer