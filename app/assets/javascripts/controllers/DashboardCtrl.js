
App.controller('DashboardCtrl',
  ['$scope', 'currentUser', 'BoardService',

    function($scope, currentUser, BoardService) {

      $scope.currentUser = currentUser;

      $scope.boards = BoardService.getBoards();
      $scope.board = $scope.boards[0];
    }

]);
