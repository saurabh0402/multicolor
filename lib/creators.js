/*
	In this universe, there are more than one creators!
*/

function createColor(code){
	return (str) => {
		return "\x1b[" + code + "m" + str + "\x1b[0m";
	}
}

function createColorString(str, code){
	return (createColor(code))(str);
}

function rainbow(str){
	let color = 30, ans = '';
	for(let i = 0; i < str.length; i++){
		if(str[i] == ' '){
			ans += str[i];
			continue;
		}
		ans += createColorString(str[i], color);
		++color;
		if(color > 97)
			color = 30;
		else if(color > 37 && color < 90)
			color = 90;
	}
	return ans;
}

module.exports.createColor = createColor;
module.exports.createColorString = createColorString;
module.exports.rainbow = rainbow