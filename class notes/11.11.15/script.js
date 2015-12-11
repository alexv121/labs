var xhr = new XMLHttpRequest();
/*We begin by creating an instance of the XMLHttpReguest object and storing it in a variable.*/
var response = {};  
xhr.open('GET', 'http://www.reddit.com/r/aww/.json', true);
xhr.send(null);

xhr.onload = function() {
if (xhr.status === 200) {
// Stuff that uses the server's response
/*if page loaded well we can then do something*/
response = JSON.parse(xhr.response);
console.log(response.data.children[0]);
console.log(response);
}

response.data.children.forEach(function(post){
var title = document.createElement("h2")
var link = document.createElement("a")
var author = document.createElement("h4")
var thumbnail =document.createElement("img")
var hr =document.createElement("hr");
})

title.innerText = post.data.title;
author.innerText = post.data.author;
thumbnail.setAtribute("src", post.data.thumbnail);
link.setAtribute("href", post.data.url);

document.body.apprendChild(thumbnail);
	link.apprendChild(title);
	document.body.apprendChild(link);
	document.body.apprendChild(author);
	document.body.apprendChild(hr);

};



/*Json is for requests from a company that you will need  their jSon data thimpiment like add a new feature that is based off data on their page*/
/*data from internet and returning it to a website*/
/*number of requests will impact API usage*/
/*we take everything nomatter data type and make it into a string to make it easier to deal with*/
/*to reference this information you must get the json data code, copy and paste it into its own file withing your project to reference*/
/*then create something similar to line 10 to reference that json file and turn it into javascript*/
/*on the next line console.log/call the specific information you want returned*/
/*(response is the ref to entire json data(object).
 data is the first child of the main(object). 
 children is child of data [array value].
 data is under children
 author is under data )*/


