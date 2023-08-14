// 6. How do you reverse an array?

function Reverse_Array(array) {
let start = 0;
let end = array.length - 1;

while (start < end) {
  let temp = array[start];
  array[start] = array[end];
  array[end] = temp;
  
  start++
  end--
}
return array;
}

let array = [3,4,5,5,6,8];
console.log(Reverse_Array(array));