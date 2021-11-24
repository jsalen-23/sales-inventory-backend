const CategoryService = require('../services/category.service')
const categoryController = {}

const service = new CategoryService()

categoryController.getCategories = async (req, res, next) => {
  try {
    const categories = await service.find()

    return res.status(200).json(categories)
  } catch (error) {
    next(error)
  }
}

categoryController.createCategory = async (req, res, next) => {
  try {
    const body = req.body
    const newCategory = await service.create(body)

    return res.status(201).json(newCategory)
  } catch (error) {
    next(error)
  }
}

categoryController.getSingleCategory = async (req, res, next) => {
  try {
    const { id } = req.params
    const category = await service.findOne(id)

    return res.status(200).json(category)
  } catch (error) {
    next(error)
  }
}

categoryController.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body
    const updatedCategory = await service.update(id, body)

    return res.status(200).json(updatedCategory)
  } catch (error) {
    next(error)
  }
}

categoryController.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedCategory = await service.delete(id)

    return res.status(200).json(deletedCategory)
  } catch (error) {
    next(error)
  }
}

module.exports = categoryController
