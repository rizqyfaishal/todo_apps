(function(todo_app){
	todo_app.directive('app',['$templateCache',function($templateCache){
		console.log($templateCache.get('app.html'));
		return {
			restrict: 'E',
			scope: {
				title: '@'
			},
			controller: 'AppController',
			template: $templateCache.get('app.html'),
			link: function(scope, elem, attr){
				
			}
		}
	}]);
})(app);
