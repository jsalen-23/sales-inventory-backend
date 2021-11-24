const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3)

const createCategorySchema = Joi.object({
  name: name.required(),
})

const updateCategorySchema = Joi.object({
  name,
})

const getCategorySchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
}
