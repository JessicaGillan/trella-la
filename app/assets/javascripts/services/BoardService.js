
App.factory('BoardService',
  ['Restangular',

    function(Restangular) {

      var getBoards = function(userId) {
        // TODO get boards for given user?
        Restangular.all('boards').getList();
      };

      return {
        getBoards: getBoards
      };

    }

]);
