const express = require('express')
// const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const {
  getCategories,
  createCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller')
const {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} = require('../schemas/category.schema')

const router = express.Router()

router.get('/', getCategories)

router.post('/', validatorHandler(createCategorySchema, 'body'), createCategory)

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  getSingleCategory
)

router.patch(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategory
)

router.delete(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  deleteCategory
)

module.exports = router
