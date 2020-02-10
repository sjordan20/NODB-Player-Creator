import React, { Component } from 'react'

class Players extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false,
            editName: " ",
            editPosition: " "
        }
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })

    }

    handChangeName = (event) => {
        this.setState({
            editName: event.target.value,
        })

    }



    render() {
        return (
            <div>

                <div>
                    {this.state.isEditing ? (
                        <div>

                            <input className="save-input" onChange={this.handChangeName} />

                            <button className='save-button'
                                onClick={() => {
                                    this.props.editPlayerName(this.props.team.id, this.state.editName)
                                    this.toggleEdit()
                                }}
                            >
                                save
                            </button>
                        </div>
                    ) : (
                            <p className="player" onDoubleClick={this.toggleEdit}>{this.props.team.playerName}{":  "}{this.props.team.playerPosition} </p>
                        )}

                    <button className='release-button' onClick={() => this.props.deletePlayer(this.props.team.id)}
                    >Release</button>
                </div>

            </div>
        )
    }

}

export default Players