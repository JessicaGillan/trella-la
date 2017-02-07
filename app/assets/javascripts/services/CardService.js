

App.factory('CardService', ['Restangular', '_',
  function(Restangular, _) {

    var createOnList = function createOnList(list, params) {
      return _createCard(list, params);
    }

    // var deleteList = function deleteList(list) {
    //   return list.remove().then(
    //     function(list) {
    //       for (var i = 0; i < _lists.length; i++) {
    //         if(_lists[i].id === list.id) {
    //           _lists.splice(i, 1);
    //           break;
    //         }
    //       }
    //       return list;
    //     },
    //     function(response) {
    //       console.error("Error!" + response);
    //     }
    //   )
    // }
    //
    // var updateList = function updateList(list) {
    //   return list.put()
    //           .then(function(list){
    //             return list
    //           }, function(response) {
    //             console.error("Error!" + response);
    //           })
    // };

    // PRIVATE

    var _createCard = function _createList(list, params) {
      var newCard = {
        card: {
          title: params ? params.title : "Click to Edit Title",
          description: params ? params.description : "Click to Edit description"
        }
      };

      return list
              .all('cards')
              .post(newCard)
              .then( function(card) {
                // _cards.unshift(card);

                return card
              });
    }

    return {
      create: createOnList,
    };
  }
]);
