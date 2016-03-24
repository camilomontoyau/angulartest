angular.module('qualitApp').controller("booksCreateCtrl",function ($state, $http, $cookies, $stateParams, booksService, authorsService) {
	var me = this;
	
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

	me.getAuthors();

	me.create = function(){
		booksService.create(me.bookObject).then(
			function (response){
				me.bookObject = response;
				me.errorObject = {};
				alert("Book Has been created!");
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