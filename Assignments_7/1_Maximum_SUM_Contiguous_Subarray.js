/* 

Q1. Max Sum Contiguous Subarray

Problem Description
Find the maximum sum of contiguous non-empty subarray within an array A of length N.

Problem Constraints
1 <= N <= 10^6
-1000 <= A[i] <= 1000

Input Format
The first and the only argument contains an integer array, A.

Output Format
Return an integer representing the maximum possible sum of the contiguous subarray. 

Example Input
Input 1:
A = [1, 2, 3, 4, -10] 

Input 2:
A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 

Example Output

Output 1:
10 

Output 2:
6 

Example Explanation

Explanation 1:
The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 

Explanation 2:
The subarray [4,-1,2,1] has the maximum possible sum of 6. 

*/

function Maximum_SUM_Contiguous_Subarray(array){

  let maximum_SUM_Subarray = Number.NEGATIVE_INFINITY;

  for (let start = 0; start < array.length; start++) {
    for (let end = start; end < array.length; end++) {
      
      let sub_Array = [];
      let current_SUM_Subarray = 0;
    
      for (let k = start; k <= end; k++) {
        sub_Array.push(array[k]);
        current_SUM_Subarray += array[k];
      }

      if (current_SUM_Subarray > maximum_SUM_Subarray) {
        maximum_SUM_Subarray = current_SUM_Subarray;
      }
    }
  }
  return maximum_SUM_Subarray;
}

let array = [1, 2, -3, 4, -2, 1];

console.log(Maximum_SUM_Contiguous_Subarray(array));