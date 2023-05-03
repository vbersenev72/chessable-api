const Router = require('express')
const authRouter = new Router()
const authController = require('../controller/auth.controller.js')



authRouter.get('/create', authController.createUser)



module.exports = authRouter