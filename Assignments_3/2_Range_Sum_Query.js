// Q2. Range Sum Query

/*

2. You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.
Problem Constraints
1 <= N, M <= 10^5
1 <= A[i] <= 10^9
0 <= L <= R < N 

Input Format
The first argument is the integer array A.
The second argument is the 2D integer array B.

Output Format
Return an integer array of length M where ith element is the answer for ith query in B.

Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]

Input 2:
A = [2, 2, 2]
B = [[0, 0], [1, 2]]

Example Output
Output 1:
[10, 5]

Output 2:
[2, 4]

*/

function Range_Query_Sum(array, array_Query){
  let cumulative_array = [];
  let sum_array = 0;
  for (let i = 0; i < array.length; i++) {
    sum_array += array[i];
    cumulative_array.push(sum_array);
  }
  console.log(cumulative_array);

  let Result_Query_Sums = []
  for (let j = 0; j < array_Query.length; j++) {
    let L = array_Query[j][0];
    let R = array_Query[j][1];
    let array_Query_Range_Sum = 0;
    if (L != 0) {
      array_Query_Range_Sum = cumulative_array[R] - cumulative_array[L - 1];
    } 
    else {
      array_Query_Range_Sum = cumulative_array[R];
    }
    Result_Query_Sums.push(array_Query_Range_Sum);
  }
  console.log(Result_Query_Sums);
}

let array = [1, 2, 3, 4, 5];
//let array = [2, 2, 2];

let array_Query = [[0, 3], [1, 2]];
//let arrQ = [[0, 0], [1, 2]];

Range_Query_Sum(array, array_Query);