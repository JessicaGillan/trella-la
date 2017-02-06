App.directive('list', function() {
  return {
    restrict: 'E',
    scope: {
      list: '=',
      delete: '&'
    },
    templateUrl: '/templates/directives/list.html',
  };
});
