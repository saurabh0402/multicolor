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

/*
	Create a rainbow even if there's no rain
*/
function createRainbow(){
	let args = Array.prototype.slice.call(arguments);
	let allColorsInRainbow = [];

	args.forEach((item) => {
		Object.keys(item).forEach(key => {
			allColorsInRainbow.push(item[key]);
		});
	});

	return (str) => {
		let colorCount = 0,
			ans = '';

		for(let i = 0; i < str.length; i++){
			if(!str[i].trim()){
				ans += str[i];
				continue;
			}

			ans += createColor(allColorsInRainbow[colorCount])(str[i]);

			++colorCount;
			if(colorCount >= allColorsInRainbow.length)
				colorCount = 0;
		}

		return ans;
	}
}


module.exports.createColor = createColor;
module.exports.createColorString = createColorString;
module.exports.createRainbow = createRainbow