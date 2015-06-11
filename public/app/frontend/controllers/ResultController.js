angular.module('uwv')
  .controller('ResultController', function($scope, $state, Questions, Tax) {
    if (!Questions.started) {
      $state.go('home');
    }

    Tax.calculateNetto();
    $scope.result = {
      bruto: Tax.getBruto(),
      aow: Tax.getAow(),
      zorg: Tax.getZorg(),
      wlz: Tax.getWlz(),
      ww: Tax.getWw(),
      netto: Tax.getNetto()
    };
  });
