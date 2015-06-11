angular.module('uwv', [
    'ui.bootstrap',
    'ui.router'
  ])
  .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'MainController',
        templateUrl: 'app/frontend/templates/home.html'
      })
      .state('question', {
        url: '/question/{questionId:[0-9]{1,4}}',
        controller: 'QuestionController',
        templateUrl: 'app/frontend/templates/question.html'
      })
      .state('result', {
        url: '/result',
        controller: 'ResultController',
        templateUrl: 'app/frontend/templates/result.html'
      });
  });
