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

    // createPlayer is passed down in props through app.js --> createPlayer.js 







    render() {
        return (
            <div className='new-player'>
                <div className="input-boxes">
                    <div className="player-input" >
                        <label className="label">Player Name</label>
                        <input className="input" onChange={this.handlePlayerName} />
                    </div>
                    <div className="position-input">
                        <label className="label">Position</label>
                        <input className="input" onChange={this.handlePlayerPosition} />
                    </div>

                </div>
                <div >
                    <button className="myButton" onClick={this.handleClick}>submit</button>
                </div>
            </div>
        )
    }
}

export default NewPlayer