
App.factory('UserService',
  ['Auth',

    function(Auth) {

      var currentUser = function() {
        return Auth.currentUser();
      };

      return {
        currentUser: currentUser
      };

    }

]);
