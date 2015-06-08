angular.module('uwv')
  .controller('QuestionController', function($scope, $state, $stateParams, Questions) {
    var questionId = null;
    $scope.question = {};
    $scope.answer = '';

    if (!Questions.loaded) {
      Questions.retrieve()
        .then(getQuestion);
    } else {
      if (Questions.get($stateParams.questionId)) {
        getQuestion();
      } else {
        $state.go('home');
      }
    }

    function changeAnswer() {
      Questions.setAnswer(questionId, $scope.answer);
    }

    $scope.hasNoPreviousQuestion = function() {
      return $scope.question <= 1;
    };

    $scope.nextQuestion = function() {
      changeAnswer();

      if (Questions.get(questionId + 1)) {
        $state.go('question', {
          questionId: questionId + 1
        });
      } else {
        $state.go('result');
      }
    };

    $scope.previousQuestion = function() {
      changeAnswer();

      if (Questions.get(questionId - 1)) {
        $state.go('question', { questionId: questionId - 1 });
      } else {
        $state.go('home');
      }
    };

    function getQuestion() {
      $scope.question = Questions.get($stateParams.questionId);

      if (typeof $scope.question.answer !== 'undefined') {
        $scope.answer = $scope.question.answer;
      } else {
        $scope.answer = '';
      }

      questionId = $scope.question.id;
    }
  });
