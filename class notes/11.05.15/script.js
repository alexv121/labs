console.log("Multiply:");
function mult(x,y){
	for(var i=x; i<=y; i++){
	
		for(var j=x; j<=y; j++){
			console.log(i + "x" + j + "=" + i*j);
		}
	}
}
mult(1,5);

function getArea(length, width){
  return length*width;
  console.log("you entered:Length:" + length + ",Width"+ width);
}
getArea(10,6);

var meaningOfLife = 0;
function doStuff(){
	console.log(meaningOfLife);
	if(true){
		var meaningOfLife
	}
}