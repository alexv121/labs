var shoppingItems = [{

	name: "apple",
	cost: 3
},
{
	name: "oranges",
	cost: 4
},
{
	name: "peches",
	cost: 5
},
];

var total = 0;

	shoppingItems.forEach(function(item){
		console.log( "I need " + item.cost + " dollars for " + item.name);
		total += item.cost
		
	});
	
	console.log("Total is " + total);

var shoppingItems = 
		[{

			name: "apple",
			cost: 3
		},
		{
			name: "oranges",
			cost: 4
		},
		{
			name: "peches",
			cost: 5
		}
		];

	var total = 0;

	shoppingItems.forEach(function(item){
		console.log( "I need " + item.cost + " dollars for " + item.name);
		total += item.cost
		
	});

	console.log(total);
	










