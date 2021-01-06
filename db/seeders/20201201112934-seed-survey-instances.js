'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('survey_instances', [
      {
        userId: 1,
        surveyTemplateId: 1,
        fields: JSON.stringify({
          'radio': null,
          'textfield': null,
          'textarea': null,
          'dropdown': null,
          'checkbox': null,
        })
      },
      {
        userId: 1,
        surveyTemplateId: 2,
        fields: JSON.stringify({
          'radio': null,
          'textfield': null,
          'textarea': null,
          'dropdown': null,
          'checkbox': null,
        })
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('survey_instances', null, {})
  }
};
