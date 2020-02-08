import React from 'react'
import Players from './Players'

function Court(props) {

    const teamList = props.team.map(element => {
        return (

            <Players

                editPlayerName={props.editPlayerName}
                key={element.id}
                team={element}
                deletePlayer={props.deletePlayer}

            />
        )
    })

    // console.log(teamList)





    return (
        
        <div className= "background">
            <div className='court'>

                <h2 className="court-title">Court</h2>

                <div className='player-box'>

                    <div>

                        {teamList}
                    </div>



                </div>
            </div>


        </div>)
}

export default Court