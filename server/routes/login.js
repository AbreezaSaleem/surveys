const express = require('express')
const bcrypt = require('bcrypt')
const db = require("../../models")
const generateAccessToken = require('../middlewares/generateAccessToken')
const router = express.Router()

// https://github.com/WebDevSimplified/Nodejs-User-Authentication/blob/master/server.js

router.post('/', generateAccessToken, async (req, res) => {
  const { token } = res.locals
  const user = await db.users.findOne({
    where: {
      email: req.body.email
    }
  })
  if (user == null) {
    return res.status(400).json({ message: 'Cannot Find User' })
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      return res.json(token);
    } else {
      return res.status(400).json({ message: 'Incorrect Password' })
    }
  } catch {
    return res.sendStatus(500)
  }
});

module.exports = router
