/* 

Q3. Subarray with least average

Problem Description
Given an array of size N, find the subarray of size K with the least average.

Problem Constraints
1<=k<=N<=10^5
-10^5<=A[i]<=10^5

Input Format
First argument contains an array A of integers of size N.
Second argument contains integer k.

Output Format
Return the index of the first element of the subarray of size k that has least average.
Array indexing starts from 0. 

Example Input

Input 1:
A=[3, 7, 90, 20, 10, 50, 40]
B=3

Input 2:
A=[3, 7, 5, 20, -10, 0, 12]
B=2

Example Output
Output 1:
3

Output 2:
4

Example Explanation
Explanation 1:
Subarray between indexes 3 and 5
The subarray {20, 10, 50} has the least average 
among all subarrays of size 3.

Explanation 2:
Subarray between [4, 5] has minimum average

*/

function Least_AVERAGE_SubArray(array, k) {
  let minimum_average = Number.POSITIVE_INFINITY;
  let minimum_index = -1;

  for (let i = 0; i <= array.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += array[j];
    }
    let average = sum / k;

    if (average < minimum_average) {
      minimum_average = average;
      minimum_index = i;
    }
  }

  return minimum_index;
}

let array = [10, 20, 20, 10, 10, 60, 50];
let k = 2;
console.log(Least_AVERAGE_SubArray(array, k));