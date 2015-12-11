/*server*/

var http = require('http');
var express = require('express');
/*var lyrics= require("./lyrics");*/
http.createServer(function(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(myLyrics[]);

/*var hello = "hi"
var farewell = "bye"

function greet(){
	return hello;
}
function bye(){
	return farewell;
}
module.exports = greet;*/


response.end(); 
}).listen(8888);



/*function say(word) {
console.log(word);
}
function execute(someFunction, someArgument) {
someFunction(someArgument);
}
execute(say, 'hello');

function execute(someFunction, value) {
someFunction(value);    
}
execute(function(word){
console.log(word)*/

