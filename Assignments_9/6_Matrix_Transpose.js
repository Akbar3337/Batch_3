/* 

Q6. Matrix Transpose

Problem Constraints
1 <= A.size() <= 1000
1 <= A[i].size() <= 1000
1 <= A[i][j] <= 1000

Input Format
First argument is a 2D matrix of integers.

Output Format
You have to return the Transpose of this 2D matrix. 

Example Input

Input 1:
A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

Input 2:
A = [[1, 2],[1, 2],[1, 2]]

Example Output

Output 1:
[[1, 4, 7], [2, 5, 8], [3, 6, 9]]

Output 2:
[[1, 1, 1], [2, 2, 2]]

Example Explanation

Explanation 1:
Clearly after converting rows to column and columns to rows of [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
we will get [[1, 4, 7], [2, 5, 8], [3, 6, 9]].

*/

function matrix_Transpose(matrix) {
  let M = matrix.length;
  let N = matrix[0].length;

  let transpose = [];
  for (let i = 0; i < N; i++) {
    transpose[i] = [];
    for (let j = 0; j < M; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }
  return transpose;
}

let matrix = [[1, 2], [3, 5], [6, 7]];
console.log(matrix_Transpose(matrix));