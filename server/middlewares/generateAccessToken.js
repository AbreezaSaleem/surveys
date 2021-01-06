const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  try {
    // expires after half and hour (1800 seconds = 30 minutes)
    const { email } = req.body
    const token = jwt.sign({email: email}, process.env.TOKEN_SECRET)
    res.locals.token = token
    next()
  } catch(error) {
    console.log(error)
    return
  }
}