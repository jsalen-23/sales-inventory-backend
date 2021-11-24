const { Sequelize } = require('sequelize')
const { config } = require('../config')
const setupModels = require('../db/models')

const options = {
  dialect: 'postgres',
  logging: !config.isProduction
}

if (config.isProduction) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options)

setupModels(sequelize)

module.exports = sequelize
