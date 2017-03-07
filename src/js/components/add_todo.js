(function(todo_app){
	todo_app.directive('addTodo',['$templateCache',function($templateCache){
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
