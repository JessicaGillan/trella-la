App.directive('card', function() {
  return {
    restrict: 'E',
    scope: {
      card: '=',
    },
    templateUrl: '/templates/directives/card.html',
  };
});
