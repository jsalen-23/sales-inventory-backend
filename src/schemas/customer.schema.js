const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3)
const lastName = Joi.string().min(3)
const phone = Joi.string()

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone
})

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone
})

const getCustomerSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema
}
