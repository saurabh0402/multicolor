const foreground = require('./lib/foreground'),
	  background = require('./lib/background');

Object.keys(foreground).forEach((item, index) => {
	module.exports[item] = foreground[item];
});

Object.keys(background).forEach((item, index) => {
	module.exports[item] = background[item];
});