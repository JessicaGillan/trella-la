
App.controller('ShowCtrl',
  ['$scope', '$state', '$stateParams', 'currentUser', 'BoardService', 'ListService', 'CardService',
  function($scope, $state, $stateParams, currentUser, BoardService, ListService, CardService) {
    $scope.currentUser = currentUser;

    BoardService.get($stateParams.id)
      .then( function (board) { return $scope.board = board })
      .then( function(board) {
          $scope.lists = board.lists;
      })

    $scope.createBlankList = function () {
      ListService.create($scope.board)
    }

    $scope.deleteList = function (params) {
      ListService.deleteList(params.list)
    }

    $scope.updateList = function(params) {
      if (params.valid) {
        params.item[params.property] = params.data;

        ListService.update(params.item)
      }
    }

    $scope.createBlankCard = function(params) {
      CardService.create(params.list);
    }

    $scope.updateCard = function(params) {
      if (params.valid) {
        params.item[params.property] = params.data;
        CardService.update(params.item)
        ListService.updateById(params.item.parentResource.id)
      }
    }
  }
]);
