'use strict';

// Initializes the `recommendations` service on path `/recommendations`
const service = require('feathers-sequelize');
const recommendations = require('./recommendations-model');
const hooks = require('./hooks');

module.exports = function (app) {
  const app = this;

  const options = {
    Model: recommendations
  };

  // Initialize our service with any options it requires
  app.use('/recommendations', service(options));

  // Get our initialized service so that we can register hooks
  const recommendationsService = app.service('recommendations');

  recommenationsService.before(hooks.before);

  recommendationsService.after(hooks.after);

};
