// 4. Declare an array and print all values in an array using loops - for, while — Use functions

/*

let array = [5,6,12,36,45];
let array_New = [];
for(let i = 0; i < array.length; i++){
  array_New.push(array[i]);
}

console.log(array_New);

*/

let array = [5,6,12,36,45];
let array_New = [];
i = 0;
while(i < array.length){
  array_New.push(array[i]);
  i++;
}

console.log(array_New);