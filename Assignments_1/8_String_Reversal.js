// 8. Implement string reversal. dont use builtin function

function stringReversal(string)
{
  let New_String = "";
  for(let i = string.length-1; i >= 0; i--)
  {
    New_String += string[i];
  }
  return New_String;
}

let string = "Australia";
console.log(stringReversal(string));