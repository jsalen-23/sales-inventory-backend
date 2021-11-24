const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3)
const lastName = Joi.string().min(3)
const email = Joi.string().email()
const password = Joi.string().min(6).max(16)

const createSellerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required()
})

const updateSellerSchema = Joi.object({
  name,
  lastName,
  email,
  password
})

const getSellerSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createSellerSchema,
  getSellerSchema,
  updateSellerSchema
}
