
App.controller('ShowCtrl',
  ['$scope', '$state', '$stateParams', 'currentUser', 'BoardService', 'ListService',
  function($scope, $state, $stateParams, currentUser, BoardService, ListService) {
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

    $scope.updateList = function(params) {
      console.log(params.valid)
      console.log(params.item)
      console.log(params.data)
      console.log(params.property)

      if (valid) {
        list[property] = newVal;

        ListService.update(list)
      }
    }
  }
]);
