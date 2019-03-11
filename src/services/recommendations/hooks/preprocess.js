'use strict';

var g = require('ger');

let knex = g.knex( {client: 'pg', connection: "postgres://apple:123@localhost/mosaic"});
let esm = new g.PsqlESM({knex : knex});
let ger = new g.GER(esm);

exports.getRecommendations = function(options){
	return function(hook){
		const eventsArray = hook.service.find();
		
  }
}