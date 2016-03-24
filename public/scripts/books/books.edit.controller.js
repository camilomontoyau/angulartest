angular.module('qualitApp').controller("booksEditCtrl",function ($state, $http, $cookies, $stateParams, booksService, authorsService) {
	var me = this;
	
	me.currentId = $stateParams.id;

	me.errorObject = {};

	me.getAuthors = function(){
		authorsService.getAll().then(
			function (response){
				me.authors = response;
			},
			function(error){
				alert('something went wrong');
				console.error(error);
			}
		);
	};

	me.getOne = function(bookId){
		booksService.getOne(bookId).then(
			function (response){
				me.bookObject = response;
				me.getAuthors();
				me.errorObject = {};
			},
			function(error){
				alert('something went wrong');
				console.error(error);
			}
		);
	};

	me.getOne(me.currentId);

	me.update = function(){
		booksService.update(me.currentId, me.bookObject).then(
			function (response){
				me.getOne(me.currentId);
				me.errorObject = {};
				alert("Book Has been updated!");
				$state.go("books");
			},
			function(error){
				switch(error.status){
					case 409:
						me.errorObject = error.data;
					break;

					default:
						alert('something went wrong');
					break;
				}
			}
		);
	}
});