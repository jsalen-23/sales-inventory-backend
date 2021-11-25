const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class OrderService {
  async create (data) {
    // const customer = await models.Customer.findOne({
    //   where: {
    //     id: data.customerId,
    //   },
    // })

    // const seller = await models.Seller.findOne({
    //   where: {
    //     id: data.sellerId,
    //   },
    // })

    const orderData = {
      customerId: data.customerId,
      sellerId: data.sellerId
    }

    const newOrder = await models.Order.create(orderData)

    return newOrder
  }

  async find () {
    const orders = await models.Order.findAll()

    return orders
  }

  async findOne (id) {
    const order = await models.Order.findByPk(id, {
      include: ['seller', 'customer', 'items']
    })

    if (!order) {
      throw boom.notFound('Order not found')
    }

    return order
  }

  async update (id, changes) {
    const order = await this.findOne(id)

    await order.update(changes)

    return { id }
  }

  async delete (id) {
    const order = await this.findOne(id)

    await order.destroy()

    return { id }
  }

  async addItem (item) {
    const newItem = await models.OrderProduct.create(item)

    return newItem
  }
}

module.exports = OrderService
