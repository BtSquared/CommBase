const { User } = require('../models')
const middleware = require('../middleware/auth')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        _id: user.id,
        displayName: user.displayName,
        email: user.email,
        servers: user.servers,
        roles: user.roles,
        bio: user.bio,
        profilePicture: user.profilePicture,
        banner: user.banner
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
  const user = await User.findById(res.locals.payload._id)
  const arrayCompare = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].toString() !== arr2[i]) {
        return false
      }
    }
    return true
  }
  if (arrayCompare(user.servers, res.locals.payload.servers)) {
    const { payload } = res.locals
    res.send({ user: payload, new: false })
  } else {
    let payload = {
      _id: user.id,
      displayName: user.displayName,
      email: user.email,
      servers: user.servers,
      roles: user.roles,
      bio: user.bio,
      profilePicture: user.profilePicture,
      banner: user.banner
    }
    let token = middleware.createToken(payload)
    return res.send({ user: { payload, token }, new: true })
  }
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
