
App.controller('ShowCtrl',
  ['$scope', '$state', '$stateParams', 'currentUser', 'BoardService', 'ListService',
  function($scope, $state, $stateParams, currentUser, BoardService, ListService) {

    $scope.currentUser = currentUser;

    BoardService.get($stateParams.id)
      .then( function (board) { return $scope.board = board })
      .then( function(board) {
        ListService.get(board.id)
          .then( function() {
            $scope.lists = ListService.getLists();
          }
        )
      })

    $scope.createBlankList = function () {
      ListService.create()
    }

    $scope.deleteList = function (list) {
      ListService.deleteList(list)
    }
  }
]);
