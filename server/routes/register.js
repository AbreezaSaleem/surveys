const express = require('express')
const bcrypt = require('bcrypt')
const db = require("../../models")
const generateAccessToken = require('../middlewares/generateAccessToken')
const router = express.Router()

router.post('/', generateAccessToken, async (req, res) => {
  try {
    const { email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = { email: email, password: hashedPassword }
    await db.users.create({ ...user });
    const { token } = res.locals
    res.json(token);
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
});

module.exports = router
