/**
 * Created by camilo on 24/03/16.
 */
angular.module('qualitApp')
    .controller("authorsCreateCtrl",function ($state, $http, $cookies, $stateParams, authorsService) {
    var me = this;

    me.errorObject = {};

    me.create = function(){
        authorsService.create(me.authorObject).then(
            function (response){
                me.authorObject = response;
                me.errorObject = {};
                alert("Author Has been created!");
                $state.go("authors");
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