const express = require('express')
// const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const {
  getSellers,
  createSeller,
  getSingleSeller,
  updateSeller,
  deleteSeller,
} = require('../controllers/seller.controller')
const {
  createSellerSchema,
  getSellerSchema,
  updateSellerSchema,
} = require('../schemas/seller.schema')

const router = express.Router()

router.get('/', getSellers)

router.get('/:id', validatorHandler(getSellerSchema, 'params'), getSingleSeller)

router.post('/', validatorHandler(createSellerSchema, 'body'), createSeller)

router.patch(
  '/:id',
  validatorHandler(getSellerSchema, 'params'),
  validatorHandler(updateSellerSchema, 'body'),
  updateSeller
)

router.delete('/:id', validatorHandler(getSellerSchema, 'params'), deleteSeller)

module.exports = router
