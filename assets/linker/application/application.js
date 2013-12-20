'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and
* creating namespaces and moduled for controllers, filters, services, and directives.
*/

var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);

angular.module('application', ['ngRoute', 'ngResource', 'application.filters', 'application.services', 'application.directives', 'application.constants', 'application.controllers']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // $locationProvider.html5Mode(true).hashPrefix('!')

    $routeProvider.
      when('/', {
        templateUrl: 'linker/templates/views/partials/home.ejs'
      }).
      when('/view1', {
        templateUrl: 'linker/templates/views/partials/partial1.ejs'
      }).
      when('/view2', {
        templateUrl: 'linker/templates/views/partials/partial2.ejs'
      }).
      otherwise({
        templateUrl: 'linker/templates/views/error404.ejs'
        // redirectTo: '/login'
      });

  }]).run(function($rootScope, $route){
    // Bind the `$routeChangeSuccess` event on the rootScope, so that we dont need to bind in individual controllers.
    $rootScope.$on('$routeChangeSuccess', function(currentRoute, previousRoute) {
      // This will set the custom property that we have defined while configuring the routes.
      if($route.current.action && $route.current.action.length > 0){
        $rootScope.action = $route.current.action ;
      }
    });
});