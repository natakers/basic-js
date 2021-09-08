import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
	var word = '';
  // throw new NotImplementedError('Not implemented');
  if (Array.isArray(members)) {
    members.forEach(item => {
  		if (typeof(item) == 'string') {
  			item = item.split(' ').join('');
  			word = word + item[0]; 
  		}
	})
  	return word.toUpperCase().split('').sort().join('');
  	// return word;
	}
	else return false;
  }