var app = angular.module("myModule");

app.controller("controllerView2", function($scope, serviceEX){
	$scope.serviceEX.get();

});