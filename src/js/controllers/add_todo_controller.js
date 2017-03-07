(function(todo_app){
	todo_app.controller('AddTodoController',['$scope','TodoStorage', function($scope, TodoStorage){
		$scope.show_detail = false;
		$scope.close = function(){
			$scope.show_detail = false;
		};

		$scope.reset = function(){
			$scope.$parent.restart_todo();
		};


		$scope.save = function(todo){
			var new_todo = angular.copy(todo);
			TodoStorage.add_todo(new_todo);
			$scope.show_detail = false;
			$scope.reset();
		};

		$scope.formatDate = function(date){
			return +(new Date(date));
		}
	}]);	
})(app);