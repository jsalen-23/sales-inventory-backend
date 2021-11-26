const express = require('express')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const { checkRole } = require('../middlewares/auth.handler')
const {
  getSellers,
  createSeller,
  getSingleSeller,
  updateSeller,
  deleteSeller
} = require('../controllers/seller.controller')
const {
  createSellerSchema,
  getSellerSchema,
  updateSellerSchema
} = require('../schemas/seller.schema')

const router = express.Router()

router.get('/', getSellers)

router.get('/:id', validatorHandler(getSellerSchema, 'params'), getSingleSeller)

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(createSellerSchema, 'body'),
  createSeller
)

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getSellerSchema, 'params'),
  validatorHandler(updateSellerSchema, 'body'),
  updateSeller
)

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole(['admin']),
  validatorHandler(getSellerSchema, 'params'),
  deleteSeller
)

module.exports = router
