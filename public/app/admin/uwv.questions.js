var UWV = function (UWV, $) {

  UWV.onQuestionOrderChange = function (e) {
    var parents = $('#questions').children('li');
    var questions = [];

    parents.each(function (index, item) {
      var question = $(item);
      var parentId = question.data('question-id');

      questions.push({
        id: parentId,
        order: index,
        parent: null
      });

      question.find('li')
        .each(function (index, item) {
          question = $(item);
          var childId = question.data('question-id');

          questions.push({
            id: childId,
            order: index,
            parent: parentId
          });
        });
    });

    UWV.updateQuestionsOrder(questions, function () {});
  };

  UWV.updateQuestionsOrder = function (questions, callback) {
    $.post('/admin/question/order', {
      questions: questions
    }, callback);
  };

  return UWV;
} (UWV || {}, jQuery);
