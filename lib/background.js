const creator = require('./creators'),
	  colors = require('./colorCode');

module.exports = {
	bBlack: creator.createColor(colors.back.black),
	bRed: creator.createColor(colors.back.red),
	bGreen: creator.createColor(colors.back.green),
	bYellow: creator.createColor(colors.back.yellow),
	bBlue: creator.createColor(colors.back.blue),
	bMagenta: creator.createColor(colors.back.magenta),
	bCyan: creator.createColor(colors.back.cyan),
	bWhite: creator.createColor(colors.back.white),
	bbBlack: creator.createColor(colors.backBright.black),
	bbRed: creator.createColor(colors.backBright.red),
	bbGreen: creator.createColor(colors.backBright.green),
	bbYellow: creator.createColor(colors.backBright.yellow),
	bbBlue: creator.createColor(colors.backBright.blue),
	bbMagenta: creator.createColor(colors.backBright.magenta),
	bbCyan: creator.createColor(colors.backBright.cyan),
	bbWhite: creator.createColor(colors.backBright.white),
	bRainbow: creator.createRainbow(colors.back, colors.backBright),
	bRainbowBright: creator.createRainbow(colors.backBright),
	bRainbowDark: creator.createRainbow(colors.back)
}