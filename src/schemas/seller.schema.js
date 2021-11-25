const Joi = require('joi')
const { createUserSchema, updateUserSchema } = require('./user.schema')

const id = Joi.number().integer()
const userId = Joi.number().integer()
const name = Joi.string().min(2)
const lastName = Joi.string().min(2)

const createSellerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  userId,
  user: createUserSchema
})

const updateSellerSchema = Joi.object({
  name,
  lastName,
  user: updateUserSchema
})

const getSellerSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createSellerSchema,
  getSellerSchema,
  updateSellerSchema
}
