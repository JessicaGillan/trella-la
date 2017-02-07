
App.factory('ListService', ['Restangular', '_',
  function(Restangular, _) {
    var _lists = [];
    var _board;

    var setCards = function setCards(lists) {
      for (var i = 0; i < lists.length; i++) {
        _setCards(lists[i])
          .then( function(list) {
            _lists.push(list);
          });
      }

      return _lists
    }

    var _setCards = function _setCards(list) {
      return list.get()
              .then(function(list) {
                list.cards = Restangular.restangularizeCollection(list, list.cards, 'cards');

                return list
              })
    }

    var getByBoard = function getByBoard(id) {
      _board = Restangular.one('boards', id).get().$object

      return Restangular
              .one('boards', id)
              .all('lists')
              .getList()
              .then( function(lists) {
                _lists = lists; // Restangularize collection
              });
    }

    var getLists = function getLists() {
      return _lists;
    }

    var createOnBoard = function createOnBoard(board, params) {
      return _createList(board, params);
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

    var updateList = function updateList(list) {
      return list.put()
              .then(function(list){
                return list
              }, function(response) {
                console.error("Error!" + response);
              })
    };

    // PRIVATE

    var _createList = function _createList(board, params) {
      var newList = {
        list: {
          name: params ? params.name : "Click to Edit Name",
          description: params ? params.description : "Click to Edit description"
        }
      };

      return board
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
      deleteList: deleteList,
      update: updateList,
      setCards: setCards,
    };
  }
]);
