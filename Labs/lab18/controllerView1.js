
var app = angular.module("serviceModule", function(){
	app.controller("controllerView1", function($scope, serviceEX){
	$scope.store = function(name,dish){
		console.log(name,dish);
		serviceEX.save(name,dish);
	}

	})
});