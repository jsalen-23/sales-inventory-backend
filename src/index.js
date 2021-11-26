const process = require('process')
const express = require('express')
const passport = require('passport')
const cors = require('cors')
const routerAPI = require('./routes')
const {
  logErrors,
  queryErrorHandler,
  boomErrorHandler,
  errorHandler
} = require('./middlewares/error.handler')

const app = express()
const PORT = process.env.PORT || 3005

// Middlewares
app.use(express.json())
app.use(passport.initialize())

const whiteList = ['http://localhost:5500']
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Access Denied.'))
    }
  }
}
app.use(cors(corsOptions))
require('./utils/auth')

// Routes
routerAPI(app)

// Error Middlewares
app.use(logErrors)
app.use(queryErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

// Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
