const boom = require('@hapi/boom')

function checkRole (roles) {
  return (req, res, next) => {
    const { role } = req.user

    if (roles.includes(role)) {
      next()
    } else {
      next(boom.unauthorized())
    }
  }
}

module.exports = { checkRole }
