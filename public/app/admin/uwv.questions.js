var UWV = function(UWV, $) {

  UWV.onQuestionOrderChange = function(e) {
    var parents = $('#questions').children('li');
    var questions = [];

    parents.each(function(index, item) {
      var question = $(item);
      var parentId = question.data('question-id');

      questions.push({
        id: parentId,
        order: index,
        parent: null
      });

      question.find('li')
        .each(function(index, item) {
          question = $(item);
          var childId = question.data('question-id');

          questions.push({
            id: childId,
            order: index,
            parent: parentId
          });
        });
    });

    UWV.updateQuestionsOrder(questions, function() {});
  };

  UWV.updateQuestionsOrder = function(questions, callback) {
    $.post('/admin/question/order', {
      questions: questions
    }, callback);
  };

  UWV.addQuestion = function() {
    var l = Ladda.create(this.querySelector('button'));
    l.start();
  };

  UWV.editQuestion = function(e) {
    e.preventDefault();
    var l = Ladda.create(this.querySelector('button'));
    l.start();

    var workspace = Blockly.getMainWorkspace();
    var dom = Blockly.Xml.workspaceToDom(workspace);
    var text = Blockly.Xml.domToText(dom);
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var question = $(this).find('[name=question]').val();

    $.post(window.location.href, {
      question: question,
      block: text,
      code: code
    }, function(result) {
      window.location.reload();
    });
  };

  return UWV;
}(UWV || {}, jQuery);
