
App.controller('DashboardCtrl', ['$scope', 'currentUser', 'BoardService',
  function($scope, currentUser, BoardService) {

    $scope.currentUser = currentUser;

    $scope.boards = BoardService.getBoards();

    $scope.setBoard = function() {
      $scope.board = BoardService.findById($scope.board_id);
    }

    $scope.createBlankBoard = function () {
      BoardService.create({ name: "Click to Edit Title" })
        .then( function (board) {
          $scope.board = board;
        });
    }

    $scope.deleteBoard = function () {
      if($scope.board) {
        BoardService.delete($scope.board);
      }
    }
  }
]);
