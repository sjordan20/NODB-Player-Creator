const team = []

let id = 0

module.exports = {

    getTeam: (req, res) => {
        res.status(200).send(team)
        // fetches team = [ ] for componentDidMount
    },

    newPlayers: (req, res) => {

        let player = {}

        const { playerName, playerPosition } = req.body
        player.id = id
        id++

        team.push({
            playerName: playerName,
            playerPosition: playerPosition,
            id: id
        })

        res.status(200).send(team)

        //  creates inputs into an object and then pushes them into the team []


    },

    editPlayerName: (req, res) => {
        const { id } = req.params
        const { playerName } = req.body

        const index = team.findIndex(element => {
            return element.id === +id
        })

        team[index].playerName = playerName

        res.status(200).send(team)
    },

    // uses findIndex method to loop through and return the object that allows us to edit name

    deletePlayer: (req, res) => {

        const { id } = req.params

        const index = team.findIndex(element => {
            return element.id === +id
        })

        team.splice(index, 1)

        res.status(200).send(team)
    }

    // uses findIndex to loop through and return the index that we then can slpice to remove the object from the array

}