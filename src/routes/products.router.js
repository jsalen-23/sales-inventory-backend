const express = require('express')
// const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
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

router.post('/', validatorHandler(createProductSchema, 'body'), createProduct)

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  updateProduct
)

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  deleteProduct
)

module.exports = router
