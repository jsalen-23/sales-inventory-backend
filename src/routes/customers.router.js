const express = require('express')
// const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const {
  getCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customer.controller')
const {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema
} = require('../schemas/customer.schema')

const router = express.Router()

router.get('/', getCustomers)

router.get(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  getSingleCustomer
)

router.post('/', validatorHandler(createCustomerSchema, 'body'), createCustomer)

router.patch(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  updateCustomer
)

router.delete(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  deleteCustomer
)

module.exports = router
