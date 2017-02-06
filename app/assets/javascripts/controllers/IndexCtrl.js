
App.controller('IndexCtrl', ['$scope', '$state', 'currentUser', 'BoardService',
  function($scope, $state, currentUser, BoardService) {

    $scope.currentUser = currentUser;

    $scope.boards = BoardService.getBoards();
    $scope.editingBoard = false;
    $scope.formData = {};

    $scope.setBoard = function() {
      $scope.board = BoardService.findById($scope.board_id);
      $state.go('dashboard.show', { id: $scope.board.id });
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

    $scope.toggleEdit = function () {
      if($scope.editingBoard) {
        $scope.editingBoard = false;
      } else {
        $scope.formData.name = $scope.board.name;
        $scope.editingBoard = true;
      }
    }

    $scope.updateBoard = function(valid) {
      if (valid) {
        $scope.board.name = $scope.formData.name;
        $scope.editingBoard = false;

        BoardService.update($scope.board)
      }
    }
  }
]);
