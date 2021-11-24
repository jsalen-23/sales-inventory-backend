const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3)
const price = Joi.number().integer()
const sellingPrice = Joi.number().integer()
const stock = Joi.number().integer()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  sellingPrice: sellingPrice.required(),
  stock: stock.required(),
})

const updateProductSchema = Joi.object({
  name,
  price,
  sellingPrice,
  stock,
})

const getProductSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
}
