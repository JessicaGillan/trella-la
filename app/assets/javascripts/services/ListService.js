
App.factory('ListService', ['Restangular', '_',
  function(Restangular, _) {
    var _lists = {};
    var _board;

    var getByBoard = function getByBoard(id) {
      _board = Restangular.one('boards', id).get().$object

      return Restangular
              .one('boards', id)
              .all('lists')
              .getList()
              .then( function(lists) {
                _lists = lists;
              });
    }

    var getLists = function getLists() {
      return _lists;
    }

    var createOnBoard = function createOnBoard(params) {
      return _createList(_board.id, params);
    }

    var deleteList = function deleteList(list) {
      return list.remove().then(
        function(list) {
          for (var i = 0; i < _lists.length; i++) {
            if(_lists[i].id === list.id) {
              _lists.splice(i, 1);
              break;
            }
          }
          return list;
        },
        function(response) {
          console.error("Error!" + response);
        }
      )
    }

    // PRIVATE

    var _createList = function _createList(board_id, params) {
      var newList = {
        list: {
          name: params ? params.name : "Click to Edit Name",
          description: params ? params.description : "Click to Edit description"
        }
      };

      return Restangular
              .one('boards', board_id)
              .all('lists')
              .post(newList)
              .then( function(list) {
                _lists.unshift(list);

                return list
              });
    }

    return {
      get: getByBoard,
      getLists: getLists,
      create: createOnBoard,
      deleteList: deleteList
    };
  }
]);
