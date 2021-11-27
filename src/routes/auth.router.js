const express = require('express')
const passport = require('passport')
// const passport = require('passport')
const router = express.Router()
const validatorHandler = require('../middlewares/validator.handler')
const {
  loginSchema,
  recoverySchema,
  updatePasswordSchema,
} = require('../schemas/auth.schema')
const {
  signIn,
  recoveryPassword,
  updatePassword,
} = require('../controllers/auth.controller')

router.post(
  '/login',
  validatorHandler(loginSchema, 'body'),
  passport.authenticate('local', { session: false }),
  signIn
)

router.post(
  '/forgot-password',
  validatorHandler(recoverySchema),
  recoveryPassword
)

router.post(
  '/update-password',
  validatorHandler(updatePasswordSchema),
  updatePassword
)

module.exports = router
