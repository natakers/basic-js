
 function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let obj = {
    arr: [],
    initArr: [],

    add: function(item) {
      if (typeof item === 'number' && item>=0) {
        this.arr.push(item);
      } 
      return arr;

    },
    doubleNext: function(item,index) {
      if (item) {
        this.arr.push(item);
        this.arr.push(item);
        index = index++;
        // return index;
      }
      return this.arr;
    },

    doublePrev: function(item,index) {
      if (this.arr.length != 0 ) {
        this.arr.pop();
  		  this.arr.push(item);
        this.arr.push(item);
      }
      return this.arr;
    },

    discardNext: function(item, item2, index) {
      if (item) {
        if (typeof item2 != 'number') {
          index = index+2;
        }
        else {
          index++;
        }
      }
      return this.arr;
    },
    discardPrev: function(index) {
      if (this.arr.length != 0 ) {
        this.arr.splice(i-1,1);
      }
      return this.arr;
    },
  }
  // let result = [];
  obj.initArr = [...arr];
  console.log(obj.initArr);
  if (Array.isArray(arr)) {
  
   for (let i = 0; i<arr.length; i++) {
     if (arr[i] == '--double-next') {
       obj.doubleNext(arr[i+1]);
     };
     if (arr[i] == '--double-prev') {
      obj.doublePrev(arr[i-1], i);
    };
    if (arr[i] == '--discard-next') {
      obj.discardNext(arr[i]);
    };
    if (arr[i] == '--discard-prev') {
      if (result.length != 0 ) {
        obj.discardPrev(i);
    };
  	if (typeof arr[i] === 'number' && arr[i]>=0) {
      obj.add(arr[i]);
  	} 
  	// else {
  		// if (arr[i] == '--double-next') {
      //   if (arr[i+1]) {
      //     obj.doubleNext(arr[i+1], i);
      // }

  		// }
  		// if (arr[i] == '--double-prev') {
      //   if (result.length != 0 ) {
      //     obj.doublePrev(arr[i-1], i);
  		// 	}
  		// }
  		// if (arr[i] == '--discard-next') {
      //    if (arr[i+1]) {
      //     obj.discardNext(arr[i+2], i);
      // }
  			
  		// }
  		// if (arr[i] == '--discard-prev') {
  		// 	if (result.length != 0 ) {
      //     obj.discardPrev(i);
      //   }
  			
  		// }
  	}
   }
   console.log(obj.arr);
return obj.arr;
  }
  
  else throw new NotImplementedError (" \'arr\' parameter must be an instance of the Array!");

}

// transform([1,2,3,4,5])
console.log(transform([1,2,3,4,5]));

