const foreground = require('./lib/foreground'),
	  background = require('./lib/background'),
	  textNature = require('./lib/textNature');

Object.keys(foreground).forEach((item, index) => {
	module.exports[item] = foreground[item];
});

Object.keys(background).forEach((item, index) => {
	module.exports[item] = background[item];
});

Object.keys(textNature).forEach((item, index) => {
	module.exports[item] = textNature[item];
});