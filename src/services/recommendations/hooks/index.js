'use strict';
const preprocess = require('./preprocess');

exports.before = {
    all: [],
    find: [],
    get: [preprocess.getRecommendations()],
    create: [],
    update: [],
    patch: [],
    remove: []
};

exports.after = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
