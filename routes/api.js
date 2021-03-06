const { Router } = require('express')
const router = Router()

// AUTH
router.post('/auth/signup', require('../controllers/api/auth/signup'))
router.post('/auth/login', require('../controllers/api/auth/login'))
router.delete('/auth/logout', require('../controllers/api/auth/logout'))

//PUBLIC
router.get('/games', require('../controllers/api/public/index'))
router.get('/games/:id', require('../controllers/api/public/show'))

//DEV GAMES
router.get('/dev/games', require('../controllers/api/dev/index'))
router.post('/dev/games', require('../controllers/api/dev/create'))
router.get('/dev/games/:GameId', require('../controllers/api/dev/show'))
router.put('/dev/games/:GameId', require('../controllers/api/dev/update'))
router.delete('/dev/games/:GameId', require('../controllers/api/dev/destroy'))

//DEV GAMES IMAGES
router.post('/dev/games/:GameId/images',require('../controllers/api/dev/game-images/create'))
router.put('/dev/games/:GameId/images/:ImageId', require('../controllers/api/dev/game-images/update'))
router.delete('/dev/games/:GameId/images/:ImageId', require('../controllers/api/dev/game-images/destroy'))

//DEV GAMES APPLICATIONS
router.get('/dev/games/:GameId/applications',require('../controllers/api/dev/game-applications/index'))
router.put('/dev/games/:GameId/applications/:ApplicationId', require('../controllers/api/dev/game-applications/update'))

//TALENT APPLICATIONS
router.get('/talent/applications', require('../controllers/api/talent/applications/index'))
router.get('/talent/applications/:ApplicationId', require('../controllers/api/talent/applications/show'))

//TALENT GAMES APPLICATION
router.post('/talent/games/:GameId/applications', require('../controllers/api/talent/game-applications/create'))
router.delete('/talent/games/:GameId/applications/:ApplicationId', require('../controllers/api/talent/game-applications/destroy'))

//PROFILE
router.put('/my/profile/:id', require('../controllers/api/profile/update'))

module.exports = router
