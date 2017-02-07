App.directive('cardModal', function() {
  return {
    restrict: 'E',
    scope: {
      update: '=update',
    },
    templateUrl: '/templates/directives/card_modal.html',
    link: function(scope, element, attrs) {
      element.on('show.bs.modal', function (event) {
        scope.card = $(event.relatedTarget).data('card'); // Extract info from data-* attributes

        var $modal = $(this);

        angular.element($modal).injector().invoke(function($compile) {
          var $scope = angular.element($modal).scope();
          $scope.$apply();
        });
      })
    }
  };
});
