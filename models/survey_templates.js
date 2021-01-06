
module.exports = (sequelize, DataTypes) => {
  const SurveyTemplates = sequelize.define('survey_templates', {
    fields: DataTypes.JSONB,
  }, {});
  SurveyTemplates.associate = function (models) {
    SurveyTemplates.hasMany(models.survey_instances)
  };
  return SurveyTemplates;
};
