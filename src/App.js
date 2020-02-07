import React, { Component } from 'react';
import Header from './components/Header'
import PlayerCreator from './components/PlayerCreator';
import Court from './components/Court'
import axios from 'axios';


class App extends Component {
  constructor() {
    super()

    this.state = {
      team: []
    }
  }

  componentDidMount = () => {

    axios.get(`/api/players`).then(res => {
      this.setState({
        team: res.data
      })
    })
  }

  // fetches team [] and mounts on the screen

  createPlayer = (playerName, playerPosition) => {

    axios.post(`/api/players`, { playerName: playerName, playerPosition: playerPosition }).then(res => {
      this.setState({
        team: res.data
      })
    })


    // playerName and PlayerPosition need to be passed through sense those are the keys being updated
    // console.log(this.state.team)

  }

  editPlayerName = (id, newName) => {
    axios.put(`/api/players/${id}`, { playerName: newName }).then(res => {
      this.setState({
        team: res.data
      })
    })

  }

  deletePlayer = () => {

  }

  render() {

    return (
      <div>
        <Header />
        <PlayerCreator createPlayer={this.createPlayer} />
        <Court
          editPlayerName={this.editPlayerName}
          team={this.state.team}
        />

      </div>
    )
  }




}


export default App;
