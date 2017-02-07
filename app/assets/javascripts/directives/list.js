App.directive('list', function() {
  return {
    restrict: 'E',
    scope: {
      list: '=',
      deleteCB: '=delete',
      updateCB: '=update',
      createCard: '=createCard'
    },
    templateUrl: '/templates/directives/list.html',
  };
});
