// Q4. Product array puzzle

/* 

4. Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.
Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.
Input Format
The only argument given is the integer array A.
Output Format
Return the product array.
Constraints
2 <= length of the array <= 1000
1 <= A[i] <= 10 

For Example

Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    [120, 60, 40, 30, 24]

Input 2:
    A = [5, 1, 10, 1]
Output 2:
    [10, 50, 5, 50]
    
*/


function product_Array(array) {
  let length = array.length;
  let result = [];
  let left_Product = 1;
  for (let i = 0; i < length; i++) {
    result[i] = left_Product;
    left_Product *= array[i];
  }
  let right_Product = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= right_Product;
    right_Product *= array[i];
  }
  return result;
}

let array = [1, 2, 3, 4, 5];

console.log(product_Array(array));