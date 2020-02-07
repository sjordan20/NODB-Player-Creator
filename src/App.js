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

    console.log(this.state.team)




  }

  editPlayer = () => {

  }

  deletePlayer = () => {

  }

  render() {

    return (
      <div>
        <Header />
        <PlayerCreator createPlayer={this.createPlayer} />
        <Court />

      </div>
    )
  }




}


export default App;
