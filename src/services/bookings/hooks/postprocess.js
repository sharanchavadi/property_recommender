'use strict';

exports.recordEvents = function(options){
	return function(hook){
		const namespace = 'bookings';
		const person = hook.result.userName;
		const action = 'booked';
		const thing = hook.result.propertyName;
		return hook.app.service(`/recommendations`).create(namespace, person, action, thing).then(() => hook)
	}
}