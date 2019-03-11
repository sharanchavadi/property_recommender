'use strict';

const properties = require('./properties');
const bookings = require('./bookings');
const recommendations = require('./recommendations');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
module.exports = function () {
  const app = this;
  const mongoConfig = app.get('mongo');

  mongoose.connect(mongoConfig.url, mongoConfig.credentials);
  mongoose.Promise = global.Promise;
  
  app.configure(properties);
  app.configure(bookings);
  app.configure(recommendations);
};
