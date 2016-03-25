/**
 * Created by camilo on 24/03/16.
 */
angular.module('qualitApp').controller("authorsCtrl",function ($state, $http, $cookies, authorsService) {
    var me = this;

    me.refresh = function(){
        authorsService.getAll().then(
            function (response){
                me.authors = response;
            },
            function(error){
                alert('something went wrong');
                console.error(error);
            }
        );
    };

    me.refresh();

    me.create = function(){
        $state.go("authors-create");
    };

    me.delete = function(authorId){
        var r = confirm("Do you really want to delete this record?");
        if(r===true){
            authorsService.delete(authorId).then(
                function (response){
                    alert("Record has been deleted!");
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