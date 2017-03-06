(function(todo_app){
	todo_app.directive('todoList', ['$templateCache', function($templateCache){
		return {
			restrict: 'E',
			scope: {
				data: '='
			},
			controller: 'TodoListController',
			template: $templateCache.get('todo_list.html'),
			link: function(scope, elem, attr){

			}
		}
	}]);
})(app);