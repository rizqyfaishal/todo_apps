(function(todo_app){
	todo_app.controller('AppController', ['$scope','TodoStorage', '$interval','$rootScope', function($scope, TodoStorage, $interval){
		var initialize_todos = function(){
			TodoStorage.get_todos_from_local();
		};

		$scope.todo = {
			title: 'New Todo',
			completed: false,
			priority: 'low',
			start_date: new Date(),
			due_date: new Date()
		};
		
		initialize_todos();
		$scope.todos = TodoStorage.get_todos();
		$scope.restart_todo = function(){
			$scope.todo = {
				title: 'New Todo',
				completed: false,
				priority: 'low',
				start_date: new Date(),
				due_date: new Date()
			};
		}

		$interval(function(){
				TodoStorage.save_todos_to_local();
				$scope.timestamp_save = +new Date();
		},2000);

		
	}]);
})(app);