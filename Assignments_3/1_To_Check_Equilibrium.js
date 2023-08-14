// Q1:  equilibrium

/*

1. You are given an array A of integers of size N.
Your task is to find the equilibrium index of the given array
The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.
Note:
Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.
constraints:
1 <= N <= 10^5
-10^5 <= A[i] <= 10^5

Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]

Input 2:
A = [1, 2, 3]

Example Output
Output 1:
3

Output 2:
-1

*/


function To_Check_Equilibrium(array){
  let cumulative_array = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    cumulative_array.push(sum);
  }
  console.log(cumulative_array);
  let count = 0;
  for (let i = 0; i < cumulative_array.length; i++) {
    let left_side = cumulative_array[i - 1]||0;
    let right_side = cumulative_array[cumulative_array.length - 1] - cumulative_array[i];
    if (left_side === right_side) {
      console.log(i)
      count++;
    }
  }
  if(count > 0){
    console.log(count);
  }
  else{
    console.log(-1)
  }
}

let array = [-7, 1, 5, 2, -4, 3, 0];
//let array = [1, 2, 3];

To_Check_Equilibrium(array);