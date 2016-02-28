var main = angular.module('app', ['ngRoute']).
config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider)
{
  $routeProvider.when('/page1',{templateUrl: 'partials/page1.html'});
  $routeProvider.when('/page2',{templateUrl: 'partials/page2.html'});
  $routeProvider.otherwise({redirectTo: '/home'});

  $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);
