Blockly.JavaScript.compare = function(block) {
  var dropdown_compare = block.getFieldValue('COMPARE');
  var text_comparison = block.getFieldValue('COMPARISON');
  var statements_then = Blockly.JavaScript.statementToCode(block, 'THEN');
  var statements_else = Blockly.JavaScript.statementToCode(block, 'ELSE');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};