
	var myApp=angular
		.module("myModule",[])
		.controller("myController", function($scope){
		var technology =[{name:"ASP",like:0,dislike:0},
						 {name:"JSP",like:0,dislike:0},
						 {name:"ANGULAR",like:0,dislike:0},
						 {name:"PHP",like:0,dislike:0}
						];
		
			$scope.technologies=technology;
			
			$scope.incrementLikes= function(technology){
				technology.like++;
				}
			$scope.incrementDislikes= function(technology){
				technology.dislike++;
				}	
			
			
			
			});
		
	
	
