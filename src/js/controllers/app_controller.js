(function(todo_app){
	todo_app.controller('AppController', ['$scope','TodoStorage', function($scope, TodoStorage){
		var initialize_todos = function(){
			TodoStorage.get_todos_from_local();
		};

		$scope.todo = {};
		
		initialize_todos();
		$scope.todos = TodoStorage.get_todos();
		$scope.restart_todo = function(){
			$scope.todo = {};
		}

		$scope.save = function(todo){
			var new_todo = angular.copy(todo);
			TodoStorage.add_todo(new_todo);
			$scope.show_detail = false;
			$scope.todo = {};
		};
	}]);
})(app);