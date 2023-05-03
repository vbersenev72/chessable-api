class AuthController {
	async createUser(req, res) {
		try {
			res.json('work')
		} catch (error) {
			res.json({message: 'Ошибка создания пользователя', error})
		}
	}
}


module.exports = new AuthController()