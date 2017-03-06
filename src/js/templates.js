angular.module('templates',[]).run(['$templateCache', function($templateCache) {$templateCache.put('add_todo.html','<div class="add-todo">\r\n\t<div class="row">\r\n\t\t<form>\r\n\t\t\t<div class="input-label">\r\n\t\t\t\t<div class="col-lg-12">\r\n\t\t\t\t\t<input type="text" name="add_todo" placeholder="Add Todo here" \r\n\t\t\t\t\t\t\tclass="form-control input-title" \r\n\t\t\t\t\t\t\tng-focus="show_detail=true"\r\n\t\t\t\t\t\t\tng-model="input.title">\r\n\t\t\t\t\t<i class="fa fa-plus"></i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="input-detail" ng-class="{ \'show_detail\': show_detail }">\r\n\t\t\t\t<div class="col-lg-12">\r\n\t\t\t\t\t<label>Description</label>\r\n\t\t\t\t\t<textarea class="form-control" \r\n\t\t\t\t\t\t\t\t\tplaceholder="Add Description Here" \r\n\t\t\t\t\t\t\t\t\trows="5"\r\n\t\t\t\t\t\t\t\t\tng-model="input.description" \r\n\t\t\t\t\t\t\t\t\tplaceholder=""></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-lg-12">\r\n\t\t\t\t\t<button class="btn btn-success" ng-click="save(input);">Save</button>\r\n\t\t\t\t\t<button class="btn btn-danger" ng-click="close();">Close</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>');
$templateCache.put('app.html','<div class="container">\r\n\t<div class="row">\r\n\t\t<div class="col-lg-8 col-lg-push-2 col-md-10 col-md-push-1 col-sm-12 col-xs-12">\r\n\t\t\t<h1 class="text-center" ng-click="click();">{{ title }}</h1>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-lg-12">\r\n\t\t\t\t\t<div class="todo-app">\r\n\t\t\t\t\t\t<add-todo input="todo"></add-todo>\r\n\t\t\t\t\t\t<todo-list data="todos"></todo-list>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n');
$templateCache.put('todo.html','<div class="todo">\r\n\t<div class="row">\r\n\t\t<div class="col-lg-1">\r\n\t\t\t<div class="check">\r\n\t\t\t\t<input type="checkbox" name="todo_completed" ng-model="todo.completed">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-lg-7">{{ todo.title }}</div>\r\n\t\t<div class="col-lg-4">\r\n\t\t\t<div class="todo-control">\r\n\t\t\t\t<button class="btn btn-primary"><i class="fa fa-pencil">&nbsp;</i>Edit</button>\r\n\t\t\t\t<button class="btn btn-danger"><i class="fa fa-trash">&nbsp;</i>Delete</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>');
$templateCache.put('todo_list.html','<div class="row">\r\n\t<div class="col-lg-12">\r\n\t\t<div class="todo-list">\r\n\t\t\t<div ng-repeat="todo in data">\r\n\t\t\t\t\t<todo todo="todo"></todo>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>');}]);