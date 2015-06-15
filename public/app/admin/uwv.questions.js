var UWV = function(UWV, $) {

  /**
   * Get all questions from the DOM and determine their order
   * Then make an api request to update it in the database
   */
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

  /**
   * Wrapper function to update questions order api
   */
  UWV.updateQuestionsOrder = function(questions, callback) {
    $.post('/admin/question/order', {
      questions: questions
    }, callback);
  };

  UWV.addQuestion = function() {
    var l = Ladda.create(this.querySelector('button'));
    l.start();
  };

  /**
   * Get the contents of the questions
   * Make an api call to update it in the database
   */
  UWV.editQuestion = function(e) {
    e.preventDefault();
    var l = Ladda.create(this.querySelector('button'));
    l.start();

    // Get the blocks from the dom
    var workspace = Blockly.getMainWorkspace();
    var dom = Blockly.Xml.workspaceToDom(workspace);
    // convert the blocks to text
    var text = Blockly.Xml.domToText(dom);
    // run the code generators
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var question = $(this).find('[name=question]').val();
    var information = $(this).find('[name=information]').val();

    $.post(window.location.href + '/update', {
      question: question,
      block: text,
      information: information,
      code: code
    }, function(result) {
      window.location.reload();
    });
  };

  return UWV;
}(UWV || {}, jQuery);
