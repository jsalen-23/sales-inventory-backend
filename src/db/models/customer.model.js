const { Model, DataTypes, Sequelize } = require('sequelize')

const CUSTOMER_TABLE = 'customers'

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Customer extends Model {
  static associate (models) {
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  CUSTOMER_TABLE,
  CustomerSchema,
  Customer
}
