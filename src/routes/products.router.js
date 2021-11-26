const express = require('express')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const { checkRole } = require('../middlewares/auth.handler')
const {
  getProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/product.controller')
const {
  createProductSchema,
  getProductSchema,
  updateProductSchema
} = require('../schemas/product.schema')

const router = express.Router()

router.get('/', getProducts)

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  getSingleProduct
)

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(createProductSchema, 'body'),
  createProduct
)

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  updateProduct
)

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getProductSchema, 'params'),
  deleteProduct
)

module.exports = router
