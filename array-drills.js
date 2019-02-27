'use strict';

const Array = require('./array');

function main() {

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3);

  
  //   What is the length, capacity and memory address of your array?
  
  /* 
  arr.push(3) -- Array { _capacity: 3, length: 1, ptr: 0 }
  */
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  // What is the length, capacity and memory address of your array? 
  // Explain the result of your program after adding the new lines of code?
  // ANSWER -- Array { _capacity: 12, length: 6, ptr: 3 }
  // EXPLAINATION -- The reason we get the above results is, that we tried to push
  // to the array over the limit of it's allocated capaity, so our Array._resize method
  // ran to increase the capacity and we had to allocate a new chink of memory

  arr.pop();
  arr.pop();
  arr.pop();
  
  // What is the length, capacity and address of your array? 
  // Explain the result of your program after adding the new lines of code
  // ANSWER -- Array { _capacity: 12, length: 3, ptr: 3 }
  // EXPLAINATION -- The reason we get the above results is, that we pop 3 values off 
  // then end of the array and every time we pop, we decrease the length by 1, so our capcity and 
  // our ptr remain the same and length decreases by 3.


  // Print the first item in the array arr.
  console.log(arr.get(0));
  // ANSWER -- 3
  // EXPLAINATION -- We pushed 3 to the array first, so get retrieves a value at a given index
  // and the first index of course is 0.

  // Empty the array and add just one item arr.push("tauhida");
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr.get(0));
  // Print this one item that you just added. What is the result? Can you explain your result?
  // ANSWER -- NaN
  // EXPLAINATION -- In the memory class, `this.memory` is a `Float64Array` that can only take floating point
  // numbers as values.


  // What is the purpose of the _resize() function in your Array class?
  // The purporse of the _resize() function in the Array class is to re-allocate memory
  // when the Array exceeds capacity allocated to it.
  
  console.log(arr);

}

main();