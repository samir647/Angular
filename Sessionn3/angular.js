
	var myApp=angular
		.module("myModule",[])
		.controller("myController", function($scope){
			var employee={
				firstName:"samir",
				lastName:"Shrestha",
				gender:"male",
				imgDir:"samir.jpg",
				height:"100px",
				width:"100px"
				
				};									
			$scope.employee=employee;
			}
			
			);
		
	
	
