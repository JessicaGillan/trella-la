
App.controller('IndexCtrl', ['$scope', '$state', 'currentUser', 'BoardService',
  function($scope, $state, currentUser, BoardService) {

    $scope.currentUser = currentUser;

    $scope.boards = BoardService.getBoards();

    $scope.setBoard = function() {
      $scope.board = BoardService.findById($scope.board_id);

      if($scope.board) {
        $state.go('dashboard.show', { id: $scope.board.id });
      } else {
        $state.go('dashboard.index');    
      }
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

    $scope.updateBoard = function(params) {
      if (params.valid) {
        $scope.board.name = params.data;

        BoardService.update($scope.board)
      }
    }
  }
]);
