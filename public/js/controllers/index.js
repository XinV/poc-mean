'use strict';

var myController = angular.module('mean.system');


myController.controller('IndexController', ['$scope', 'Global','Twitter','Socket',function ($scope, Global,Twitter,Socket) {
    	$scope.global = Global;
    	// Llamada a Twitter API REST
    	$scope.search = function(){
    		$scope.search.running = true;
            $scope.search.tweetstream = [];
    		Twitter.save({},{"text":$scope.search.text},function(tweets){
    			$scope.search.tweets = tweets;
    			$scope.search.running = false;
    		});

    	}
        $scope.search.tweetstream = [];


        Socket.on('newTweet', function(tweet) {
            console.log(tweet);
            $scope.search.tweetstream.unshift(tweet);
        });
	}
]);