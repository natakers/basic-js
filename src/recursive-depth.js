import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 0;
    count1(arr);
  //   if (a.length == 0 ) {return 0;}
    function count1(a){
      console.log(a);
      count = count++;
    a.forEach(item => {
      console.log('count ' + count);
      console.log(item);
      if (Array.isArray(item)) {
      var b = item;
      return count1(b);
      }
    }); 
    return count;
    }
     console.log('count ' + count);
    return count;
  }
}

// calculateDepth([1, 2, 3, 4, 5, [1]])
