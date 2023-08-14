//7. Implement your own search function for strings. dont use builtin function

function Search_Function(String, Sub_String) 
{
  let indices = [];
  for (let i = 0; i <= String.length - Sub_String.length; i++) {
    let j = 0;
    while (j < Sub_String.length) {
      if (String[i + j] !== Sub_String[j]) {
        break;
      }
      j++;
    }
    if (j === Sub_String.length) {
      indices.push(i);
    }
  }
  if (indices.length == 0){
    return [-1]
  }
  return indices;
}

let String = "Hello good morning";
let Sub_String = "god";
let output = Search_Function(String,Sub_String);
console.log(output);