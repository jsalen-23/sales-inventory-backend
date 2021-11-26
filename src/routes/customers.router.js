const express = require('express')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const { checkRole } = require('../middlewares/auth.handler')
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

router.get('/', passport.authenticate('jwt', { session: false }), getCustomers)

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getCustomerSchema, 'params'),
  getSingleCustomer
)

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createCustomerSchema, 'body'),
  createCustomer
)

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  updateCustomer
)

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getCustomerSchema, 'params'),
  deleteCustomer
)

module.exports = router
