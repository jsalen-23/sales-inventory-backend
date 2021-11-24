const express = require('express')

const categoriesRouter = require('./categories.router')

function routerAPI (app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/categories', categoriesRouter)
}

module.exports = routerAPI
