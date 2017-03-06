(function(todo_app){
	todo_app.directive('todo',['$templateCache', function($templateCache){
		return {
			restrict: 'E',
			scope: {
				todo: '='
			},
			template: $templateCache.get('todo.html'),
			controller: 'TodoController',
			link: function(scope, elem, attr){

			}
		}
	}]);
})(app);