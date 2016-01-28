
	var myApp=angular
		.module("myModule",[])
		.controller("myController", function($scope){
			var employees=[{firstName:"samir",lasteName:"Shrestha",gender:"male",salary:5000},
						  {firstName:"Ram",lasteName:"Shrestha",gender:"male",salary:6000},
						  {firstName:"Sita",lasteName:"Giri",gender:"female",salary:5500},
						  {firstName:"Ramesh",lasteName:"Nakarmi",gender:"male",salary:5000}];					
			$scope.employees=employees;
			});
		
	
	
