import React from 'react'
import Players from './Players'

function Court(props) {

    const teamList = props.team.map(element => {
        return (

            <Players

                editPlayerName={props.editPlayerName}
                key={element.id}
                team={element}


            />
        )
    })

    console.log(teamList)





    return (
        <div>
            <h2>Court</h2>
            {teamList}
        </div>)
}

export default Court