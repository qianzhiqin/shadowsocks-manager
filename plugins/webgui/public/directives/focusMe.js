const app = require('../index').app;

app.directive('focusMe', ['$timeout', $timeout => {
  return {
    restrict: 'A',
    link : ($scope, $element) => {
      $timeout(() => {
        $element[0].focus();
      });
    }
  };
}]);
