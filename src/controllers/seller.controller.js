const sellerController = {}

sellerController.getSellers = (req, res, next) => {
  try {
    res.json({ message: 'Get Sellers' })
  } catch (error) {
    next(error)
  }
}

sellerController.createSeller = (req, res, next) => {
  try {
    res.json({ message: 'Seller created' })
  } catch (error) {
    next(error)
  }
}

sellerController.getSingleSeller = (req, res, next) => {
  try {
    res.json({ message: 'Single Seller' })
  } catch (error) {
    next(error)
  }
}

sellerController.updateSeller = (req, res, next) => {
  try {
    res.json({ message: 'Update Seller' })
  } catch (error) {
    next(error)
  }
}

sellerController.deleteSeller = (req, res, next) => {
  try {
    res.json({ message: 'Delete Seller' })
  } catch (error) {
    next(error)
  }
}

module.exports = sellerController
