const creator = require('./creators');

module.exports = {
	bold: creator.createColor(1),
	underline: creator.createColor(4),
	inverse: creator.createColor(7)
}