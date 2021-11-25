const SellerService = require('../services/seller.service')
const sellerController = {}

const service = new SellerService()

sellerController.getSellers = async (req, res, next) => {
  try {
    const sellers = await service.find()

    return res.status(200).json(sellers)
  } catch (error) {
    next(error)
  }
}

sellerController.createSeller = async (req, res, next) => {
  try {
    const seller = req.body
    const newSeller = await service.create(seller)

    return res.status(201).json(newSeller)
  } catch (error) {
    next(error)
  }
}

sellerController.getSingleSeller = async (req, res, next) => {
  try {
    const { id } = req.params
    const seller = await service.findOne(id)

    return res.status(200).json(seller)
  } catch (error) {
    next(error)
  }
}

sellerController.updateSeller = async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body
    const updatedSeller = await service.update(id, changes)

    return res.status(200).json(updatedSeller)
  } catch (error) {
    next(error)
  }
}

sellerController.deleteSeller = async (req, res, next) => {
  try {
    const { id } = req.params
    const seller = await service.delete(id)

    return res.status(200).json(seller)
  } catch (error) {
    next(error)
  }
}

module.exports = sellerController
