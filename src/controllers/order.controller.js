const orderController = {}

orderController.createOrder = (req, res, next) => {
  try {
    res.json({ message: 'Order created' })
  } catch (error) {
    next(error)
  }
}

orderController.getSingleOrder = (req, res, next) => {
  try {
    res.json({ message: 'Single Order' })
  } catch (error) {
    next(error)
  }
}

module.exports = orderController
