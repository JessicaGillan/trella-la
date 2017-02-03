
App.factory('UserService',
  ['Auth', 'BoardService',

    function(Auth, BoardService) {

      var currentUser = function() {
        return Auth.currentUser()
              .then(_extendUser);
      };

      var _extendUser = function(user) {
        _addName(user);
        _addBoards(user);
        return user;
      };

      var _addName = function(user) {
        user.name = `${user.first_name} ${user.last_name}`;
      };

      var _addBoards = function(user) {
        user.boards = BoardService.getBoards(user.id);
      };

      return {
        currentUser: currentUser
      };

    }

]);
