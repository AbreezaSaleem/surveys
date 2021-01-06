
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.survey_instances)
  };
  return User;
};
