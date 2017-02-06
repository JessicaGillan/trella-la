
App.config(
  ['$stateProvider', '$urlRouterProvider',

    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('index');

      $stateProvider
      .state('dashboard', {
        url: '/',
        abstract: true,
        views: {
          'navBar@': {
            controller: 'DashboardCtrl',
            templateUrl: 'templates/shared/navBar.html'
          },
          'subHeader@': {
            controller: 'IndexCtrl',
            templateUrl: 'templates/dashboard/index.subheader.html'
          }
        },
        resolve: {
          currentUser: ['UserService', function(UserService) {
            return UserService.currentUser();
          }]
        }
      })
      .state('dashboard.index', {
        url: 'index',
        views: {
          'main@': {
            template: '<h4 class="text-center">No Board Selected</h4>'
          }
        }
      })
      .state('dashboard.show', {
        url: 'show/:id',
        views: {
          'main@': {
            controller: 'ShowCtrl',
            templateUrl: 'templates/dashboard/show.main.html'
          }
        },
        resolve: {
          currentUser: ['UserService', function(UserService) {
            return UserService.currentUser();
          }]
        }
      });
    }

]);
