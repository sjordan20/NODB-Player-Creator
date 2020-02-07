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

    handChange() {

    }

    render() {
        return (
            <div>
                {this.props.team.playerName}
                {this.props.team.playerPosition}


            </div>
        )
    }

}

export default Players