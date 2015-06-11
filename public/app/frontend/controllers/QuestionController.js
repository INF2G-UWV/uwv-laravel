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

    function updateAnswer() {
      Questions.setAnswer(questionId, $scope.answer);
    }

    $scope.hasNoPreviousQuestion = function() {
      return $scope.question <= 1;
    };

    $scope.nextQuestion = function() {
      updateAnswer();
      eval($scope.question.code);
    };

    $scope.previousQuestion = function() {
      updateAnswer();

      if (Questions.get(questionId - 1)) {
        $state.go('question', {
          questionId: questionId - 1
        });
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

    function getQuestionValue() {
      return $scope.answer || 0;
    }

    function gotoNextQuestion() {
      var nextQuestion = Questions.findNextQuestion(questionId);
      $state.go('question', {
        questionId: nextQuestion.id
      });
    }

    function gotoSubQuestions() {
      var nextQuestion = Questions.findSubQuestion(questionId);
      $state.go('question', {
        questionId: nextQuestion.id
      });
    }

    function aow(value) {

    }

    function zorg(value) {

    }

    function wlz(value) {

    }

    function ww(value) {

    }
  });
