	var myApp=angular
		.module("myModule",[])
		.controller("myController", function($scope){
		var employees =[
						{name:"Ben", dateofBirth: new Date("November 23,1989"), gender:"Male", salary:5000},
						{name:"Ram", dateofBirth: new Date("December 25, 1989"), gender:"Male", salary:6000},
						{name:"Sita", dateofBirth: new Date("November 23,1988"), gender:"Female", salary:5500},
						{name:"Gita", dateofBirth: new Date("December 25, 1999"), gender:"Female", salary:3000}
						];
			$scope.employees=employees;
			$scope.rowlimit=3;
			});
		
	
		
	
	
