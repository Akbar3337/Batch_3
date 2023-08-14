/*

Q2. Closest MinMax

Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.

Problem Constraints
1 <= |A| <= 2000

Input Format
First and only argument is vector A

Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array. 

Example Input
Input 1:
A = [1, 3, 2]

Input 2:
A = [2, 6, 1, 6, 9]

Example Output
Output 1:
 2

Output 2:
 3

Example Explanation
Explanation 1:
 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
 
Explanation 2:
 Take the last 3 elements of the array.
 
*/


function Closest_Minimum_Maximum(array){
  let maximum_Element = array[0];
  let minimum_Element = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maximum_Element) {
      maximum_Element = array[i];
    }
    if (array[i] < minimum_Element) {
      minimum_Element = array[i];
    }
  }
  console.log(maximum_Element);
  console.log(minimum_Element);
  let minimum_Element_Index = -1;
  let maximum_Element_Index = -1;
  let min_length_Sub_Array = Number.MAX_VALUE;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === maximum_Element) {
      maximum_Element_Index = i;
    }
    if (array[i] === minimum_Element) {
      minimum_Element_Index = i;
    }
    if (maximum_Element_Index !== -1 && minimum_Element_Index !== -1) {
      min_length_Sub_Array = Math.min(min_length_Sub_Array, Math.abs(maximum_Element_Index - minimum_Element_Index) + 1);
    }
  }
  console.log(min_length_Sub_Array);
}

let array = [1, 3, 2];
//let array = [2, 6, 1, 6, 9];

Closest_Minimum_Maximum(array);