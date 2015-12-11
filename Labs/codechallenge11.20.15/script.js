
	/*function reverse(str){
		var reversed = "";

		for	(var i = str.length; i>0; i--){
			reverse += str.charAt();
		}

		console.log(reverse);
	};
	reverse("James");
	/*"james".split("e")
	x="james".split("")
	x.join("");
	x.reverse()
	
	console.log "james".split("").reverse().join("");
	function isPalindro (str){

		var reverse = "";
		function reverse(str){

			for (var i = str.length; i >= 0; i--){
				reverse += str.charAt(i);
			}
		}
		if (reverse("") === string.length){
			console.log ("True");
		} else { 
			console.log ("False");
		}
	};
isPalindro("James");
isPalindro("Noon");*/
function reverse(str){
  return str.split("").reverse().join("");
}
function isPalindrome (str){                  str = str.split("").join("").toLowerCase();
		return str === reverse (str);
	}
console.log(isPalindrome("James"));
console.log(isPalindrome("Noon"));
console.log(isPalindrome("Race car"));