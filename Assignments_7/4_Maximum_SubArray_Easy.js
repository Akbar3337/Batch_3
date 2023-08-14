/* 

Q4. Maximum Subarray Easy

Problem Description
You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.

Problem Constraints
1 <= A <= 10^3
1 <= B <= 10^9
1 <= C[i] <= 10^6

Input Format
The first argument is the integer A.
The second argument is the integer B.
The third argument is the integer array C.

Output Format
Return a single integer which denotes the maximum sum. 

Example Input
Input 1:
A = 5
B = 12
C = [2, 1, 3, 4, 5]

Input 2:
A = 3
B = 1
C = [2, 2, 2]

Example Output
Output 1:
12

Output 2:
0

Example Explanation
Explanation 1:
We can select {3,4,5} which sums up to 12 which is the maximum possible sum.

Explanation 2:
All elements are greater than B, which means we cannot select any subarray.
Hence, the answer is 0.

*/

function maximum_Subarray(A, B, array) {
  let maximum_Sum = -Infinity;
  let current_Sum = 0;

  for (let i = 0; i < A; i++) {
    current_Sum += array[i];

    if (current_Sum > maximum_Sum && current_Sum <= B) {
      maximum_Sum = current_Sum;
    }

    if (current_Sum < 0) {
      current_Sum = 0;
    }
  }

  return maximum_Sum;
}

let A = 3;
let B = 1;
let array = [2, 2, 2];
console.log(maximum_Subarray(A, B, array));