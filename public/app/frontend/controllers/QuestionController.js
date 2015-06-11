angular.module('uwv')
  .controller('QuestionController', function($scope, $state, $stateParams, Questions, Tax) {
    var questionId = null;
    $scope.question = {};
    $scope.answer = '';

    if (!Questions.started) {
      $state.go('home');
    }

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
      window.history.back();
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

      if (!nextQuestion) {
        return $state.go('result');
      }

      return $state.go('question', {
        questionId: nextQuestion.id
      });
    }

    function gotoSubQuestions() {
      var nextQuestion = Questions.findSubQuestion(questionId);
      return $state.go('question', {
        questionId: nextQuestion.id
      });
    }

    function aow(value) {
      if (typeof value === 'undefined') {
        return Tax.getAow();
      }

      return Tax.setAow(value);
    }

    function zorg(value) {
      if (typeof value === 'undefined') {
        return Tax.getZorg();
      }

      return Tax.setZorg(value);
    }

    function wlz(value) {
      if (typeof value === 'undefined') {
        return Tax.getWlz();
      }

      return Tax.setWlz(value);
    }

    function ww(value) {
      if (typeof value === 'undefined') {
        return Tax.getWw();
      }

      return Tax.setWw(value);
    }
  });
