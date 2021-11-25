const Joi = require('joi')

const id = Joi.number().integer()
const sellerId = Joi.number().integer()
const orderId = Joi.number().integer()
const productId = Joi.number().integer()
const amount = Joi.number().integer()

const createOrderSchema = Joi.object({
  sellerId: sellerId.required()
})

const getOrderSchema = Joi.object({
  id: id.required()
})

const addItemSchema = Joi.object({
  orderId,
  productId,
  amount
})

module.exports = {
  createOrderSchema,
  getOrderSchema,
  addItemSchema
}
