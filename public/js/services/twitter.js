'use strict';

//Twitter service used for articles REST endpoint
var myTwitter = angular.module('venddo.twitter',[]);

myTwitter.factory('Twitter', ['$resource', function($resource) {
    return $resource('twitter/search/:text', 
    		{
     			text: '@text'
        	}, 
        	{
        		update: { method: 'PUT'}
        	}
        	);
}]);



myTwitter.factory('Socket', function ($rootScope) {
    var socket = io.connect('http://localhost:3001');
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});