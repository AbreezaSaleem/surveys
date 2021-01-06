const express = require('express')
const db = require("../../models")
const authenticateToken = require('../middlewares/authenticateToken')
const router = express.Router()

router.get('/', authenticateToken, async (req, res) => {
  try {
    const user = await db.users.findOne({
      where: { email: req.query.email }
    });
    res.json(user);
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
});

module.exports = router
