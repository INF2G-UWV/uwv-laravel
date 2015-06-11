angular.module('uwv')
  .controller('MainController', function ($scope, $state, Questions, Tax) {
    $scope.form = {
        bruto: Tax.getBruto()
    };

    Questions.started = false;

    $scope.start = function () {
      Tax.setBruto($scope.form.bruto);
      Questions.started = true;
      $state.go('question', {
        questionId: 1
      });
    };

    Questions.retrieve();
  });
