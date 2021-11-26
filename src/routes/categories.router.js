const express = require('express')
const passport = require('passport')
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
const { checkRole } = require('../middlewares/auth.handler')

const router = express.Router()

router.get('/', getCategories)

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  getSingleCategory
)

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(createCategorySchema, 'body'),
  createCategory
)

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategory
)

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getCategorySchema, 'params'),
  deleteCategory
)

module.exports = router
