const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 * 
 */
function repeater(str, options) {
  options = options || {};

  let separator = options.separator !== undefined ? options.separator : '+';
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;

  if (typeof str !== 'string') {
    str = String(str);
  }
  if (separator === '') {
    separator = '+';
  }
  if (additionSeparator === '') {
    additionSeparator = '|';
  }

  let additionStr = addition + additionSeparator;
  additionStr = additionStr.repeat(additionRepeatTimes);
  additionStr = additionStr.slice(0, -additionSeparator.length);

  let result = str + additionStr + separator;
  result = result.repeat(repeatTimes);
  result = result.slice(0, -separator.length);

  return result;
  //аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°)
}

module.exports = {
  repeater
};
