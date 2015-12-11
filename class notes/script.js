var foodItems = [
"apples",
"peaches",
"grapes",
"3",
"4",
"5"
];

for(var i=0; i<foodItems.length; i++) {
	console.log(foodItems[i]);
};

for(var j=3; j<foodItems.length; j++){
	console.log(foodItems[j]);
};

console.log(foodItems[i],foodItems[j]);



var name = ["James", "Rebecca", "Evangeline", "Josephine"];
var relation = ["spouse","daughter"];

var myInfo = {
name: 'James',
age: 36,
married: true,
likes: ['Mythbusters', 'Jim Butcher', 'JavaScript'],
family: [
{
name: "Rebecca",
relation: "spouse"
},
{
name: "Evangeline",
relation: "daughter"
},
{
name: "Josephine",
relation: "daughter"
},
],
listFamilyMembers: function() {
	this.family.forEach(function(familyMember){console.log("I have a " + familyMember.relation + " named " + familyMember.name)

	});
}

 };

myInfo.listFamilyMembers();

var shoppingCart = {
	food: [
	{
	name: "apple",
	relation: "3"
},
{
	name: "oranges",
relation: "4"
},
{
	name:"peaches",
	relation:"5"
},
],

listItemsCost: function(){
	this.food.forEach(function(foodItemsCost){console.log("I need " + foodItemsCost.relation + " dollars for " + foodItemsCost.name)
});
