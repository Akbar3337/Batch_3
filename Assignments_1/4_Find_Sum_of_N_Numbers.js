// 4. Find sum of N numbers

function sum_of_N(n){
  sum_of_N = 0
  for(let i=1;i<=n;i++){
    sum_of_N += i
  }
  return sum_of_N
}

let n = 10;
console.log(sum_of_N(n));

// 4. Find sum of N numbers

/*

function sum_of_N(n){
  return sum_of_N = (n*(n+1))/2;
}
console.log(sum_of_N(50));

*/