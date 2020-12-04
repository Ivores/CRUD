const Router = require('express')
const authController = require('../controller/auth.controller')
const router = new Router()

router.post('/auth', authController.tokenAuth)


module.exports = router