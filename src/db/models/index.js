const { Category, CategorySchema } = require('./category.model')
const { Product, ProductSchema } = require('./product.model')

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize))

  Category.associate(sequelize.models)
  Product.associate(sequelize.models)
}

module.exports = setupModels
