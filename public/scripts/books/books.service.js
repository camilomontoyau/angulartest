angular.module('qualitApp')
	.service('booksService', function($http) {
		var me = this;
		var prefix = '/api/v0/books';
		

		me.getAll = function(){
			return $http.get(prefix).then(function(response){
				return response.data;
			});
		}

		me.search = function(selBusquedaAvanzada,txtBusquedaAvanzada){
			return $http.get(prefix+'?'+selBusquedaAvanzada+'='+txtBusquedaAvanzada).then(function(response){
				return response.data;
			});
		}

		me.getOne = function(bookId){
			return $http.get(prefix+'/'+bookId).then(function(response){
				return response.data;
			});
		}

		me.create = function(book){
			return $http.post(prefix,book).then(function(response){
				return response.data;
			});
		}

		me.update = function(bookId, book){
			return $http.put(prefix+'/'+bookId,book).then(function(response){
				return response.data;
			});
		}

		me.delete = function(bookId){
			return $http.delete(prefix+'/'+bookId).then(function(response){
				return response.data;
			});
		}
	});