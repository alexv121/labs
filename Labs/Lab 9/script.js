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

	var total = 0

	shoppingItems.forEach(function(item){
		console.log( "I need " + item.cost + " dollars for " + item.name);
		total += item.cost
		
	});

for(var i= 0; i<shoppingItems.length; i++){


	var listOnpage = document.createElement("div");
	listOnpage.innerHTML ="<div>"+shoppingItems[i].name+" "+shoppingItems[i].cost+" "+"<div>";
	document.body.appendChild(listOnpage);

	/*var costOnpage = document.createElement("div");
	costOnpage.innerHTML ="<div>"+shoppingItems[i].cost+"<div>";
	document.body.appendChild(costOnpage);*/
}
	var totalOnpage = document.createElement("div");
	totalOnpage.innerHTML="<div>"+"Total "+total+"</div>";
	document.body.appendChild(totalOnpage);


	var form = document.getElementById("shoppingItems");

	form.addEventListener("click", function(e) {
		e.preventDefult();
		var elements =this.elements;
		var shoppingItems= elements.shoppingItems.name;
		 var msg = "Wow, you've added" + shoppingItems;
		document.getElementById("main").textContent = msg;
		
	});




