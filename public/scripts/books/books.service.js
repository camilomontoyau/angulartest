angular.module('softwareAcademico')
	.service('colegiosService', function($http, $cookies) {
		var me = this;
		var prefix = '/api/v0/masterdata/colegios';
		

		me.getAll = function(){
			return $http.get(prefix+'?token='+$cookies.get('token')).then(function(response){
				return response.data;
			});
		}

		me.search = function(selBusquedaAvanzada,txtBusquedaAvanzada){
			return $http.get(prefix+'?'+selBusquedaAvanzada+'='+txtBusquedaAvanzada+'&token='+$cookies.get('token')).then(function(response){
				return response.data;
			});
		}

		me.getOne = function(colegioId){
			return $http.get(prefix+'/'+colegioId+'?token='+$cookies.get('token')).then(function(response){
				return response.data;
			});
		}

		me.create = function(colegio){
			return $http.post(prefix+'?token='+$cookies.get('token'),colegio).then(function(response){
				return response.data;
			});
		}

		me.update = function(colegioId, colegio){
			return $http.put(prefix+'/'+colegioId+'?token='+$cookies.get('token'),colegio).then(function(response){
				return response.data;
			});
		}

		me.delete = function(colegioId){
			return $http.delete(prefix+'/'+colegioId+'?token='+$cookies.get('token')).then(function(response){
				return response.data;
			});
		}
	});