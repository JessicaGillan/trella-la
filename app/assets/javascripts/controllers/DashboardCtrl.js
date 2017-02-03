
App.controller('DashboardCtrl',
  ['$scope', 'currentUser',

    function($scope, currentUser) {

      $scope.view = 'DashboardCtrl#show';

      $scope.currentUser = currentUser;

    }

]);
