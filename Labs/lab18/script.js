var app = angular.module('serviceModule', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/',
		{
		controller: 'contollerView1',
		templateUrl: '/view1.html'
		})
		.when('/view2',
		{
		controller: 'controllerView2',
		templateUrl: '/view2.html'
		})
		.otherwise({ redirectTo: '/' });
		});

/*var app= angular.module("serviceModule", []);

app.controller("servCtrl", function($scope, serviceEx){
	$scope.store = function(info){
		serviceEx.save(info)//function on service to save
	}
})
	var storedInfo*/