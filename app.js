const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const { auth } = require('express-openid-connect')
require('dotenv').config()
const AppRouter = require('./routes/AppRouter')

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER
}

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(auth(config))

app.use('/api', AppRouter)

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})

app.listen(PORT, () => console.log(`Server Running On Port:`, PORT))
