const ProductService = require('../services/product.service')
const productController = {}

const service = new ProductService()

productController.getProducts = async (req, res, next) => {
  try {
    const query = req.query
    const product = await service.find(query)

    return res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

productController.createProduct = async (req, res, next) => {
  try {
    const data = req.body
    const newProduct = await service.create(data)

    return res.status(201).json(newProduct)
  } catch (error) {
    next(error)
  }
}

productController.getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.findOne(id)

    return res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

productController.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)

    return res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

productController.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.delete(id)

    return res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

module.exports = productController
