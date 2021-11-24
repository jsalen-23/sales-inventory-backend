const { Model, DataTypes, Sequelize } = require('sequelize')
const { CUSTOMER_TABLE } = require('./customer.model')
const { SELLER_TABLE } = require('./seller.model')

const ORDER_TABLE = 'orders'

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    field: 'customer_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  sellerId: {
    field: 'seller_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SELLER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  total: {
    type: DataTypes.VIRTUAL,
    get () {
      if (this.items && this.items.length > 0) {
        return this.items.reduce((total, item) => {
          return total + item.price * item.OrderProduct.amount
        }, 0)
      }

      return 0
    }
  }
}

class Order extends Model {
  static associate (models) {
    this.belongsTo(models.Customer, {
      as: 'customer'
    })
    this.belongsTo(models.Seller, {
      as: 'seller'
    })
    this.belongsToMany(models.OrderProduct, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = {
  Order,
  OrderSchema,
  ORDER_TABLE
}
