(function(todo_app){
	todo_app.controller('TodoListController', ['$scope','TodoStorage', function($scope,TodoStorage){
		$scope.delete = function(id){
			id = parseInt(id);
			var confirm_val = confirm('Are you sure delete it?');
			if(confirm_val){
				$scope.$parent.todos = TodoStorage.remove_todo(id);
			}
		}
	}]);
})(app);