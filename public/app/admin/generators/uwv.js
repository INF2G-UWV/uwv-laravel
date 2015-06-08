Blockly.JavaScript.compare = function(block) {
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'GT': '>',
  };
  var operator = OPERATORS[block.getFieldValue('COMPARE')];
  var text_comparison = block.getFieldValue('COMPARISON');
  var statements_then = Blockly.JavaScript.statementToCode(block, 'THEN');
  var statements_else = Blockly.JavaScript.statementToCode(block, 'ELSE');

  var code = 'if (getQuestionValue() ' + operator + ' ' + text_comparison + ') {\n';
  code += statements_then;
  code += '} else {\n';
  code += statements_else;
  code += '}';

  return code + '\n';
};

Blockly.JavaScript.math = function(block) {
  var dropdown_insurance = block.getFieldValue('insurance');
  var dropdown_action = block.getFieldValue('action');
  var text_amount = block.getFieldValue('amount');

  var code = 'math';
  return code + '\n';
};

Blockly.JavaScript.goto_subquestions = function(block) {
  var code = 'gotoSubQuestions();';
  return code + '\n';
};

Blockly.JavaScript.goto_next_question = function(block) {
  var code = 'gotoNextQuestion();';
  return code + '\n';
};
