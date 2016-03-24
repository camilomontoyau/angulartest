angular.module('qualitApp').controller("colegiosCtrl",function ($state, $http, $cookies, colegiosService, departamentosService) {
		var me = this;
		
		me.refresh = function(){
			colegiosService.getAll().then(
				function (response){
					me.colegios = response;
				},
				function(error){
					alert('something went wrong');
					console.error(error);
				}
			);	
		};

		me.refresh();

		me.create = function(){
			$state.go("colegios-create");
		}

		me.search = function(){
			if(
				typeof me.selBusquedaAvanzada!='undefined' 
				&& typeof me.txtBusquedaAvanzada!='undefined' 
				&& me.selBusquedaAvanzada.length > 0 
				&& me.txtBusquedaAvanzada.length > 0 
			)
			{
				if(!isFinite(me.txtBusquedaAvanzada)){
					me.txtBusquedaAvanzada = me.txtBusquedaAvanzada.toUpperCase();
				}

				colegiosService.search(me.selBusquedaAvanzada,me.txtBusquedaAvanzada).then(
					function (response){
						me.colegios = response;
					},
					function(error){
						alert('something went wrong');
						console.error(error);
					}
				);
			}
			else{
				alert("Por favor seleccione el campo de busqueda y escriba el texto a buscar");
			}
		};

		me.delete = function(colegioId){
			var r = confirm("Realmente desea eliminar el colegio? No podrá deshacer esta acción!");
			if(r===true){
				colegiosService.delete(colegioId).then(
					function (response){
						alert("Colegio eliminado!");
						//me.colegios = response;
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