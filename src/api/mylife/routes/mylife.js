'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mylifes',
      handler: 'mylife.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mylifes/:id',
      handler: 'mylife.findOne',
      config: {
        auth: false
      }
    }
  ]
};
