const authenticateCurrentUserByToken = require('../../../_helpers/authenticate-current-user-by-token')
const { Application } = require('../../../../models')
const getDevGameById = require('../../../_helpers/get-dev-game-by-id')
const getDevGameApplicationById = require('../../../_helpers/get-dev-game-application-by-id')

const permittedFields = {
  Application: ['approved']
}
const apiDevGameApplicationsUpdate = async function (req, res) {
  const { body } = req
  const { locals: { currentApplication } } = res

  await currentApplication.update(body, { fields: permittedFields.Application })

  return res.status(200).json({ application: currentApplication })
}

module.exports=[
  authenticateCurrentUserByToken,
  getDevGameById,
  getDevGameApplicationById,
  apiDevGameApplicationsUpdate
]
