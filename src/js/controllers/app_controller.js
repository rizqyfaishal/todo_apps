(function(todo_app){
	todo_app.controller('AppController', ['$scope','TodoStorage', '$interval', function($scope, TodoStorage, $interval){
		var initialize_todos = function(){
			TodoStorage.get_todos_from_local();
		};

		$scope.todo = {
			title: 'New Todo',
			completed: false
		};
		
		initialize_todos();
		$scope.todos = TodoStorage.get_todos();
		$scope.restart_todo = function(){
			$scope.todo = {};
		}

		$interval(function(){
				TodoStorage.save_todos_to_local();
				$scope.timestamp_save = new Date();
		},2000);

		
	}]);
})(app);