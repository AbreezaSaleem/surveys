const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 5000;

// get config vars
dotenv.config()

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));

app.listen(port, () => console.log(`Listening on port ${port} 🚀`));