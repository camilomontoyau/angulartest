/**
 * Created by camilo on 24/03/16.
 */
angular.module('qualitApp').controller("authorsEditCtrl",function ($state, $http, $cookies, $stateParams, authorsService) {
    var me = this;

    me.currentId = $stateParams.id;

    me.errorObject = {};

    me.getOne = function(authorId){
        authorsService.getOne(authorId).then(
            function (response){
                me.authorObject = response;
                me.errorObject = {};
            },
            function(error){
                alert('something went wrong');
                console.error(error);
            }
        );
    };

    me.getOne(me.currentId);

    me.update = function(){
        authorsService.update(me.currentId, me.authorObject).then(
            function (response){
                me.getOne(me.currentId);
                me.errorObject = {};
                alert("Author Has been updated!");
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