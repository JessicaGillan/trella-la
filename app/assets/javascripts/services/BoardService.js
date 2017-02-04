
App.factory('BoardService',
  ['Restangular',

    function(Restangular) {

      var getBoards = function() {
        return Restangular.all('boards').getList();
      };

      return {
        getBoards: getBoards
      };

    }

]);
