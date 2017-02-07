App.directive('list', function() {
  return {
    restrict: 'E',
    scope: {
      list: '=',
      deleteCB: '=delete',
      updateCB: '=update'
    },
    templateUrl: '/templates/directives/list.html',
  };
});
