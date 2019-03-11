'use strict';
const postprocess = require('./postprocess');

exports.before = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  };

exports.after = {
    all: [],
    find: [],
    get: [],
    create: [postprocess.recordEvents()],
    update: [],
    patch: [],
    remove: []
  };
