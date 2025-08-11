export default {
  routes: [
    {
      method: 'GET',
      path: '/mylives',
      handler: 'mylife.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/mylives/:id',
      handler: 'mylife.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
