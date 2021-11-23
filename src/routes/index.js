const express = require('express')

function routerAPI(app) {
  const router = express.Router()
  app.use('/api/v1', router)
}

module.exports = routerAPI
