const db = require('../db')
const bcrypt = require('bcryptjs')
const { secret } = require('../config')

class AuthController {
	async createUser(req, res) {
		try {

			const {username, password} = req.body
		

			if (username.length > 20 || username.length < 3) {
				res.status(400).json({message: "Error create user. Имя пользователя должно содержать 3-20 символов"})
				return
			}

			if (password.length > 20 || password.length < 8) {
				res.status(400).json({message: "Error create user. Пароль пользователя должен содержать 8-20 символов"})
				return
			}

			const hashPassword = bcrypt.hashSync(password, 7); // хэшируем пароль

			try {
				const candidate = await db.all('SELECT * FROM person WHERE username = ?;', [username], (err, rows) => {
					if (err) return res.status(400).json({message: 'Ошибка создания пользователя', err})
					console.log(err)
					if (rows) return res.status(400).json({message: "Имя пользователя должно быть уникальным"})
				})
				

				await db.run('INSERT INTO person(username, password) VALUES(?, ?)', [username, hashPassword])
				res.json({message: 'User successfull created'})
				

			} catch (error) {
				res.status(400).json({message: 'Ошибка создания пользователя', error})
			}


		} catch (error) {
			res.status(400).json({message: 'Ошибка создания пользователя', error})
		}
	}
}


module.exports = new AuthController()