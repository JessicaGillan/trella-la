
App.controller('DashboardCtrl', ['$scope', 'currentUser', 
  function($scope, currentUser) {

    $scope.currentUser = currentUser;
  }
]);
