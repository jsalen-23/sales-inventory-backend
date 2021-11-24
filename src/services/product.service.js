const boom = require('@hapi/boom')
const { Op } = require('sequelize')
const { models } = require('../libs/sequelize')

class ProductService {
  async create (data) {
    const newProduct = await models.Product.create(data)

    return newProduct
  }

  async find ({ limit = 10, offset = 0, price, price_min, price_max }) {
    const options = {
      include: ['category'],
      where: {},
      limit,
      offset
    }

    if (price) {
      options.where.price = price
    }

    if (price_min && price_max) {
      options.where.price = {
        [Op.between]: [price_min, price_max]
      }
    }

    const products = await models.Product.findAll(options)

    return products
  }

  async findOne (id) {
    const product = await models.Product.findByPk(id, {
      include: ['category']
    })

    if (!product) {
      throw boom.notFound('product not found')
    }

    return product
  }

  async update (id, changes) {
    const product = await this.findOne(id)

    await product.update(changes)

    return { id }
  }

  async delete (id) {
    const product = await this.findOne(id)

    await product.destroy()

    return { id }
  }
}

module.exports = ProductService
