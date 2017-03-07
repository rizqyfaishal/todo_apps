(function(todo_app){
	todo_app.directive('todoForm',['$templateCache', function($templateCache){
		return {
			restrict: 'E',
			scope: {
				input: '='
			},
			template: $templateCache.get('todo_form.html'),
			link: function(scope, elem, attr){

			}
		}
	}]);
})(app);