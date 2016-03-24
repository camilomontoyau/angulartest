angular.module('qualitApp').controller("homeCtrl",function ($state, $http, $cookies) {
		var homeController = this;
		var prefix = '/api/v0';
		homeController.login = function(){
			$http.post(prefix+'/authenticate', homeController.credentials).success(function(data){
				//localStorage.token = data.token;
				//console.log(localStorage.token);
				$cookies.put('token', data.token);
				$state.go('estudiantes');
				return;
			});
		}
	});