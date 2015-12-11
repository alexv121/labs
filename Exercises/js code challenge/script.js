
var outterwareAdvice="";
var tempF = 66;
var eventType = "formal" ;
if (tempF < 54) {
	outterwareAdvice +="It's cold wear a coat.";
}
else if (tempF >= 54 && tempF<= 70){ 
	outterwareAdvice +="It's chilly wear a jacket.";
}
else{
	outterwareAdvice += "It's hot wear you don't need outerware.";
} 

if (eventType === "formal"){
	outterwareAdvice +=" It's formal dress your best suit or dress.";
}
else if(evenType === "simi-formal"){
	outterwareAdvice += " It's semi-formal you can dress down you can do just slacks and button down shirt.";
}
else if (eventType === "black-tie"){ 
		outterwareAdvice += " It's black-tie be fancy.";
}
console.log(outterwareAdvice);

for(var i=0; <n; i++){
	//repeating strings
}



