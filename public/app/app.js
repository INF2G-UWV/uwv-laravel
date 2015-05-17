var UWV = function (UWV, $) {

  UWV.onQuestionOrderChange = function (e, item) {
    var questionId = item.data('question-id');

    console.log(questionId);
  };


  return UWV;
} (UWV || {}, jQuery);


$(document).ready(function () {

  $('#questions').on('change.uk.nestable', UWV.onQuestionOrderChange);

});
