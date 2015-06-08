$(document).ready(function() {

  $('#questions').on('change.uk.nestable', UWV.onQuestionOrderChange);
  $('#addQuestion').on('submit', UWV.addQuestion);
  $('#editQuestion').on('submit', UWV.editQuestion);

  var blocklyDiv = document.getElementById('blockly');
  var workspace = null;
  if (blocklyDiv) {
    workspace = Blockly.inject(blocklyDiv, {
      toolbox: document.getElementById('toolbox')
    });

    var blocks = document.querySelector('#blocks > xml');
    Blockly.Xml.domToWorkspace(workspace, blocks);

    workspace.addChangeListener(updateCode);
  }

  function updateCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    console.log(code);
  }
});
