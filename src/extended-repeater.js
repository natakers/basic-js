import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let str1 = '';
  let str2 = '';
  // return ((str +  (options.additionSeparator + options.addition).repeat(options.additionRepeatTime) + options.separator).repeat(options.repeatTimes));
  // return (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes) ;
  // return options.separator;
  // separatorзначение по умолчанию '+'. additionSeparatorзначение по умолчанию '|'.
  // if ()

  if (options.addition) {
    if (options.additionRepeatTimes) {
      if (options.additionSeparator) {
        str1 = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).substring(0, ((str1.length)-(options.additionSeparator.length)));
      }
      else str1 = (options.addition + '|').repeat(options.additionRepeatTimes).substring(0, ((str1.length)-(1)));;
    }
    else str1 = options.addition;
  }
  else str1 = '';

  if (options.repeatTimes) {
    if (options.separator) {
      str = (str + str1 + options.separator).repeat(options.repeatTimes)
      str =  str.substring(0, ((str.length)-(options.separator.length)));
    }
    else {
      // if (options.repeatTimes == 1) {
        str = (str + str1 + "+").repeat(options.repeatTimes)
    str = str.substring(0, ((str.length)-1));
      }
  }
  else str = str + str1;

  // return [str, str.length];
  return str;





//   repeatTimesустанавливает набор numberповторов str;
// separatorэто stringразительное повторение str;
// additionявляется дополнительным, stringкоторое будет добавляться к каждому повторению str;
// additionRepeatTimesустанавливает набор numberповторов addition;
// additionSeparator
  // console.log 
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
