const express = require('express')
const playerCtrl = require('./controllers/playerController')

const app = express()
const PORT = 5555

app.use(express.json())


app.get(`/api/players`, playerCtrl.getTeam)
app.post(`/api/players`, playerCtrl.newPlayers)
app.put(`/api/players/:id`, playerCtrl.editPlayerName)
app.delete(`/api/players/:id`, playerCtrl.deletePlayer)



app.listen(PORT, () => console.log(`Am I working on port ${PORT}`))