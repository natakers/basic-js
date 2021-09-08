import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  console.log(matrix);
  var count = 0;
  for (var i=0; i<matrix.length; i++) {
  	  for (var j=0; j<matrix[i].length; j++) {
  	  	if (matrix[i][j] == "^^") {
  	  		count++ 
  	  	}
  	
  }
  }
  return count;
  // remove line with error and write your code here
}
