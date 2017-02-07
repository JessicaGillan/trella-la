

App.factory('CardService', ['Restangular', '_', 'ListService',
  function(Restangular, _, ListService) {

    var createOnList = function createOnList(list, params) {
      return _createCard(list, params);
    }

    var update = function update(card) {
      var card_params = {
        "card": {
          title: card.title,
          description: card.description,
          position: card.position,
          completed: card.completed
        }
      }
      return Restangular.one('cards', card.id).customPUT(card_params)
              .then(function(card){
                // Update List?
                console.log("response",card)
                return card
              }, function(response) {
                console.error("Error!" + response);
              })
    };

    // PRIVATE

    var _createCard = function _createList(list, params) {
      var newCard = {
        card: {
          title: params ? params.title : "Title Goes Here",
          description: params ? params.description : "-- No Description --"
        }
      };

      return list
              .all('cards')
              .post(newCard)
              .then( function(card) {
                ListService.update(list);

                return card
              });
    }

    return {
      create: createOnList,
      update: update
    };
  }
]);
