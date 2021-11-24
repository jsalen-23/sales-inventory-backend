const { Sequelize } = require('sequelize')
const { config } = require('../config')

const options = {
  dialect: 'postgres',
  logging: config.isProduction ? false : true,
}

if (config.isProduction) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  }
}

const sequelize = new Sequelize(config.dbUrl, options)

module.exports = sequelize
