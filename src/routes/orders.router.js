const express = require('express')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const { checkRole } = require('../middlewares/auth.handler')
const {
  createOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
  addItem
} = require('../controllers/order.controller')
const {
  createOrderSchema,
  getOrderSchema,
  addItemSchema
} = require('../schemas/order.schema')

const router = express.Router()

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getOrderSchema, 'params'),
  getSingleOrder
)

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createOrderSchema, 'body'),
  createOrder
)

router.post(
  '/add-item',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(addItemSchema, 'body'),
  addItem
)

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getOrderSchema, 'params'),
  updateOrder
)

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getOrderSchema, 'params'),
  deleteOrder
)

module.exports = router
