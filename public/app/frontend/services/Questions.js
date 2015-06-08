angular.module('uwv')
  .service('Questions', function($http) {
    var questions = [];
    this.loaded = false;
    this.bruto = 0;

    this.getBruto = function() {
      return this.bruto;
    }

    this.setBruto = function(bruto) {
      console.log(bruto);
      return this.bruto = bruto;
    }

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
        if (questions[i].id === id) return questions[i];
      };

      return false;
    };

    this.setAnswer = function(id, answer) {
      id = Number(id);

      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === id) {
          return questions[i].answer = answer;
        }
      };
    }
  });
