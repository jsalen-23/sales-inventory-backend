const Joi = require('joi')

const id = Joi.number().integer()
const customerId = Joi.number().integer()
const sellerId = Joi.number().integer()

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
  sellerId: sellerId.required(),
})

const getOrderSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createOrderSchema,
  getOrderSchema,
}
