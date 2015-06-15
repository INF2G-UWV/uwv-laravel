angular.module('uwv')
  .service('Questions', function($http, $state) {
    var questions = [];
    this.loaded = false;

    this.started = false;

    this.retrieve = function() {
      var self = this;
      return $http.get('/api/questions')
        .success(function(result) {
          questions = result;
          self.loaded = true;
        });
    };

    this.all = function() {
      return questions;
    };

    this.get = function(id) {
      id = Number(id);

      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id == id) return questions[i];
      }

      return false;
    };

    this.findNextQuestion = function(currentId) {
      currentId = Number(currentId);
      var question = this.get(currentId);

      // zoek de volgende vraag met dezelfde parent_id
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].parent_id == question.parent_id && questions[i].order >= question.order && questions[i].id != question.id) {
          return questions[i];
        }
      }
      // geen volgende vraag gevonden, probeer vragen met parent_id === 0
      for (i = 0; i < questions.length; i++) {
        if (questions[i].parent_id == 0 && questions[i].order >= question.order && questions[i].id != question.id && questions[i].id != question.parent_id) {
          return questions[i];
        }
      }

      // einde bereikt
      return false;
    };

    this.findSubQuestion = function(currentId) {
      currentId = Number(currentId);
      var question = this.get(currentId);

      for (var i = 0; i < questions.length; i++) {
        if (questions[i].parent_id == question.id && questions[i].order == 0) {
          return questions[i];
        }
      }
    };

    this.setAnswer = function(id, answer) {
      id = Number(id);

      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id == id) {
          questions[i].answer = answer;
          break;
        }
      }
    };
  });
