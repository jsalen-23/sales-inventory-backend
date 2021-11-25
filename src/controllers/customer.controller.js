const CustomerService = require('../services/customer.service')
const customerController = {}

const service = new CustomerService()

customerController.getCustomers = async (req, res, next) => {
  try {
    const customers = await service.find()

    return res.status(200).json(customers)
  } catch (error) {
    next(error)
  }
}

customerController.createCustomer = async (req, res, next) => {
  try {
    const body = req.body
    const newCustomer = await service.create(body)

    return res.status(201).json(newCustomer)
  } catch (error) {
    next(error)
  }
}

customerController.getSingleCustomer = async (req, res, next) => {
  try {
    const { id } = req.params
    const customer = await service.findOne(id)

    return res.status(200).json(customer)
  } catch (error) {
    next(error)
  }
}

customerController.updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body
    const updatedCustomer = await service.update(id, changes)

    return res.status(200).json(updatedCustomer)
  } catch (error) {
    next(error)
  }
}

customerController.deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedCustomer = await service.delete(id)

    return res.status(200).json(deletedCustomer)
  } catch (error) {
    next(error)
  }
}

module.exports = customerController
