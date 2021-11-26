const Joi = require('joi')

const email = Joi.string().email()
const password = Joi.string().min(6).max(16)
const token = Joi.string()

const loginSchema = Joi.object({
  email: email.required(),
  password: password.required(),
})

module.exports = {
  loginSchema,
}
