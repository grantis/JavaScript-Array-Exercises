// 1. Write a JavaScript function to check whether an `input` is an array or not. 
// Test Data :
// console.log(is_array('w3resource')); 
// console.log(is_array([1, 2, 4, 0]));
// false
// true

const arr1 = []
const arr2 = 99

function isArray (arr) {
  return (Array.isArray(arr)) ? true : false
}

// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0])); 
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0] 
// [1, 2, [4, 0]]

const arr1 = [1, 2, 3, 4, 0]
const arr2 = [1, 2, [4, 0]]

function clone (arr) {
  return [...arr]
}

// 3. Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data : 
// console.log(first([7, 9, 0, -2])); 
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output : 
// 7
// [] 
// [7, 9, 0] 
// [7, 9, 0, -2] 
// [] 

const first = (arr, n) => {
  if(n == null) return arr[0]
  if(arr == null) return []
  if(n < 0) return []
  var result = arr.slice(0, n)
  return result
}

// LEARNINGS:
// void returns undefined, was often used to link to javascript but can cause UX problems. 

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data : 
// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));
// Expected Output : 
// -2 
// [9, 0, -2] 
// [7, 9, 0, -2]





