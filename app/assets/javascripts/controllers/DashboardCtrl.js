
App.controller('DashboardCtrl',
  ['$scope', 'currentUser',

    function($scope, currentUser) {

      $scope.currentUser = currentUser;

      $scope.boards = currentUser.getBoards();

      $scope.board = $scope.boards[0];

    }

]);
