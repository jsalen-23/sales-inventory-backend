const AuthService = require('../services/auth.service')
const authController = {}

const service = new AuthService()

authController.signIn = (req, res, next) => {
  try {
    const user = req.user

    return res.status(200).json(service.signToken(user))
  } catch (error) {
    next(error)
  }
}

module.exports = authController
