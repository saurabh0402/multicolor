var c = require('./app');

console.log(c.bRed(c.fbRed("Hello World")));
console.log(c.fBlack(c.bbRed("Hello world")));
console.log(c.bGreen(c.fBlack("Hello World")));
console.log(c.bbGreen(c.fBlack("Hello World")));
console.log(c.bBlue(c.fWhite("Hello World")));