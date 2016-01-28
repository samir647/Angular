
	var myApp=angular
		.module("myModule",[])
		.controller("myController", function($scope){
		var employees =[{name:"Samir",City:"Kathmadnu",Gender:"Male"},
						 {name:"Ram",	City:"Bhaktapur",Gender:"Male"},
						 {name:"Sita",City:"Pokhara",Gender:"Female"},
						 {name:"Hari",City:"Kathmadnu",Gender:"Male"},
						];
		
			$scope.employees=employees;
			
			
			
			
			});
		
	
	
