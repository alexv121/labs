/*var Animal = function (species) {
this.species = species;
this.greeting = function () {
console.log("hi, I am a " + this.species);
}
this.eat = function () {
console.log('nom nom nom');
};
};
var koala = new Animal('koala');
var bunny = new Animal('bunny');
koala.eat(); // > nom nom nom
bunny.greeting(); // > hi, I am a bunny
//> you use this because you want all of this type to experience this ex koala and bunny//
//the more objects you have he more memory storage you take up; a prototype can help you condense down so one copy all can refrence to//
function (species.furry) {
this.species = species;
this.furry = furry;

Animal.prototype.eat()= function(){
	//a subclass will inherit propertirs of its //

}*/

var Shape  = function (type, side1, side2, side3){
	this.side1= 
	/*this.numberSides = if
		(numberSides === 3){
			getType = Triangle
	};*/
	this.numberSides=numberSides;
};

Shape.prototype.getType = function (){
	numberSides(3);
	console.log ("I am a "+this.getType+"and I have "+numberSides+".")
}

var Triangle = function(side1, side2, side3){
	if(numberSides===3){
	Shape.call(this);
	this.getType = "Triangle";
	console.log (getType);
}
}
	
var t = new Triangle(1, 2, 3);
	t.constructor
	shape.isPrototypeOf(t)
	t.getPerimeter()
	t.getType()



}
// parent class 

factory pattern

(function shape(type, a, b, c){
	var shapePerimet 
	return {printPerimete: getPerimeter,
		type:type}
}
var t = shape("Triangle");
console.log(t);
t.getPerimeter();
})();

