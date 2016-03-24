angular.module('softwareAcademico').controller("colegiosEditCtrl",function ($state, $http, $cookies, $stateParams, colegiosService, departamentosService, municipiosService) {
	var me = this;
	
	me.currentId = $stateParams.id;

	me.errorObject = {};

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

	me.dptos = function(){
		departamentosService.getAll().then(
			function (response){
				me.departamentos = response;
				me.mpios();
			},
			function(error){
				alert('something went wrong');
				console.error(error);
			}
		);	
	};

	me.getOne = function(colegioId){
		colegiosService.getOne(colegioId).then(
			function (response){
				me.colegioObject = response;
				me.dptos();
				me.errorObject = {};
			},
			function(error){
				alert('something went wrong');
				console.error(error);
			}
		);
	};

	me.getOne(me.currentId);

	me.create = function(){
		colegiosService.create(me.colegioObject).then(
			function (response){
				me.colegioObject = response;
				me.errorObject = {};
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

	me.update = function(){
		colegiosService.update(me.currentId, me.colegioObject).then(
			function (response){
				me.getOne(me.currentId);
				me.errorObject = {};
				alert("El colegio ha sido actualizado exitosamente!");
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