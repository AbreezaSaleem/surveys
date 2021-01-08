
const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
      if (error) return res.sendStatus(403)
      req.user = user
      next()
    })
  } catch(error) {
    console.log(error)
    return res.sendStatus(500)
  }
}