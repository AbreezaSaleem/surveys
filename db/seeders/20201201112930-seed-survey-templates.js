'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('survey_templates', [
      {
        fields: JSON.stringify({
          'radio': '',
          'textfield': '',
          'textarea': '',
          'dropdown': '',
          'checkbox': '',
        })
      },
      {
        fields: JSON.stringify({
          'radio': '',
          'textfield': '',
          'checkbox': '',
        })
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('survey_templates', null, {})
  }
};
