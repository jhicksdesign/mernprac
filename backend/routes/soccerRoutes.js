import { addNewPlayer, deletePlayer, getPlayers, getPlayerWithId, UpdatePlayer } from '../controllers/playerControllers'

const routes = (app) => {
  app.route('/players')
    .get(getPlayers)
    .post(addNewPlayer)

  app.route('/players/:PlayerId')
    .get(getPlayerWithId)
    .put(UpdatePlayer)
    .delete(deletePlayer)
}

export default routes;