
var App = angular.module('App', ['ui.router', 'Devise', 'restangular']);

// lodash
App.constant('_', window._);
App.run(function($rootScope) {
  $rootScope._ = window._;
});
