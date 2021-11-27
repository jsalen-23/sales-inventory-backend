const Joi = require('joi')

const email = Joi.string().email()
const password = Joi.string().min(6).max(16)
const token = Joi.string()

const loginSchema = Joi.object({
  email: email.required(),
  password: password.required(),
})

const recoverySchema = Joi.object({
  email: email.required(),
})

const updatePasswordSchema = Joi.object({
  password: password.required(),
  token: token.required(),
})

module.exports = {
  loginSchema,
  recoverySchema,
  updatePasswordSchema,
}
