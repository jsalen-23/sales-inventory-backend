const OrderService = require('../services/order.service')
const orderController = {}

const service = new OrderService()

orderController.createOrder = async (req, res, next) => {
  try {
    const { sub } = req.user
    const { seller } = req.body
    const body = {
      customerId: sub,
      sellerId: seller
    }

    const newOrder = await service.create(body)

    return res.status(201).json(newOrder)
  } catch (error) {
    next(error)
  }
}

orderController.getSingleOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const order = await service.findOne(id)

    return res.status(200).json(order)
  } catch (error) {
    next(error)
  }
}

orderController.updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body
    const order = await service.update(id, changes)

    return res.status(200).json(order)
  } catch (error) {
    next(error)
  }
}

orderController.deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const order = await service.delete(id)

    return res.status(200).json(order)
  } catch (error) {
    next(error)
  }
}

module.exports = orderController
