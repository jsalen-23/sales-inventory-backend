const express = require('express')

const categoriesRouter = require('./categories.router')
const productsRouter = require('./products.router')

function routerAPI(app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
}

module.exports = routerAPI
