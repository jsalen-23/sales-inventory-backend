const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { config } = require('../config')
const UserService = require('../services/user.service')

const service = new UserService()

class AuthService {
  async logIn(email, password) {
    const user = await service.findByEmail(email)

    if (!user) {
      throw boom.unauthorized()
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw boom.unauthorized()
    }

    delete user.dataValues.password

    return user
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    }

    const token = jwt.sign(payload, config.jwtSecret)

    return { user, token }
  }
}

module.exports = AuthService
