const express = require('express')
const db = require("../../models")
const authenticateToken = require('../middlewares/authenticateToken')
const router = express.Router()

router.get('/', authenticateToken, async (req, res) => {
  try {
    const templates = await db.survey_instances.findOne({
      where: { userId: req.query.id }
    });
    res.send(templates);
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
});

module.exports = router
