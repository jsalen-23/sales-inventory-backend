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

authController.recoveryPassword = async (req, res, next) => {
  try {
    const { email } = req.body
    const response = await service.sendRecovery(email)

    return res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

authController.updatePassword = async (req, res, next) => {
  try {
    const { token, password } = req.body
    const response = await service.updatePassword(token, password)

    return res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = authController
