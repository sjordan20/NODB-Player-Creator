import React from 'react'
import NewPlayer from './newPlayer'

function PlayerCreator(props) {

    return <div>PlayerCreator.js
        <NewPlayer
            createPlayer={props.createPlayer}
        />


    </div>



}

export default PlayerCreator