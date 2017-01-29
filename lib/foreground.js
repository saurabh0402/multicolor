const creator = require('./creators'),
	  colors = require('./colorCode');

module.exports = {
	fBlack: creator.createColor(colors.fore.black),
	fRed: creator.createColor(colors.fore.red),
	fGreen: creator.createColor(colors.fore.green),
	fYellow: creator.createColor(colors.fore.yellow),
	fBlue: creator.createColor(colors.fore.blue),
	fMagenta: creator.createColor(colors.fore.magenta),
	fCyan: creator.createColor(colors.fore.cyan),
	fWhite: creator.createColor(colors.fore.white),
	fbBlack: creator.createColor(colors.foreBright.black),
	fbRed: creator.createColor(colors.foreBright.red),
	fbGreen: creator.createColor(colors.foreBright.green),
	fbYellow: creator.createColor(colors.foreBright.yellow),
	fbBlue: creator.createColor(colors.foreBright.blue),
	fbMagenta: creator.createColor(colors.foreBright.magenta),
	fbCyan: creator.createColor(colors.foreBright.cyan),
	fbWhite: creator.createColor(colors.foreBright.white),
	rainbow: creator.createRainbow(colors.fore, colors.foreBright),
	rainbowDark: creator.createRainbow(colors.fore),
	rainbowBright: creator.createRainbow(colors.foreBright)
}