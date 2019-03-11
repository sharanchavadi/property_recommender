'use strict';

// Initializes the `bookings` service on path `/bookings`
const service = require('feathers-mongoose');
const bookings = require('./bookings-model');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: bookings
  };

  // Initialize our service with any options it requires
  app.use('/bookings', service(options));

  // Get our initialized service so that we can register hooks
  const bookingsService = app.service('bookings');

  bookingsService.before(hooks.before);

  bookingsService.after(hooks.after);
};
