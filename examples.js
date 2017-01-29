var c = require('./app');

console.log(c.bRed(c.fbRed("Hello World")));
console.log(c.fBlack(c.bbRed("Hello world")));
console.log(c.bGreen(c.fBlack("Hello World")));
console.log(c.bbGreen(c.fBlack("Hello World")));
console.log(c.bBlue(c.fWhite("Hello World")));
console.log(c.rainbow("Hello world is not that a big sentence"));
console.log(c.rainbowBright("Hello world is not that a big sentence"));
console.log(c.rainbowDark("Hello world is not that a big sentence"));
console.log(c.bRainbow("Hello world is not that a big sentence"));
console.log(c.bRainbowBright("Hello world is not that a big sentence"));
console.log(c.bRainbowDark("Hello world is not that a big sentence"));
console.log("Hello " + c.bold(c.fBlue("World")));
console.log("Hello " + c.underline(c.fCyan("World")));
console.log("Hello " + c.bold(c.fbCyan(c.inverse(" World "))));