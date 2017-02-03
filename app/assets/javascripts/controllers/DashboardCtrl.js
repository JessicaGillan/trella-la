
App.controller('DashboardCtrl',
  ['$scope', 'currentUser',

    function($scope) {

      $scope.view = 'DashboardCtrl#show';

      $scope.currentUser = currentUser;

    }

]);
