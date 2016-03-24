angular.module('qualitApp').controller("booksCtrl",function ($state, $http, $cookies, booksService) {
		var me = this;
		
		me.refresh = function(){
			booksService.getAll().then(
				function (response){
					me.books = response;
				},
				function(error){
					alert('something went wrong');
					console.error(error);
				}
			);	
		};

		me.refresh();

		me.create = function(){
			$state.go("books-create");
		};

		me.delete = function(bookId){
			var r = confirm("Do you really want to delete this record?");
			if(r===true){
				booksService.delete(bookId).then(
					function (response){
						alert("Record has been deleted!");
						me.refresh();
					},
					function(error){
						alert('something went wrong');
						console.error(error);
					}
				);	
			}
		};
	});