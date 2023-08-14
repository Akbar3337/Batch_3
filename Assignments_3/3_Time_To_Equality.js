// Q3. Time to equality

/* 

3. Problem Description
Given an integer array A of size N. In one second, you can increase the value of one element by 1.
Find the minimum time in seconds to make all elements of the array equal.
Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000 

Input Format
First argument is an integer array A.

Output Format
Return an integer denoting the minimum time to make all elements equal.

Example Input
A = [2, 4, 1, 3, 2]

Example Output
8

*/


function Time_To_Equality(array){
  let maximum_element = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum_element) {
      maximum_element = array[i];
    }
  }
  console.log(maximum_element);

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== maximum_element) {
      count += maximum_element - array[i];
      array[i] = maximum_element;
    }
  }
  console.log(array)
  console.log(count);
}

let array = [2, 4, 3, 1, 2];

Time_To_Equality(array);