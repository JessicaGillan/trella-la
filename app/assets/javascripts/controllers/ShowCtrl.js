
App.controller('ShowCtrl',
  ['$scope', '$state', '$stateParams', 'currentUser', 'BoardService', 'ListService', 'CardService',
  function($scope, $state, $stateParams, currentUser, BoardService, ListService, CardService) {
    $('#cardModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var card = button.data('card'); // Extract info from data-* attributes

      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);
      modal.find('.modal-title').text(card.title);
      modal.find('.modal-description').text(card.description);
    })

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
      console.log("creating card")
      console.log(params.list)
      CardService.create(params.list);
    }
  }
]);
