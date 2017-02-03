
App.factory('UserService',
  ['Auth',

    function(Auth) {

      var currentUser = function() {
        return Auth.currentUser()
              .then(_addName);
      };

      var _addName = function(user) {
        user.name = `${user.first_name} ${user.last_name}`;
        return user;
      };

      return {
        currentUser: currentUser
      };

    }

]);
