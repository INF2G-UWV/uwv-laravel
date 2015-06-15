$(document).ready(function() {

  // bind event handlers
  $('#questions').on('change.uk.nestable', UWV.onQuestionOrderChange);
  $('#addQuestion').on('submit', UWV.addQuestion);
  $('#editQuestion').on('submit', UWV.editQuestion);

  // render blockly workspace
  var blocklyDiv = document.getElementById('blockly');
  var workspace = null;
  if (blocklyDiv) {
    workspace = Blockly.inject(blocklyDiv, {
      toolbox: document.getElementById('toolbox')
    });

    // if we already have blocks render them
    var blocks = document.querySelector('#blocks > xml');
    if (blocks) {
      Blockly.Xml.domToWorkspace(workspace, blocks);
    }
  }
});
