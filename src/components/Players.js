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
            <div className='player-box'>

                <div className='player'>
                    {this.state.isEditing ? (
                        <div>
                            <input onChange={this.handChangeName} />
                            <button
                                onClick={() => {
                                    this.props.editPlayerName(this.props.team.id, this.state.editName)
                                    this.toggleEdit()
                                }}
                            >
                                save
                            </button>
                        </div>
                    ) : (
                            <p onDoubleClick={this.toggleEdit}>{this.props.team.playerName}{":"}{this.props.team.playerPosition} </p>
                        )}

                    <button onClick={() => this.props.deletePlayer(this.props.team.id)}
                    >Release</button>
                </div>

            </div>
        )
    }

}

export default Players