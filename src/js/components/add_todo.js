(function(todo_app){
	todo_app.directive('addTodo',['$templateCache',function($templateCache){
		console.log($templateCache.get('add_todo.html'));
		return {
			restrict: 'E',
			scope: {
				input: '='
			},
			controller: 'AddTodoController',
			template: $templateCache.get('add_todo.html')
		}
	}]);
})(app);
