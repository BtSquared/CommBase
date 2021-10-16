const { User } = require('../models')
const middleware = require('../middleware/auth')

const Login = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email })
    if (
      user &&
      (await middleware.comparePassword(
        user[0].passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: user[0].id,
        displayName: user[0].displayName,
        email: user[0].email,
        servers: user[0].servers,
        roles: user[0].roles,
        bio: user[0].bio,
        profilePicture: user[0].profilePicture,
        banner: user[0].banner
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, displayName } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await new User({ email, passwordDigest, displayName })
    user.save()
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      user.passwordDigest = passwordDigest
      user.save()
      res.send({ status: 'Success', msg: 'Password Updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Invalid Credentials' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}

// const createUser = async (req, res) => {
//   const user = await new User({ ...req.body })
//   await user.save()
//   res.send({ user })
// }
