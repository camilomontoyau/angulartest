angular.module('qualitApp').controller("colegiosCreateCtrl",function ($state, $http, $cookies, $stateParams, colegiosService, departamentosService, municipiosService) {
	var me = this;
	
	me.errorObject = {};

	me.dptos = function(){
		departamentosService.getAll().then(
			function (response){
				me.departamentos = response;
			},
			function(error){
				alert('something went wrong');
				console.error(error);
			}
		);	
	};

	me.dptos();

	me.mpios = function(){
		municipiosService.search("codigoDepartamento", me.colegioObject.codigoDepartamento).then(
			function (response){
				me.municipios = response;
			},
			function(error){
				alert('something went wrong');
				console.error(error);
			}
		);	
	};

	



	me.create = function(){
		colegiosService.create(me.colegioObject).then(
			function (response){
				me.colegioObject = response;
				me.errorObject = {};
				alert("El Colegio ha sido creado exitosamente!");
				$state.go("colegios");
			},
			function(error){
				switch(error.status){
					case 409:
						me.errorObject = error.data.error.errors;
					break;

					default:
						alert('something went wrong');
						console.error(error);
					break;
				}
			}
		);
	}


});