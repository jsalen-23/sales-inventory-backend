const productController = {}

productController.getProducts = (req, res, next) => {
  try {
    res.json({ message: 'Get Products' })
  } catch (error) {
    next(error)
  }
}

productController.createProduct = (req, res, next) => {
  try {
    res.json({ message: 'Product created' })
  } catch (error) {
    next(error)
  }
}

productController.getSingleProduct = (req, res, next) => {
  try {
    res.json({ message: 'Single Product' })
  } catch (error) {
    next(error)
  }
}

productController.updateProduct = (req, res, next) => {
  try {
    res.json({ message: 'Update Product' })
  } catch (error) {
    next(error)
  }
}

productController.deleteProduct = (req, res, next) => {
  try {
    res.json({ message: 'Delete Product' })
  } catch (error) {
    next(error)
  }
}

module.exports = productController
