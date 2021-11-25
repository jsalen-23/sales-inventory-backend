const UserService = require('../services/user.service')
const userController = {}

const service = new UserService()

userController.getUsers = async (req, res, next) => {
  try {
    const users = await service.find()

    return res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

userController.createUser = async (req, res, next) => {
  try {
    const user = req.body
    const newUser = await service.create(user)

    return res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}

userController.getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await service.findOne(id)

    return res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

userController.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body
    const updatedUser = await service.update(id, changes)

    return res.status(200).json(updatedUser)
  } catch (error) {
    next(error)
  }
}

userController.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await service.delete(id)

    return res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = userController
