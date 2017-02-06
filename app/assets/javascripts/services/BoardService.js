
App.factory('BoardService',
  ['Restangular', '_',

    function(Restangular, _) {
      var _boards = Restangular.all('boards').getList().$object;

      var getBoards = function() {
        return _boards;
      };

      var findById = function findById(id) {
        id = parseInt(id);

        return _.find(_boards, function(b){ return b.id === id; });
      }

      var create = function create(params) {
        return _createBoard(params);
      }

      var deleteBoard = function deleteBoard(board) {
        return board.remove().then(
          function(board) {
            for (var i = 0; i < _boards.length; i++) {
              if(_boards[i].id === board.id) {
                _boards.splice(i, 1);
                break;
              }
            }
            return board;
          },
          function(response) {
            console.error("Error!" + response);
          }
        )
      }

      var updateBoard = function updateBoard(board) {
        return board.put()
                .then(function(board){
                  return board
                }, function(response) {
                  console.error("Error!" + response);
                })
      };

      // PRIVATE

      var _createBoard = function _createBoard(params) {
        var newBoard = {
          board: {
            name: params ? params.name : "New Board"
          }
        };

        return Restangular.all('boards').post(newBoard).then(
          function(board) {
            _boards.unshift(board);

            return board
          }
        )
      }


      return {
        getBoards: getBoards,
        findById: findById,
        create: create,
        delete: deleteBoard,
        update: updateBoard
      };

    }

]);
