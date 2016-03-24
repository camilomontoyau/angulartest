/**
 * Created by camilo on 24/03/16.
 */
angular.module('qualitApp')
    .service('authorsService', function($http) {
        var me = this;
        var prefix = '/api/v0/authors';


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

        me.getOne = function(authorId){
            return $http.get(prefix+'/'+authorId).then(function(response){
                return response.data;
            });
        }

        me.create = function(author){
            return $http.post(prefix,author).then(function(response){
                return response.data;
            });
        }

        me.update = function(authorId, author){
            return $http.put(prefix+'/'+authorId,author).then(function(response){
                return response.data;
            });
        }

        me.delete = function(authorId){
            return $http.delete(prefix+'/'+authorId).then(function(response){
                return response.data;
            });
        }
    });
