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



    resetInput = () => {
        this.setState({
            playerName: '',
            playerPosition: ''
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createPlayer(
            this.state.playerName,
            this.state.playerPosition,
        )
        this.resetInput()


    }

    handleClick = () => {
        this.props.createPlayer(
            this.state.playerName,
            this.state.playerPosition,
        )
        this.resetInput()
    }

    // createPlayer is passed down in props through app.js --> createPlayer.js 




    render() {
        return (
            <div className='new-player'>


                <div className="input-boxes">
                    <div className="player-input" >
                        <label className="label">Player Name</label>
                        <form onSubmit={this.handleSubmit}>
                            <input className="input" value={this.state.playerName} onChange={this.handlePlayerName} />
                        </form>
                    </div>
                    <div className="position-input">
                        <label className="label">Position</label>

                        <form onSubmit={this.handleSubmit}>

                            <input className="input" value={this.state.playerPosition} onChange={this.handlePlayerPosition} />
                        </form>
                    </div>

                </div>
                <div >
                    <button className="myButton" onClick={this.handleClick}> submit </button>
                </div>
            </div>
        )
    }
}

export default NewPlayer