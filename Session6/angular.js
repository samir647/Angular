
	var myApp=angular
		.module("myModule",[])
		.controller("myController", function($scope){
			var countries=[{name:"london",cities:[{name:"london"},{name:"Bakeim"},{name:"Rkansas"}]},
							{name:"Kathmandu",cities:[{name:"Thankot"},{name:"Satungal"},{name:"Naikap"}]},
							{name:"Deli",cities:[{name:"rhan"},{name:"kthy"},{name:"ssssss"}]}];
			
			$scope.countries=countries;
			});
		
	
	
