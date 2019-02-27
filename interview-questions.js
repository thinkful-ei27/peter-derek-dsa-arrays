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

const removeCharacters = (str, toBeRemoved) => {
  const strArr = [];
  const toBeRemovedArr = [];
  let result = '';

  // Convert `str` to array
  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i]);
  }

  // Convert `toBeRemoved` to array
  for (let i = 0; i < toBeRemoved.length; i++) {
    toBeRemovedArr.push(toBeRemoved[i]);
  }

  // It compares all the the elements in strArr to toBeRemovedArr and if there is a match
  // it replaces the character at that index with an empty string. We then build up the results 
  // string with the characters that don't match
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < toBeRemovedArr.length; j++) {
      if (strArr[i] === toBeRemovedArr[j]) {
        strArr[i] = '';
      }
    }
    result += strArr[i];
  }
  return result;

};

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

const products = arr => {
  return arr.map((num, idx) => {
    let product = 1;
    const filteredArr = arr.filter((innerN, innerI) => innerI === idx ? false : true);
    filteredArr.forEach(fN => product *= fN);
    return product;
  });
};
// console.log(products([1, 3, 9, 4]));

// 2D array
const twoDArray = arr => {
  const newArr = [...arr];
  arr.forEach((innerArr, idx) => {
    innerArr.forEach((num, innerIdx) => {
      if (num === 0) {
        newArr[idx].forEach((oldNum, i) => newArr[idx][i] = 0);
        arr.forEach((a, i) => newArr[i][innerIdx] = 0);
      }
    });
  });
  return newArr;
};

const twoDArrayInput = [[1, 0, 1, 1, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1]];

console.log(twoDArray(twoDArrayInput));