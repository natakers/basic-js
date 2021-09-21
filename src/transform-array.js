import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  if (Array.isArray(arr)) {
  
   for (let i = 0; i<arr.length; i++) {
  	if (typeof arr[i] === 'number' && arr[i]>=0) {
  		result.push(arr[i]);
  	} 
  	else {
  		if (arr[i] == '--double-next') {
        if (arr[i+1]) {
  			result.push(arr[i+1]);
        result.push(arr[i+1]);
  			i++;
      }

  		}
  		if (arr[i] == '--double-prev') {
        if (result.length != 0 ) {
  			result.pop();
  			result.push(arr[i-1]);
        result.push(arr[i-1]);
  			i++;
  			}
  		}
  		if (arr[i] == '--discard-next') {
         if (arr[i+1]) {
  			i++;
      }
        // result.splice(i-1,1);
  			
  		}
  		if (arr[i] == '--discard-prev') {
  			if (result.length != 0 ) {
          result.splice(i-1,1);
        	i--;
        }
  			
  		}
  	}
   }
return result;
  }
  
  else throw new NotImplementedError (" \'arr\' parameter must be an instance of the Array!");
}
