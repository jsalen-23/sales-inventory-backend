const express = require('express')
const passport = require('passport')
// const passport = require('passport')
const router = express.Router()
const validatorHandler = require('../middlewares/validator.handler')
const { loginSchema } = require('../schemas/auth.schema')
const { signIn } = require('../controllers/auth.controller')

router.post(
  '/login',
  validatorHandler(loginSchema, 'body'),
  passport.authenticate('local', { session: false }),
  signIn
)

module.exports = router
