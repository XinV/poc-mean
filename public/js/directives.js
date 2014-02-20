'use strict';

var myDirectives = angular.module('venddo.directives',[]);


myDirectives.directive('hello',function(){
	return{
		restrict: 'E',
		template: '<div>Hi there</div>',
		replace:true
	};
});
