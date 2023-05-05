const Router = require('express')
const authRouter = new Router()
const authController = require('../controller/auth.controller.js')



authRouter.post('/create', authController.createUser)



module.exports = authRouter