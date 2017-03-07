(function(todo_app){
	todo_app.controller('TodoController',['$scope', 'TodoStorage', function($scope,TodoStorage){

		$scope.save = function(todo){
			var id = todo.id;
			var new_todo = angular.copy(todo);
			TodoStorage.update_todo(id,new_todo);
			$scope.edit_status = false;
		};

		$scope.close = function(){
			$scope.edit_status = false;
		}

	}]);
})(app);