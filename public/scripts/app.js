var myApp = angular.module('qualitApp', ['ngRoute','ui.router', 'ngCookies'])
.config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider){
	$httpProvider.defaults.withCredentials = true;
	$urlRouterProvider.otherwise("/");

	$stateProvider.state("home", {
		url: "/",
		templateUrl: "/scripts/home/home.html",
		controller: "homeCtrl",
		controllerAs: 'home'
	})
	.state("books", {
		url: "/books",
		templateUrl: "/scripts/books/books.html",
		controller: "booksCtrl",
		controllerAs:"book"
	})
	.state("books-edit", {
		url: "/books/{id}/edit",
		templateUrl: "/scripts/books/books.edit.html",
		controller: "booksEditCtrl",
		controllerAs:"bookEdit"
	}).state("books-create", {
		url: "/books/create",
		templateUrl: "/scripts/books/books.create.html",
		controller: "booksCreateCtrl",
		controllerAs:"bookCreate"
	});
})
.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });
				event.preventDefault();
            }
        });
    };
});