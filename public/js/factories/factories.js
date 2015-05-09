var appFactories = angular.module('AppFactories', [])

appFactories.factory('HomeworksFactory', ['$http', function($http) {
  return { 
    getHomeworks: function () {

       
        return $http.get('/homeworks').then(function (response) {
            return response.data;
        });

    }
  }
}]);

