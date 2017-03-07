(function(todo_app){
	todo_app.factory('TodoStorage', ['$window', function($window){
		var storage = {};
		storage.list = [];
		storage.add_todo = function(todo){
			var id = storage.list.length;
			todo.id = id;
			storage.list[storage.list.length] = todo; 
		};
		storage.remove_todo = function(id){
			var new_storage_list = [];
			var curr = 0;
			for(var i = 0;i<storage.list.length;i++){
				if(i != id){
					storage.list[i].id = curr;
					new_storage_list[curr++] = storage.list[i];
				}
			}
			storage.list = new_storage_list;
			return storage.list;
		};
		storage.get_todos_from_local = function(){
			var todos = JSON.parse($window.localStorage.getItem('todos'));
			storage.list = todos == undefined ? [] : todos;
		};
		storage.save_todos_to_local = function(){
			var todos_to_save = JSON.stringify(storage.list);
			$window.localStorage.setItem('todos', todos_to_save);
		};
		storage.update_todo = function(id, new_todo){
			storage.list[id] = new_todo;
		};
		storage.get_todos = function(){
			return storage.list;
		}

		return storage;
	}]);
})(app);