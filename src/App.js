import React, { Component } from 'react';
import Header from './components/Header'
import PlayerCreator from './components/PlayerCreator';
import Court from './components/Court'


class App extends Component {
  constructor() {
    super()

    this.state = {
      team: []
    }
  }

  componentDidMount() {

  }

  createPlayer() {

  }

  editPlayer() {

  }

  deletePlayer() {

  }

  render() {

    return (
      <div>
        <Header />
        app.js
        <PlayerCreator />
        <Court />

      </div>
    )
  }




}


export default App;
