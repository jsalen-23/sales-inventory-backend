const express = require('express')
// const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const {
  createOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/order.controller')
const { createOrderSchema, getOrderSchema } = require('../schemas/order.schema')

const router = express.Router()

router.get('/:id', validatorHandler(getOrderSchema, 'params'), getSingleOrder)

router.post('/', validatorHandler(createOrderSchema, 'body'), createOrder)

router.patch('/:id', validatorHandler(getOrderSchema, 'params'), updateOrder)

router.delete('/:id', validatorHandler(getOrderSchema, 'params'), deleteOrder)

module.exports = router
