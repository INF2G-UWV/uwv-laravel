/**
 * Block to compare value of an answer with an if else statement
 */
Blockly.Blocks.compare = {
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
      .appendField('Als ingevoerde waarde')
      .appendField(new Blockly.FieldDropdown([
        ['==', 'EQ'],
        ['<', 'LT'],
        ['>', 'GT'],
        ['!=', 'NEQ']
      ]), 'COMPARE')
      .appendField(new Blockly.FieldTextInput('1'), 'COMPARISON');
    this.appendStatementInput('THEN');
    this.appendDummyInput().appendField('Anders');
    this.appendStatementInput('ELSE');
    this.setTooltip('');
  }
};

/**
 * Block to do math operations on insurances
 */
Blockly.Blocks.math = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
      .appendField('Doe')
      .appendField(new Blockly.FieldDropdown([
        ['Zorg', 'zorg'],
        ['WLZ', 'wlz'],
        ['AOW', 'aow'],
        ['WW', 'ww']
      ]), 'insurance')
      .appendField(new Blockly.FieldDropdown([
        ['+', 'sum'],
        ['-', 'min'],
        ['*', 'multiply'],
        ['/', 'divide']
      ]), 'action')
      .appendField(new Blockly.FieldTextInput('10'), 'amount');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

/**
 * Block to go to subquestions
 */
Blockly.Blocks.goto_subquestions = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
      .appendField('Ga naar subvragen');
    this.setPreviousStatement(true);
    this.setTooltip('');
  }
};

/**
 * Block to go to next questions
 */
Blockly.Blocks.goto_next_question = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
      .appendField('Ga naar volgende vraag');
    this.setPreviousStatement(true);
    this.setTooltip('');
  }
};
