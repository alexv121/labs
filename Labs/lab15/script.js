var Items=
	[{
		name: "apple",
		price: 3
	},
	{
		name: "oranges",
		price: 4
	},
	{
		name: "bananas",
		price: 5
	}];
var total=0

Items.forEach(function(item){
	total += item.price;
});