
module.exports = (sequelize, DataTypes) => {
  const SurveyInstances = sequelize.define('survey_instances', {
    userId: DataTypes.INTEGER,
    surveyTemplateId: DataTypes.INTEGER,
    fields: DataTypes.JSONB,
  }, {});
  SurveyInstances.associate = function (models) {
    SurveyInstances.belongsTo(models.survey_templates, { foreignKey: 'surveyTemplateId' })
    SurveyInstances.belongsTo(models.users, { foreignKey: 'userId' })
  };
  return SurveyInstances;
};

  