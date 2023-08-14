// 7. Substring search - Given a string, find the pattern provide by user? if yes, print the index of the substring else print -1

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
let Sub_String = "good";
let output = Search_Function(String, Sub_String);
console.log(output);