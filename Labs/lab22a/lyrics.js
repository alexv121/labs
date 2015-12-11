var myLyrics = ["bennie and the jets","she's got electric boots","you know I read it in a magazine"]

function randomLyric(){

	console.log( myLyrics[Math.floor(Math.random() * myLyrics.length)] );
}
module.exports.randomLyric = randomLyric;


