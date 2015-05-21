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
