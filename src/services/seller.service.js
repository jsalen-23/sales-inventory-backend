const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { models } = require('../libs/sequelize')

class SellerService {
  async create (data) {
    const hash = await bcrypt.hash(data.user.password, 10)
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    }

    const newSeller = await models.Seller.create(newData, {
      include: ['user']
    })

    delete newSeller.dataValues.user.dataValues.password

    return newSeller
  }

  async find () {
    const sellers = await models.Seller.findAll()

    return sellers
  }

  async findOne (id) {
    const seller = await models.Seller.findByPk(id, {
      include: ['users']
    })

    if (!seller) {
      throw boom.notFound('Seller not found')
    }

    return seller
  }

  async update (id, changes) {
    const seller = await this.findOne(id)

    await seller.update(changes)

    return { id }
  }

  async delete (id) {
    const seller = await this.findOne(id)

    await seller.destroy()

    return { id }
  }
}

module.exports = SellerService
