var appControllers = angular.module('AppControllers', [])

appControllers.controller('MainController', ['$scope', 'HomeworksFactory', function ($scope, $homeworksFactory) {
	$homeworksFactory.getHomeworks().then(function(homeworks) {
		console.log(homeworks);

		$scope.homeworks = homeworks;
	});

	$scope.showHomework = function (homework) {
		console.log("clicked");
		homework.clicked = !homework.clicked;

	}


}]);