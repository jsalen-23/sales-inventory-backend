const categoryController = {}

categoryController.getCategories = (req, res, next) => {
  try {
    res.json({ message: 'Get Categories' })
  } catch (error) {
    next(error)
  }
}

categoryController.createCategory = (req, res, next) => {
  try {
    res.json({ message: 'Category created' })
  } catch (error) {
    next(error)
  }
}

categoryController.getSingleCategory = (req, res, next) => {
  try {
    res.json({ message: 'Single Category' })
  } catch (error) {
    next(error)
  }
}

categoryController.updateCategory = (req, res, next) => {
  try {
    res.json({ message: 'Update Category' })
  } catch (error) {
    next(error)
  }
}

categoryController.deleteCategory = (req, res, next) => {
  try {
    res.json({ message: 'Delete Category' })
  } catch (error) {
    next(error)
  }
}

module.exports = categoryController
