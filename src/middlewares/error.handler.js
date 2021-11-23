const { ValidationError } = require('sequelize')

function logErrors(error, req, res, next) {
  console.error(error)

  next(error)
}

function queryErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    const { fields, name, errors } = error
    return res.status(409).json({
      fields,
      message: name,
      errors: errors[0].message,
    })
  }
  next(error)
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const {
      output: { statusCode, payload },
    } = error
    return res.status(statusCode).json(payload)
  }
  next(error)
}

function errorHandler(error, req, res, next) {
  return res.status(500).json({
    message: error.message,
    stack: error.stack,
  })
}

module.exports = {
  logErrors,
  queryErrorHandler,
  errorHandler,
  boomErrorHandler,
}
