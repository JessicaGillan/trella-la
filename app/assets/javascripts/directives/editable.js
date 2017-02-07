App.directive('editable', function() {
  var editing = false,
      formData = {};

  var toggleEdit = function(scope) {
    return function() {
      if(scope.editing) {
        scope.editing = false;
      } else {
        scope.formData.property = scope.item[scope.property];
        scope.editing = true;
      }
    }
  }

  var submitHandler = function(scope) {
    return function(valid, data, property, item) {
      if(valid) {
        scope.editing = false;
        scope.processForm(valid, data, property, item);
      }
    }
  }

  return {
    restrict: 'E',
    scope: {
      item: '=',
      property: '@',
      uppercase: '@',
      inputType: '@',
      processForm: '=process',
    },
    templateUrl: '/templates/directives/editable.html',
    link: function(scope, element, attrs) {
      scope.formData = formData;
      scope.editing = editing;
      scope.toggleEdit = toggleEdit(scope);
      scope.submitHandler = submitHandler(scope);
    }
  };
});
