const Sequelize = require('sequelize');

const sequelize = new Sequelize('bayt', 'abreeza', null, {
  host: '127.0.0.1',
  dialect: 'postgres',
});

module.exports = sequelize;