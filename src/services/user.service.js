const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class UserService {
  async create (data) {
    const newUser = await models.User.create(data)

    return newUser
  }

  async find () {
    const users = await models.User.findAll()

    return users
  }

  async findOne (id) {
    const user = await models.User.findByPk(id, {
      include: ['sellers']
    })

    if (!user) {
      throw boom.notFound('User not found')
    }

    return user
  }

  async update (id, changes) {
    const user = await this.findOne(id)

    await user.update(changes)

    return { id }
  }

  async delete (id) {
    const user = await this.findOne(id)

    await user.destroy()

    return { id }
  }
}

module.exports = UserService
