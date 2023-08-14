// 9. Implement array reversal. dont use builtin function

function arrayReversal(array)
{
  let arrayNew = [];
  for(let i=array.length-1;i>=0;i--)
  {
    arrayNew.push(array[i]);
  }
  return arrayNew
}

let array = [4,5,6,7,8,9];
console.log(arrayReversal(array))