import React from 'react'
import NewPlayer from './newPlayer'

function PlayerCreator(props) {

    return <div>
        <NewPlayer
            createPlayer={props.createPlayer}
        />


    </div>



}

export default PlayerCreator