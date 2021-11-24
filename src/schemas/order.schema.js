const Joi = require('joi')

const id = Joi.number().integer()
const sellerId = Joi.number().integer()

const createOrderSchema = Joi.object({
  sellerId: sellerId.required()
})

const getOrderSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createOrderSchema,
  getOrderSchema
}
