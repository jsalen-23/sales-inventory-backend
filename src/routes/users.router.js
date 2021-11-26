const express = require('express')
// const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller')
const { getUserSchema, updateUserSchema } = require('../schemas/user.schema')

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', validatorHandler(getUserSchema, 'params'), getSingleUser)

router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  updateUser
)

router.delete('/:id', validatorHandler(getUserSchema, 'params'), deleteUser)

module.exports = router