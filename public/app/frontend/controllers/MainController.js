angular.module('uwv')
  .controller('MainController', function ($scope, $state, Questions) {
    $scope.form = {
        bruto: Questions.getBruto(),
        netto: 0
    };

    $scope.start = function () {
      Questions.setBruto($scope.form.bruto);
      Questions.started = true;
      $state.go('question', {
        questionId: 1
      });
    };

    Questions.retrieve();
  });
