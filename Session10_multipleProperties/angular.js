
	var myApp=angular
		.module("myModule",[])
		.filter
		.controller("myController", function($scope){
		var employees =[{name:"Samir",City:"Kathmadnu",Gender:"Male"},
						 {name:"Ram",	City:"Bhaktapur",Gender:"Male"},
						 {name:"Sita",City:"Pokhara",Gender:"Female"},
						 {name:"Hari",City:"Kathmadnu",Gender:"Male"},
						];
			$scope.employees=employees;
			$scope.search = function(item){
				if($scope.SearchText== undefined){
					return true;
					}
				else{
					if((item.name.toLowerCase().indexof($scope.searchText.toLowerCase())!= -1)||
					(item.City.toLowerCase().indexof($scope.searchText.toLowerCase())!=-1))
					
						{
						return true;
						}
					}
					return false;
				}
			
			});
		
	
	
