import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  // count: 0,
  arr:[],
  str: '',

  getLength() {
    return this.arr.length;
    // throw new NotImplementedError('Not implemented');
    // return count;
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === "()") {
      this.arr.push("()");
    }
    this.value = value + '';
    this.arr.push("( " + value + " )");
    return this;
    // throw new NotImplementedError('Not implemented');
    // count++;
    // return this.value = "(" + value + ")";  
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position != 'number' || position>=this.arr.length || position<0) {
      this.arr = [];
      throw new NotImplementedError ("You can't remove incorrect link!");
    }
    // count--;
    this.arr.splice(position-1, 1);
    return this;

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    this.str = '';
    console.log(this.arr);
    this.arr.forEach((item, index) =>{
      if (index != this.arr.length-1) {
        this.str = this.str + item  + '~~';
      }
      else this.str = this.str +  item ;
    });
    this.arr = [];
    return this.str;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

