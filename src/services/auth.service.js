const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodeMailer = require('nodemailer')
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

  async sendMail(mailBody) {
    const transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: config.mailAddress,
        pass: config.mailPassword,
      },
    })

    await transporter.sendMail(mailBody)

    return { message: 'Email sent' }
  }

  async sendRecovery(email) {
    const user = await service.findByEmail(email)

    if (!user) {
      throw boom.unauthorized()
    }

    const payload = {
      sub: user.id,
    }

    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '10m' })
    const link = `https://www.frontend.dev/recovery-password/?token=${token}`

    await service.update(user.id, {
      recoveryToken: token,
    })

    const mailBody = {
      from: `"Salen APP" ${config.mailAddress}`,
      to: `${user.email}`,
      subject: '[Salen APP] Recovery Password Confirmation',
      html: `<p>Someone told us you lost your password. If it is not true then ignore this mail. Otherewise, if you want to reset your password click this link: ${link}</p>`,
    }

    const response = await this.sendMail(mailBody)

    return response
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret)
      const user = await service.findOne(payload.sub)

      if (user.recoveryToken !== token) {
        throw boom.unauthorized()
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10)

      await service.update(user.id, {
        recoveryToken: null,
        password: hashedPassword,
      })

      return { message: 'Password has been updated' }
    } catch (error) {
      throw boom.unauthorized()
    }
  }
}

module.exports = AuthService
