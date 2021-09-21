import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // console.log(typeof(Number(sampleActivity)));
  // sampleActivity = +sampleActivity;
  // console.log(sampleActivity);
  if (typeof(sampleActivity) === 'string') {
  	var a = Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)*HALF_LIFE_PERIOD/0.693);
  	// console.log(a);
  	// if (isNaN(a)) {return false}
  	if (Number.isInteger(a) && a>0) {
  		return a;
  	}

  }
  return false;
  // remove line with error and write your code here
}

// dateSample('ACTIVITY OVER 9000');