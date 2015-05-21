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

    UWV.updateQuestions(questions, function () {});
  };

  UWV.updateQuestions = function (questions, callback) {
    $.post('/admin/question/order', {
      questions: questions
    }, callback);
  };

  return UWV;
} (UWV || {}, jQuery);


$(document).ready(function () {

  $('#questions').on('change.uk.nestable', UWV.onQuestionOrderChange);

  var blocklyDiv = document.getElementById('blockly');
  var workspace = null;
  if (blocklyDiv) {
    workspace = Blockly.inject(blocklyDiv, {
     toolbox: document.getElementById('toolbox')
   });
  }
});
