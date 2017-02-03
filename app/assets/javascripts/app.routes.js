
App.config(
  ['$stateProvider', '$urlRouterProvider',

    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/dashboard');

      $stateProvider.state('dashboard', {
        url: '/dashboard',
        views: {
          '@': {
            controller: 'DashboardCtrl',
            templateUrl: 'templates/dashboard/show.html'
          }
        },
        resolve: {
          currentUser: function(UserService) {
            return UserService.currentUser();
          }
        }
      });

    }

]);

