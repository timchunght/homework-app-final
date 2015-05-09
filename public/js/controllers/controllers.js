var appControllers = angular.module('AppControllers', [])

appControllers.controller('MainController', ['$scope', 'HomeworksFactory', function ($scope, $homeworksFactory) {
	$homeworksFactory.getHomeworks().then(function(homeworks) {
		console.log(homeworks);

		$scope.homeworks = homeworks;
	});


}]);