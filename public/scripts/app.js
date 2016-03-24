var myApp = angular.module('qualitApp', ['ngRoute','ui.router', 'ngCookies'])
.config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider){
	$httpProvider.defaults.withCredentials = true;
	$urlRouterProvider.otherwise("/");

	$stateProvider.state("home", {
		url: "/",
		templateUrl: "/scripts/home/home.html",
		controller: "homeCtrl",
		controllerAs: 'home'
	}).state("books", {
		url: "/books",
		templateUrl: "/scripts/books/books.html",
		controller: "booksCtrl",
		controllerAs:"book"
	}).state("books-create", {
		url: "/books/create",
		templateUrl: "/scripts/books/books.create.html",
		controller: "booksCreateCtrl",
		controllerAs:"bookCreate"
	}).state("books-edit", {
		url: "/books/{id}/edit",
		templateUrl: "/scripts/books/books.edit.html",
		controller: "booksEditCtrl",
		controllerAs:"bookEdit"
	}).state("authors", {
		url: "/authors",
		templateUrl: "/scripts/authors/authors.html",
		controller: "authorsCtrl",
		controllerAs:"author"
	});
});