const { Model, DataTypes, Sequelize } = require('sequelize')
const { CATEGORY_TABLE } = require('./category.model')

const PRODUCT_TABLE = 'products'

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  sellingPrice: {
    allowNull: false,
    field: 'selling_price',
    type: DataTypes.INTEGER,
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: 'category' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Products',
      timestamps: false,
    }
  }
}

module.exports = {
  Product,
  ProductSchema,
  PRODUCT_TABLE,
}
