'use strict';

// URLify a string
const urlify = url => {
  const urlArr = url.split('');
  return urlArr.map(char => char === ' ' ? '%20' : char).join('');
};

// console.log(urlify('tauhida parveen'));
// console.log(urlify('www.thinkful.com /tauh ida parv een'));

// Filtering an array
const filter = arr => {
  const filteredArr = [];
  arr.forEach(e => e < 5 ? undefined : filteredArr.push(e));
  return filteredArr;
};

// console.log(filter([1, 17, 8, 2, 3, 9]));

// Max sum in the array
const maxSum = arr => {
  let max = 0;
  let counter = 0;
  arr.forEach(n => {
    counter += n;
    counter > max ? max = counter : undefined;
  });
  return max;
};

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// Merge arrays
const mergeArrays = (arr1, arr2) => {
  const combinedArr = [...arr1, ...arr2];
  return combinedArr.sort((a, b) => a - b);
};

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));