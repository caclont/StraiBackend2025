'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mylife.mylife', ({ strapi }) => ({
  async find(ctx) {
    // Récupération par défaut
    const { data, meta } = await super.find(ctx);

    // Exemple : personnalisation
    const modifiedData = data.map(item => ({
      ...item,
      customField: 'Hello from Strapi Cloud 🚀'
    }));

    return { data: modifiedData, meta };
  },

  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx);

    // Exemple : ajout d'un champ calculé
    if (data) {
      data.customField = 'Extra info here';
    }

    return { data, meta };
  }
}));
