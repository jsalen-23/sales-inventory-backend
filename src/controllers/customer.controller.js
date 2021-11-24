const customerController = {}

customerController.getCustomers = (req, res, next) => {
  try {
    res.json({ message: 'Get Customers' })
  } catch (error) {
    next(error)
  }
}

customerController.createCustomer = (req, res, next) => {
  try {
    res.json({ message: 'Customer created' })
  } catch (error) {
    next(error)
  }
}

customerController.getSingleCustomer = (req, res, next) => {
  try {
    res.json({ message: 'Single Customer' })
  } catch (error) {
    next(error)
  }
}

customerController.updateCustomer = (req, res, next) => {
  try {
    res.json({ message: 'Update Customer' })
  } catch (error) {
    next(error)
  }
}

customerController.deleteCustomer = (req, res, next) => {
  try {
    res.json({ message: 'Delete Customer' })
  } catch (error) {
    next(error)
  }
}

module.exports = customerController
