const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model')
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model')
const {
  ORDER_PRODUCT_TABLE,
  OrderProductSchema,
} = require('../models/order-product.model')
const { ORDER_TABLE } = require('../models/order.model')
const { PRODUCT_TABLE, ProductSchema } = require('../models/product.model')
const { SELLER_TABLE, SellerSchema } = require('../models/seller.model')
const { USER_TABLE, UserSchema } = require('../models/user.model')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema)
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(SELLER_TABLE, SellerSchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)

    await queryInterface.createTable(ORDER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      customerId: {
        field: 'customer_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: CUSTOMER_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      sellerId: {
        field: 'seller_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: SELLER_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    })

    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CUSTOMER_TABLE)
    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE)
    await queryInterface.dropTable(ORDER_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
    await queryInterface.dropTable(SELLER_TABLE)
    await queryInterface.dropTable(USER_TABLE)
  },
}
