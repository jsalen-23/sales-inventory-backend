const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class UserService {
  async find() {
    const users = await models.User.findAll({
      attributes: ['id', 'email', 'role'],
    })

    return users
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      attributes: ['id', 'email', 'role', 'recoveryToken'],
      include: ['seller'],
    })

    if (!user) {
      throw boom.notFound('User not found')
    }

    return user
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: {
        email,
      },
    })

    return user
  }

  async update(id, changes) {
    const user = await this.findOne(id)

    await user.update(changes)

    return { id }
  }

  async delete(id) {
    const user = await this.findOne(id)

    await user.destroy()

    return { id }
  }
}

module.exports = UserService
