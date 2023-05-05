const express = require('express')
const authRouter = require('./router/auth.js')
const db = require('./db.js')



const app = express()
const PORT = 5000

app.use(express.json())
app.use('/auth', authRouter)

const StartServer = async () => {
	try {
		app.listen(PORT, () => console.log(`Сервер запущен по порту : ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}
StartServer()

