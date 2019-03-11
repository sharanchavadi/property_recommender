'use strict';

// Initializes the `properties` service on path `/properties`
const service = require('feathers-mongoose');
const properties = require('./properties-model');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: properties
  };

  // Initialize our service with any options it requires
  app.use('/properties', service(options));

  // Get our initialized service so that we can register hooks
  const propertiesService = app.service('properties');

  propertiesService.before(hooks.before);

  propertiesService.after(hooks.after);

};
