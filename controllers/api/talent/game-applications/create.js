const { body } = require('express-validator')
const { Application } = require('../../../../models')
const authenticateCurrentUserByToken = require('../../../_helpers/authenticate-current-user-by-token')
const getGameById = require('../../../_helpers/get-game-by-id')

const permittedFields = ['GameId', 'TalentId', 'approved']

const apiTalentGameApplicationCreate = async function (req, res) {
  const { locals: { currentUser, currentGame } } = res
  const { body } = req

  const newApplication = await currentUser.createApplication(body, { fields: permittedFields })

  newApplication.setGame(currentGame)

  return res.status(200).json({ newApplication })
}

module.exports= [
  authenticateCurrentUserByToken,
  getGameById,
  apiTalentGameApplicationCreate
]
