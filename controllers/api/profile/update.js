const MulterParser = require('../../../services/MulterParser')
const authenticateCurrentUserByToken = require('../../_helpers/authenticate-current-user-by-token')

const permittedFields = ['username', 'firstName', 'lastName', 'resume']

const apiUserProfileUpdate = async function (req, res) {
  const {locals: {currentUser}} = res

    const newInfo = { ...req.body }

  if (req.file && req.file.location) {
    newInfo.resume = req.file.location
  }

  await currentUser.update(newInfo, {field: permittedFields})

  res.status(204).json()
}

module.exports=[
  MulterParser.single('resume'),
  authenticateCurrentUserByToken,
  apiUserProfileUpdate
]
