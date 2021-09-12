import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');

  if(!Number.isInteger(date.getMonth())) {
  	return "Invalid date!" ;
  }
  if(!date) {
  	return 'Unable to determine the time of year!';
  }
  var a = date.getMonth();
  if (a == 11 || (0<=a && a<2)) {
  	return "winter";
  }
    if (2<=a && a<5) {
  	return "spring";
  }
    if (5<=a && a<8) {
  	return "summer";
  }
    if (8<=a && a<11) {
  	return "autumn|fall";
  }


  // remove line with error and write your code here
}
